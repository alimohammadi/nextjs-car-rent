import { NextRequest, NextResponse } from "next/server";
const BASE_URL = "https://api.mapbox.com/search/searchbox/v1/suggest";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const searchText = searchParams.get("q");

  const res = await fetch(
    BASE_URL +
      `?q=${searchText}&language=en&session_token=003b0efa-8aab-4bd1-8904-5caedb30d012&access_token=` +
      process.env.MAPBOX_ACCESS_TOKEN
  );

  const searchResult = await res.json();
  return NextResponse.json(searchResult);
}
