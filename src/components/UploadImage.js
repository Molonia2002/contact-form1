
import React, { useState } from "react";

const UploadImage = ({ setAvatarUrl }) => {
  const [image, setImage] = useState(null);

  const handleUpload = async (e) => {
    const file = e.target.files[0];
    setImage(file);

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "your_cloudinary_preset");

    const res = await fetch("https://api.cloudinary.com/v1_1/your_cloud_name/image/upload", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    setAvatarUrl(data.secure_url);
  };

  return (
    <div>
      <input type="file" onChange={handleUpload} />
      {image && <p>{image.name}</p>}
    </div>
  );
};

export default UploadImage;
