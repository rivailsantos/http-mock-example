import { userMockData } from "@/src/mock";
import axios from "axios";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const first = searchParams.get("get");
  if (!first) {
    const { data } = await axios.get(
      "https://randomuser.me/api/?page=3&results=10&seed=abc"
    );
    return NextResponse.json(data);
  } else {
    const user = userMockData.results[0];
    return NextResponse.json(user);
  }
}
