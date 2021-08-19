import React from "react";
import { useState } from "react";
import "../Designs/main.scss";
import imgtest from "../uploads/img1.png";

export default function Profileform() {
  const [imgState, setimgState] = useState(imgtest);

  const imageHandler = (e) => {
    const reader = new FileReader();

    reader.onload = () => {
      if (reader.readyState === 2) {
        setimgState(reader.result);
      }
    };

    reader.readAsDataURL(e.target.files[0]);

    console.log(reader);
  };

  return (
    <div>
      <div className="container">
        <h2>Profile Form</h2>

        <div className="imgbox bod">
          <img src={imgState} alt="" className="imgtest" />
        </div>

        <div className="uploadBox">
          <input
            type="file"
            name="imgupload"
            accept="image/*"
            id="uploadtest"
            className="inpupload"
            onChange={imageHandler}
          />
          <label htmlFor="uploadtest" className="lblupload">
            Upload Imag
          </label>
        </div>
      </div>
    </div>
  );
}
