const cloudinary = require("cloudinary").v2;
const fs = require("fs");
const path = require("path");

// ================================
// 🔧 CLOUDINARY CONFIGURATION
// ================================
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// ================================
// 📤 UPLOAD SINGLE FILE
// ================================
exports.uploadToCloudinary = async (filePath, folder = "reports") => {
  try {
    const result = await cloudinary.uploader.upload(filePath, {
      folder: `smart-road/${folder}`, // Correct folder path
      resource_type: "auto",          // Supports images & videos
      // ❌ DO NOT USE THESE — THEY BREAK THE SIGNATURE:
      // use_filename: true,
      // unique_filename: false,
      // overwrite: true,
    });

    // Delete local file after upload
    try {
      fs.unlinkSync(filePath);
    } catch (err) {
      console.error("Local file delete error:", err);
    }

    return result;

  } catch (error) {
    console.error("❌ Cloudinary upload error:", error);

    // Delete file even if upload fails
    try { fs.unlinkSync(filePath); } catch { }

    throw new Error("Failed to upload file to Cloudinary");
  }
};

// ================================
// 📤 UPLOAD MULTIPLE FILES
// ================================
exports.uploadMultipleToCloudinary = async (files, folder = "reports") => {
  try {
    const uploads = files.map((file) =>
      exports.uploadToCloudinary(file.path, folder)
    );

    return await Promise.all(uploads);
  } catch (error) {
    console.error("❌ Multiple upload error:", error);
    throw error;
  }
};

// ================================
// 🗑️ DELETE FILE FROM CLOUDINARY
// ================================
exports.deleteFromCloudinary = async (publicId) => {
  try {
    return await cloudinary.uploader.destroy(publicId);
  } catch (error) {
    console.error("❌ Cloudinary delete error:", error);
    throw new Error("Failed to delete file from Cloudinary");
  }
};

// ================================
// 🔗 GENERATE TRANSFORMED IMAGE URL
// ================================
exports.generateImageUrl = (publicId, options = {}) => {
  const defaultOptions = {
    width: 800,
    height: 600,
    crop: "fill",
    quality: "auto",
    format: "auto",
  };

  return cloudinary.url(publicId, { ...defaultOptions, ...options });
};

// ================================
// ✔️ CHECK IF URL IS CLOUDINARY URL
// ================================
exports.isCloudinaryUrl = (url) => {
  return url && url.includes("res.cloudinary.com");
};
