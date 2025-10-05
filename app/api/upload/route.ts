import { NextRequest, NextResponse } from "next/server";
import { v2 as cloudinary } from "cloudinary";
import tinify from "tinify"; 

// Configure Tinify
tinify.key = process.env.TINIFY_API_KEY!;

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME!,
  api_key: process.env.CLOUDINARY_API_KEY!,
  api_secret: process.env.CLOUDINARY_API_SECRET!,
});

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const files = formData.getAll("files") as File[];

    if (!files || files.length === 0) {
      return NextResponse.json({ error: "No files provided" }, { status: 400 });
    }

    const uploadPromises = files.map(async (file) => {
      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);

      // 1️⃣ Compress using Tinify
      const compressedBuffer = await tinify.fromBuffer(buffer).toBuffer();

      // 2️⃣ Upload compressed image to Cloudinary
      return new Promise<string>((resolve, reject) => {
        const uploadStream = cloudinary.uploader.upload_stream(
          {
            resource_type: "auto",
            folder: "aadi-events",
          },
          (error, result) => {
            if (error) reject(error);
            else resolve(result!.secure_url);
          }
        );

        uploadStream.end(compressedBuffer);
      });
    });

    const uploadedUrls = await Promise.all(uploadPromises);

    return NextResponse.json({ success: true, urls: uploadedUrls });
  } catch (error) {
    console.error("Upload error:", error);
    return NextResponse.json(
      { error: "Failed to upload images" },
      { status: 500 }
    );
  }
}
