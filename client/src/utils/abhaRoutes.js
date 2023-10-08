import abhaInstance from "./abhaIntegration";

export const getGenerateOtpUsingAadhaar = async () => {
  const endpoint = "v2/registration/aadhaar/generateOtp";
  const requestData = {
    aadhaar: 239941238506,
  };

  try {
    let response = await abhaInstance.post(endpoint, requestData);
    return response;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const verifyOtpUsingAadhaar = async () => {
  const endpoint = "v2/registration/aadhaar/verifyOTP";
  const requestData = {
    txnId: "123456",
    otp: 123456,
  };
  try {
    let response = await abhaInstance.post(endpoint, requestData);
    return response;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const createHealthIdUsingAadhaar = async () => {
  const endpoint = "v2/registration/aadhaar/createHealthIdByAdhaar";
  const requestData = {
    consent: true,
    consentVersion: "v1.0",
    txnId: "123456"
  };
  try {
    let response = await abhaInstance.post(endpoint, requestData);
    return response;
  } catch (error) {
    console.log(error);
    return error;
  }
};
