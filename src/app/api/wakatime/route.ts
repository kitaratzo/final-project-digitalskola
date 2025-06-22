import { WakaTimeService } from "@/services/wakatime";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const stats = await WakaTimeService.getTotalTime();

    if (!stats) {
      return NextResponse.json(
        { error: "Failed to fetch WakaTime stats" },
        { status: 500 }
      );
    }

    // Sem cache - dados sempre atualizados
    return NextResponse.json(stats, {
      headers: {
        "Cache-Control": "no-cache, no-store, must-revalidate",
        "Pragma": "no-cache",
        "Expires": "0",
      },
    });
  } catch (error) {
    console.error("WakaTime API route error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
