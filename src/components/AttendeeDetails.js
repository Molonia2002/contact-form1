import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AttendeeDetails = () => {
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const uploadImage = async (e) => {
    setLoading(true);
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "YOUR_CLOUDINARY_PRESET");

    try {
      const res = await axios.post("https://api.cloudinary.com/v1_1/YOUR_CLOUDINARY_NAME/image/upload", formData);
      setImage(res.data.secure_url);
    } catch (error) {
      console.error("Upload failed", error);
    }
    setLoading(false);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-[#112240] p-6 rounded-lg w-96">
        <h2 className="text-lg font-bold">Attendee Details</h2>
        
        <div className="mt-4">
          <label className="block text-sm">Upload Profile Photo</label>
          <input type="file" onChange={uploadImage} className="w-full p-2 my-2 bg-gray-800 rounded" />
          {loading ? <p>Uploading...</p> : image && <img src={image} alt="Uploaded" className="w-full rounded mt-2" />}
        </div>

        <input type="text" placeholder="Enter your name" className="w-full p-2 my-2 bg-gray-800 rounded text-white" />
        <input type="email" placeholder="Enter your email" className="w-full p-2 my-2 bg-gray-800 rounded text-white" />

        <button onClick={() => navigate("/ticket-ready")} className="w-full mt-4 bg-[#00A3FF] p-2 rounded">
          Get My Free Ticket
        </button>
      </div>
    </div>
  );
};

export default AttendeeDetails;

