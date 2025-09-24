import { NextResponse } from "next/server";

export interface LeetcodeResponse {
  totalSolved: number;
  totalSubmissions: TotalSubmission[];
}

export interface TotalSubmission {
  difficulty: string;
  count: number;
  submissions: number;
}

// Since chat hook will make a POST request
export async function GET() {
  try {
    const response = await fetch(
      "https://leetcode-api-faisalshohag.vercel.app/bibhash1996",
      {
        headers: {
          "Content-Type": "application/json",
        },
        method: "GET",
      },
    );
    console.log(response);
    const leetcodeData: LeetcodeResponse = await response.json();

    return NextResponse.json({ data: leetcodeData });
  } catch (error) {
    console.log(error);
    return Response.json(
      {
        error: `Internal server error : ${(error as any).message}`,
      },
      { status: 500 },
    );
  }
}
