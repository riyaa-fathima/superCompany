import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Sale from "@/models/Sale";

export async function GET(request) {
  try {
    await connectDB();

    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get("page")) || 1;
    const limit = parseInt(searchParams.get("limit")) || 5;

    const skip = (page - 1) * limit;

    const total = await Sale.countDocuments();
    const sales = await Sale.find()
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit);

    return NextResponse.json({
      data: sales,
      pagination: {
        total,
        page,
        pages: Math.ceil(total / limit),
      },
    });
  } catch (err) {
    return NextResponse.json(
      { error: err.message },
      { status: 500 }
    );
  }
}
export async function POST(request) {
  try {
    await connectDB();

    const body = await request.json();

    const { saleName, status, amount, stage, nextActivityDate } = body;

    if (!saleName || !status || !amount || !stage || !nextActivityDate) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    const sale = await Sale.create(body);

    return NextResponse.json(sale, { status: 201 });
  } catch (err) {
    return NextResponse.json(
      { error: err.message },
      { status: 500 }
    );
  }
}
