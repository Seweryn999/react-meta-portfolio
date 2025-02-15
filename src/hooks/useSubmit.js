import { useState } from "react";

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const useSubmit = () => {
  const [isLoading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  const submit = async (data) => {
    setLoading(true);
    setResponse(null); 

    try {
      await wait(2000); 

      if (Math.random() < 0.5) {
        throw new Error("Something went wrong");
      }

      const successResponse = {
        type: "success",
        message: `Thanks for your submission, ${data.firstName}! We will get back to you shortly.`,
      };
      setResponse(successResponse);
      return successResponse; 
    } catch (error) {
      const errorResponse = {
        type: "error",
        message: "Something went wrong, please try again later!",
      };
      setResponse(errorResponse);
      return errorResponse; 
    } finally {
      setLoading(false);
    }
  };

  return { isLoading, response, submit };
};

export default useSubmit;
