import { geminiGetItemInReceipt } from "@/service/llm/gemini/get-name-object-in-picture";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const file = formData.get("file") as File;
    const itemInReceipt = await geminiGetItemInReceipt(file);
    return NextResponse.json({ itemInReceipt });
  } catch (error) {
    console.error("Error in POST request:", error);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}