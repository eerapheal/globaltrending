import { NextResponse, NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  try {
  } catch (e) {
    console.log(e);
    return NextResponse.json({
      success: false,
      message:
        "something went wrong ! please try again by refreshing the browser",
    });
  }
}
