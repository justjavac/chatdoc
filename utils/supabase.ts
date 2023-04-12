import "server-only";

import { createClient } from '@supabase/supabase-js'
import type { Database } from "@/types/supabase";

export default createClient<Database>(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)
