import React, { useState } from "react";
import { Link } from "react-router-dom";
const UpdateDetailPage = () => {
  const [data, setData] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
    cpassword: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setData({ ...data, [name]: value });
  };
  const [previewImage, setPreviewImage] = useState(
    "http://i.pravatar.cc/500?img=7" // Default preview image
  );

  // Function to handle image upload and preview
  const handleImageUpload = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = () => {
        setPreviewImage(reader.result);
      };

      reader.readAsDataURL(file);
    }
  };
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
          accept=".png, .jpg, .jpeg"
          onChange={handleImageUpload}
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
                      onChange={handleInputChange}
                      value={data.fname}
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
                      value={data.lname}
                      onChange={handleInputChange}
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
                    value={data.email}
                    onChange={handleInputChange}
                    placeholder="Your email address"
                  />
                </div>

                <div className="flex items-center justify-between mt-8">
                  <button
                    className="bg-blue hover:bg-blue-dark text-black border font-bold py-2 px-4 rounded"
                    type="submit"
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
