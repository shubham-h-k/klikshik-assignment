import { createClient } from "@/lib/supabase/server";

export async function GET(request: Request) {
  const supabase = createClient();

  const { searchParams } = new URL(request.url);
  const limit = Number(searchParams.get("limit"));

  const { data, error } = await supabase.storage.from("images").list("all", {
    limit,
    offset: 0,
    sortBy: { column: "created_at", order: "desc" },
  });

  if (error) {
    throw new Error(error.message);
  }

  const imageUrls = data.map((file) => {
    const { data } = supabase.storage
      .from("images")
      .getPublicUrl(`all/${file.name}`);
    return data.publicUrl;
  });

  return Response.json({ data: imageUrls });
}
