import { geminiGetDataInPictureByPrompt } from "@/service/llm/gemini/get-name-object-in-picture";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const prompt = `
  วิเคราะห์ภาพอาหารต่อไปนี้และตอบในรูปแบบ JSON ที่สามารถนำไปใช้ในแอปแนะนำอาหาร โดยเนื้อหาประกอบด้วย:
	1.	menu_name: ชื่อเมนูอาหาร
	2.	description: คำอธิบายสั้น ๆ ของเมนูนี้
	3.	ingredients: รายการวัตถุดิบพร้อมปริมาณโดยประมาณ
	4.	steps: ขั้นตอนการทำอาหารอย่างละเอียด
	5.	nutrition: ข้อมูลโภชนาการโดยประมาณ เช่น:
        •	calories (kcal)
        •	protein (g)
        •	fat (g)
        •	carbohydrates (g)
	6.	tags: หมวดหมู่ เช่น “อาหารไทย”, “อาหารเช้า”, “สุขภาพดี”, “มังสวิรัติ” ฯลฯ

    หากภาพมีหลายเมนู ให้เลือกเมนูหลักที่สุดหรือเด่นที่สุดในภาพ
    หากไม่สามารถระบุส่วนผสมแน่ชัดได้ ให้ประมาณจากลักษณะอาหาร
  `;

  try {
    const req = await request.formData();
    const rawFile = req.get("file");
    if (!rawFile || !(rawFile instanceof File)) {
      console.error("No file provided or invalid file type");
      return NextResponse.json("Invalid file type", { status: 400 });
    }

    const response = await geminiGetDataInPictureByPrompt(rawFile, prompt);
    if (!response) {
      return Response.json({ message: "No data found" }, { status: 404 });
    }
    return Response.json(
      {
        data: response,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error("Error in GET request:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
