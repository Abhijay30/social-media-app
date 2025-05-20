import { createClient } from "@supabase/supabase-js";

const supabaseURL = "https://umvrhvbxvyhedzzpellu.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVtdnJodmJ4dnloZWR6enBlbGx1Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0Nzc0MDEwOSwiZXhwIjoyMDYzMzE2MTA5fQ.iQm6Av5Txx9NK8dWc0Yqg7pn4Pz3AYPtbVQe8fehqnY";

export const supabase = createClient(supabaseURL, supabaseAnonKey);
