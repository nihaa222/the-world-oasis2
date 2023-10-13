// import { createClient } from "@supabase/supabase-js";

// export const supabaseUrl = "https://dclaevazetcjjkrzczpc.supabase.co";
// const supabaseKey =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRjbGFldmF6ZXRjamprcnpjenBjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODMyOTIzNDQsImV4cCI6MTk5ODg2ODM0NH0.LGg0M-taoHgKtxCzr9owrb09epnPaO_Yfz6xVE54sIY";
// const supabase = createClient(supabaseUrl, supabaseKey);

// export default supabase;

import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://ckyshmbuwefjehoqhjwr.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNreXNobWJ1d2VmamVob3FoandyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTYxODc1NDIsImV4cCI6MjAxMTc2MzU0Mn0.GxbE3DmxPEivsjcqDJKGvRcclGnfxHcqVMDrVUwgP0w";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
