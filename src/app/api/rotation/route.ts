import { NextResponse } from "next/server";

export async function GET() {
  try {
    const API_KEY = process.env.RIOT_API_KEY;
    if (!API_KEY) {
      return NextResponse.json(
        { error: "API Key is missing" },
        { status: 500 }
      );
    }

    const response = await fetch(
      "https://kr.api.riotgames.com/lol/platform/v3/champion-rotations",
      {
        headers: { "X-Riot-Token": API_KEY },
      }
    );

    if (!response.ok) {
      return NextResponse.json(
        { error: "Failed to fetch champion rotation" },
        { status: response.status }
      );
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
