import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
);

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  const { data, error } = await supabase
    .from("USUARIOS")
    .select("*")
    .eq("qr_id", id)
    .single();

  if (error || !data) {
    return new Response("No encontrado", { status: 404 });
  }

  return new Response(JSON.stringify(data), {
    headers: { "Content-Type": "application/json" }
  });
}
