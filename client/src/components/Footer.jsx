import React from "react";

const Footer = () => {
  return (
    <>
      <div className="w-full fixed bottom-0">
        <footer className="w-full bg-grey-lighter py-8">
          <div className=" mx-auto text-center px-8">
            <p className="text-grey-dark mb-2 text-sm">
              This is a product of{" "}
              <span className="font-bold text-blue-400">Health-Sphere</span>
            </p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
