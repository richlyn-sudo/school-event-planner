import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://lritwzujccjyqizashpy.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxyaXR3enVqY2NqeXFpemFzaHB5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzk5MDU3NDIsImV4cCI6MjA5NTQ4MTc0Mn0.w4WvVFTtDi1XNWsDTRwENHs3ZXjYYo8BtH0clOxAWQ0";

export const supabase = createClient(
  supabaseUrl,
  supabaseAnonKey
);