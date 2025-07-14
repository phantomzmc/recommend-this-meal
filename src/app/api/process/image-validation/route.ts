import { getWordInObject } from "@/service/translate/object/get-word-in-object";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const req = await request.formData();
    const rawFile = req.get("file");
    if (!rawFile || !(rawFile instanceof File)) {
      console.error("No file provided or invalid file type");
      return NextResponse.json("Invalid file type", { status: 400 });
    }

    const response = await getWordInObject(rawFile);
    if (!response) {
      console.error("No response from getWordInObject");
      return NextResponse.json("No response from getWordInObject", {
        status: 500,
      });
    }
    return NextResponse.json(
      {
        message: response,
      },
      {
        headers: { "Content-Type": "application/json" },
        status: 200,
      }
    );
  } catch (error) {
    console.error("Error in POST request:", error);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}
