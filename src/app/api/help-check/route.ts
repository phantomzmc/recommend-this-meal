export async function GET() {
  return new Response(
    JSON.stringify({
      message: "This is a help check API endpoint.",
    }),
    {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
}