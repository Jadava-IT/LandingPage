import { Box } from "@mui/material";
import React from "react";
import Loader from "./Loader";

function LoaderComponent({ showLoader }) {
  console.log(showLoader);
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "background.paper",
    border: "1px solid #fff",
    boxShadow: 24,
    padding: "20px 32px",
    width: "364px",
    "@media (max-width:370px)": {
      width: "320px",
      padding: "20px 22px",
    },
  };

  return (
    <>
      <Box sx={style}>
        {showLoader ? (
          <Loader />
        ) : (
          <div className="text-center">
            <h1 className="text-[14px] font-medium">Form Submitted!</h1>
            <p className="text-[20px] font-normal">
              We will get back you soon.
            </p>
          </div>
        )}
      </Box>
    </>
  );
}

export default LoaderComponent;
