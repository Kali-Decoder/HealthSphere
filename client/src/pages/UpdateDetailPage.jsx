import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDataContext } from "../Context/DataContext";
import axios from "axios";
const UpdateDetailPage = () => {
  const { loggedUserData } = useDataContext();
  const [file, setFile] = useState(null);
  const [fname, setFname] = useState(loggedUserData?.fname);
  const [lname, setLname] = useState(loggedUserData?.lname);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      const reader = new FileReader();

      reader.onload = () => {
        setPreviewImage(reader.result);
      };

      reader.readAsDataURL(selectedFile);
    }
    setFile(selectedFile);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("fname", fname);
    formData.append("lname", lname);
    formData.append("image", file);

    try {
      const response = await axios.post("http://localhost:8080/api/profile/update", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };
  const [previewImage, setPreviewImage] = useState(
    "http://i.pravatar.cc/500?img=7" // Default preview image
  );

  return (
    <>
      <div className="font-sans antialiased bg-grey-lightest">
        <div className="w-full bg-grey-lightest" style={{ paddingTop: "2rem" }}>
          <div className="container mx-auto py-8">
            <div className="w-5/6 lg:w-1/2 mx-auto bg-white">
              <div className="py-4 px-8 text-black text-xl border-b border-grey-lighter">
                Update Your Details
              </div>
              <div className="py-4 px-8">
                <div className="avatar-upload">
                  <div className="avatar-edit">
                    <input
                      type="file"
                      id="imageUpload"
                      name="image"
                      accept=".png, .jpg, .jpeg"
                      onChange={handleFileChange}
                    />
                    <label htmlFor="imageUpload"></label>
                  </div>
                  <div className="avatar-preview">
                    <div
                      id="imagePreview"
                      style={{
                        backgroundImage: `url('${previewImage}')`,
                      }}
                    ></div>
                  </div>
                </div>
                <div className="flex mb-4">
                  <div className="w-1/2 mr-1">
                    <label
                      className="block text-grey-darker text-sm font-bold mb-2"
                      for="first_name"
                    >
                      First Name
                    </label>
                    <input
                      className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                      id="fname"
                      type="text"
                      name="fname"
                      onChange={(e) => setFname(e.target.value)}
                      value={fname}
                      placeholder="Your first name"
                    />
                  </div>
                  <div className="w-1/2 ml-1">
                    <label
                      className="block text-grey-darker text-sm font-bold mb-2"
                      for="last_name"
                    >
                      Last Name
                    </label>
                    <input
                      className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                      id="last_name"
                      type="text"
                      name="lname"
                      onChange={(e) => setLname(e.target.value)}
                      value={lname}
                      placeholder="Your last name"
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label
                    className="block text-grey-darker text-sm font-bold mb-2"
                    for="email"
                  >
                    Email Address
                  </label>
                  <input
                    className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                    id="email"
                    type="email"
                    name="email"
                    disabled
                    value={loggedUserData?.email}
                    placeholder="Your email address"
                  />
                </div>

                <div className="flex items-center justify-between mt-8">
                  <button
                    className="bg-blue hover:bg-blue-dark text-black border font-bold py-2 px-4 rounded"
                    type="submit"
                    onClick={handleSubmit}
                  >
                    Update Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdateDetailPage;
