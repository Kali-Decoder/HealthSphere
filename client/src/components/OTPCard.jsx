import React, { useState } from "react";

const OTPCard = () => {
  const [otp, setOTP] = useState(["", "", "", "", "", ""]);

  const handleOTPChange = (e, index) => {
    const value = e.target.value;
    if (/^\d*$/.test(value) && value.length <= 1) {
      const newOTP = [...otp];
      newOTP[index] = value;
      setOTP(newOTP);
      if (index < 5 && value !== "") {
        // Automatically move to the next input field
        document.getElementById(`otp__field__${index + 2}`).focus();
      }
    }
  };
  const verifyOTP = (e) => {
    e.preventDefault();
    const userOTP = otp.join("");
    console.log(userOTP);
  }
  return (
    <>
      <form className="otp-form w-1/2" name="otp-form">
        <div className="title">
          <h3>OTP VERIFICATION</h3>
          <p className="info">
            An otp has been sent to neerajchoubisa876@gmail.com
          </p>
          
        </div>
        <div className="otp-input-fields mt-5">
          <div className="flex gap-4 mx-auto">
          {otp.map((value, index) => (
            <input
              key={index}
              type="number"
              className={`otp__digit otp__field__${index + 1}`}
              value={value}
              onChange={(e) => handleOTPChange(e, index)}
              id={`otp__field__${index + 1}`}
            />
          ))}
          </div>
          <div className="flex flex-col items-center justify-between mt-8">
          <p className="msg font-bold">Please enter OTP to verify</p>
                  <button
                    className="bg-blue mt-3 hover:bg-blue-dark text-black border font-bold py-2 px-4 rounded"
                    type="submit"
                    onClick={verifyOTP}
                  >
                  Verify OTP
                  </button>
                </div>
        </div>
      </form>
    </>
  );
};

export default OTPCard;
