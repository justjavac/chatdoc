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
          path: string
          project_id: number
          source: string | null
        }
        Insert: {
          checksum?: string | null
          id?: number
          path: string
          project_id: number
          source?: string | null
        }
        Update: {
          checksum?: string | null
          id?: number
          path?: string
          project_id?: number
          source?: string | null
        }
      }
      page_section: {
        Row: {
          content: string | null
          embedding: string | null
          heading: string | null
          id: number
          page_id: number
          slug: string | null
          token_count: number | null
        }
        Insert: {
          content?: string | null
          embedding?: string | null
          heading?: string | null
          id?: number
          page_id: number
          slug?: string | null
          token_count?: number | null
        }
        Update: {
          content?: string | null
          embedding?: string | null
          heading?: string | null
          id?: number
          page_id?: number
          slug?: string | null
          token_count?: number | null
        }
      }
      project: {
        Row: {
          description: string | null
          hash: string | null
          id: number
          logo: string | null
          name: string
          repo: string | null
          slug: string
          website: string | null
        }
        Insert: {
          description?: string | null
          hash?: string | null
          id?: number
          logo?: string | null
          name: string
          repo?: string | null
          slug: string
          website?: string | null
        }
        Update: {
          description?: string | null
          hash?: string | null
          id?: number
          logo?: string | null
          name?: string
          repo?: string | null
          slug?: string
          website?: string | null
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      ivfflathandler: {
        Args: {
          "": unknown
        }
        Returns: unknown
      }
      match_page_sections: {
        Args: {
          embedding: string
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
          query_embedding: string
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
        Returns: string
      }
      vector_dims: {
        Args: {
          "": string
        }
        Returns: number
      }
      vector_norm: {
        Args: {
          "": string
        }
        Returns: number
      }
      vector_out: {
        Args: {
          "": string
        }
        Returns: unknown
      }
      vector_send: {
        Args: {
          "": string
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
