import { connectDb } from "@/app/utils/database";
import { TaskDocument, TaskModel } from "../../../../models/task";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    await connectDb();
    const completedTask: TaskDocument[] = await TaskModel.find({
      isCompleted: true,
    });

    return NextResponse.json({
      message: "タスク取得成功",
      tasks: completedTask,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "タスク取得失敗" }, { status: 500 });
  }
};

export const dynamic = "force-dynamic";
