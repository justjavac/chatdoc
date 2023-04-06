export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      page: {
        Row: {
          checksum: string | null
          id: number
          meta: Json | null
          parent_page_id: number | null
          path: string
          project_id: number
          source: string | null
          type: string | null
        }
        Insert: {
          checksum?: string | null
          id?: number
          meta?: Json | null
          parent_page_id?: number | null
          path: string
          project_id: number
          source?: string | null
          type?: string | null
        }
        Update: {
          checksum?: string | null
          id?: number
          meta?: Json | null
          parent_page_id?: number | null
          path?: string
          project_id?: number
          source?: string | null
          type?: string | null
        }
      }
      page_section: {
        Row: {
          content: string | null
          embedding: unknown | null
          heading: string | null
          id: number
          page_id: number
          slug: string | null
          token_count: number | null
        }
        Insert: {
          content?: string | null
          embedding?: unknown | null
          heading?: string | null
          id?: number
          page_id: number
          slug?: string | null
          token_count?: number | null
        }
        Update: {
          content?: string | null
          embedding?: unknown | null
          heading?: string | null
          id?: number
          page_id?: number
          slug?: string | null
          token_count?: number | null
        }
      }
      pg: {
        Row: {
          content: string | null
          content_length: number | null
          content_tokens: number | null
          embedding: unknown | null
          id: number
          method: string | null
          operation_id: string | null
          summary: string | null
          tag: string | null
        }
        Insert: {
          content?: string | null
          content_length?: number | null
          content_tokens?: number | null
          embedding?: unknown | null
          id?: number
          method?: string | null
          operation_id?: string | null
          summary?: string | null
          tag?: string | null
        }
        Update: {
          content?: string | null
          content_length?: number | null
          content_tokens?: number | null
          embedding?: unknown | null
          id?: number
          method?: string | null
          operation_id?: string | null
          summary?: string | null
          tag?: string | null
        }
      }
      project: {
        Row: {
          description: string | null
          id: number
          logo: string | null
          name: string
          slug: string
        }
        Insert: {
          description?: string | null
          id?: number
          logo?: string | null
          name: string
          slug: string
        }
        Update: {
          description?: string | null
          id?: number
          logo?: string | null
          name?: string
          slug?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      get_page_parents: {
        Args: {
          page_id: number
        }
        Returns: {
          id: number
          parent_page_id: number
          path: string
          meta: Json
        }[]
      }
      ivfflathandler: {
        Args: {
          "": unknown
        }
        Returns: unknown
      }
      match_page_sections: {
        Args: {
          embedding: unknown
          match_threshold: number
          match_count: number
          min_content_length: number
        }
        Returns: {
          id: number
          page_id: number
          slug: string
          heading: string
          content: string
          similarity: number
        }[]
      }
      pg_search: {
        Args: {
          query_embedding: unknown
          similarity_threshold: number
          match_count: number
        }
        Returns: {
          id: number
          summary: string
          operation_id: string
          tag: string
          method: string
          content: string
          content_length: number
          content_tokens: number
          similarity: number
        }[]
      }
      vector_avg: {
        Args: {
          "": number[]
        }
        Returns: unknown
      }
      vector_dims: {
        Args: {
          "": unknown
        }
        Returns: number
      }
      vector_norm: {
        Args: {
          "": unknown
        }
        Returns: number
      }
      vector_out: {
        Args: {
          "": unknown
        }
        Returns: unknown
      }
      vector_send: {
        Args: {
          "": unknown
        }
        Returns: string
      }
      vector_typmod_in: {
        Args: {
          "": unknown[]
        }
        Returns: number
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
