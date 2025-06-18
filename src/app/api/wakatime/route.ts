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

    // Cache por 1 hora
    return NextResponse.json(stats, {
      headers: {
        'Cache-Control': 'public, max-age=3600, stale-while-revalidate=1800'
      }
    });
  } catch (error) {
    console.error("WakaTime API route error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
