import { getDataFoodByQueryParam } from "@/service/usda/food/get-data-food-by-query-param";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
    const req = request.nextUrl.searchParams;
    const name = req.get("name") ?? '';
    console.log("🚀 ~ GET ~ name:", name)
    const response = await getDataFoodByQueryParam(name);
    if (!response) {
        return Response.json({ message: "No data found" }, { status: 404 });
    }
    const topFood = response.foods[0];
    const nutrients = topFood.foodNutrients.slice(0, 5); // ตัดเฉพาะหลัก ๆ
    return Response.json({
        data: {
            topFood,
            description: topFood.description,
            nutrients
        }
    }, {
        status: 200,
    });
}