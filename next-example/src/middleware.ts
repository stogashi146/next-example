import { NextRequest, NextResponse } from "next/server";

export const middleware = (request: NextRequest) => {
  console.log("ミドルウェア");

  return NextResponse.next();
};

// メインページとタスクページのみミドルウェアを実行する
export const config = {
  matcher: ["/", "/task"],
};
