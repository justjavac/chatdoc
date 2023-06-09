export function getEdgeFunctionUrl() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL?.replace(/\/$/, "");

  if (!supabaseUrl) {
    return undefined;
  }

  // https://github.com/supabase/supabase-js/blob/10d3423506cbd56345f7f6ab2ec2093c8db629d4/src/SupabaseClient.ts#L96
  const isPlatform = supabaseUrl.match(/(supabase\.co)|(supabase\.in)/);

  if (isPlatform) {
    const [schemeAndProjectId, domain, tld] = supabaseUrl.split(".");
    return `${schemeAndProjectId}.functions.${domain}.${tld}`;
  } else {
    return `${supabaseUrl}/functions/v1`;
  }
}
