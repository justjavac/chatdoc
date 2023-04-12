create extension if not exists vector with schema public;

create table "public"."project" (
  id bigserial primary key,
  slug text not null unique,
  name text not null,
  logo text,
  hash text,
  repo text,
  website text,
  description text
);

create table "public"."page" (
  id bigserial primary key,
  path text not null,
  source text,
  checksum text,
  project_id bigint not null references public.project on delete cascade,
  unique (path, project_id)
);

create table "public"."page_section" (
  id bigserial primary key,
  page_id bigint not null references public.page on delete cascade,
  slug text,
  heading text,
  content text,
  token_count int,
  embedding vector(1536)
);

create or replace function match_page_sections(project_id int, embedding vector(1536), match_threshold float, match_count int, min_content_length int)
returns table (id bigint, page_id bigint, slug text, heading text, content text, similarity float)
language plpgsql
as $$
#variable_conflict use_variable
begin
  return query
  select
    page_section.id,
    page_section.page_id,
    page_section.slug,
    page_section.heading,
    page_section.content,
    (page_section.embedding <#> embedding) * -1 as similarity
  from page_section
  inner join page on page.id = page_section.page_id
  where page.project_id = project_id

  -- 我们只关心具有实用 content 的 sections
  and length(page_section.content) >= min_content_length

  -- 由于 Postgres 的限制，点积是负数，因此我们对其取反。
  and (page_section.embedding <#> embedding) * -1 > match_threshold

  -- OpenAI embeddings 被规范化为长度为 1，因此余弦相似度和点积将产生相同的结果。
  -- 使用点积可以使计算稍微加快。
  --
  -- 对于不同的语法，请参见 https://github.com/pgvector/pgvector
  order by page_section.embedding <#> embedding
  
  limit match_count;
end;
$$;
