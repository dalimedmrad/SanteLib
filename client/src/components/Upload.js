import React, { useState } from "react";
import axios from "axios";
const Upload = () => {
  const [cardImg, setCardImg] = useState(false);
  const [loading, setLoading] = useState(false);

  const styleUpload = {
    display: cardImg ? "block" : "none",
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    try {
      const file = e.target.files[0];
      if (!file) return alert("File not exist.");

      if (file.size > 1024 * 1024)
        // 1mb
        return alert("Size too large!");

      if (file.type !== "image/jpeg" && file.type !== "image/png")
        // 1mb
        return alert("File format is incorrect.");

      let formData = new FormData();
      formData.append("file", file);
      setLoading(true);
      const res = await axios.post("/upload", formData, {
        headers: { "content-type": "multipart/form-data" },
      });

      setLoading(false);
      setCardImg(res.data);
    } catch (err) {
      alert(err.response.data.msg);
    }
  };

  const handleDestroy = async () => {
    try {
      setLoading(true);
      await axios.post("/destroy", { public_id: cardImg.public_id });
      setLoading(false);
      setCardImg(false);
    } catch (err) {
      alert(err.response.data.msg);
    }
  };

  return (
    <div>
      <input type="file" name="file" id="file_up" onChange={handleUpload} />
      <div id="file_img" style={styleUpload}>
        <img src={cardImg ? cardImg.url : ""} alt="" />
        <button onClick={handleDestroy}>X</button>
      </div>
    </div>
  );
};

export default Upload;
