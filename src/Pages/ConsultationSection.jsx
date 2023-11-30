import React from "react";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link} from "react-router-dom";

const ConsultationSection = () => {

  return (

      <section className=" bg-[#131312] mb-8 mt-8  h-fit  md:py-[40px] lg:py-[4.3rem]">
        <div className="hidden md:flex  items-center justify-center px-[16px] md:px-[0px] mx-auto md:max-w-[694px]  lg:max-w-[70rem] ConsultationTopBox1024lp">
          <div className="md:flex md:flex-col items-center  gap-4">
            <h2 className="ConsultationHeading text-center">
              Are You Looking For a Job?
            </h2>
            <div
              className="cursor-pointer"
            >
              <Link
                className="ConsultationButton"
                aria-label="get-free-consultation"
                to="/contact"
              >
                Apply Now
                {/* mobile  */}
                <span className="hidden md:block">
                  <ArrowForwardIcon sx={{
                    '&.MuiSvgIcon-root':{
                      width:"24px",
                      height:"24px"
                    },
                    '@media (min-width: 768px)':{
                      '&.MuiSvgIcon-root':{
                        width:"15px",
                        height:"15px"
                      }
                    }
                  }} />
                </span>
              </Link>
            </div>
          </div>

          {/* {<div className=" lg:w-[300px] md:w-[200px]">
            <img
              src="https://d2aknbw0t7002k.cloudfront.net/buildhome/t2.png"
              alt="consultation"
              className="h-full lg:w-full md:w-full"
              loading="lazy"
            />
          </div>} */}
        </div>
        {/* mobile style  */}
        <div
          className="bg-[#131312] justify-center md:hidden pt-[26px] pb-[48px] max-w-full items-end flex px-4"
        >
          <div className="w-full flex flex-col items-center">
            <p className="ConsultationHeading">
              Are You Looking For a Job?
            </p>
            <Link to="/contact">
            <button
              className="ConsultationButton"
            >
              Apply Now
              <ArrowForwardIcon className="md:hidden block" style={{ width: "16px", height: "16px" }} />
            </button>
            </Link>
          </div>
          {/* {
            <div>
              <img
                src="https://d2aknbw0t7002k.cloudfront.net/buildhome/t2.png"
                alt="consultation"
                className=" w-[11rem] h-[8rem]"
                loading="lazy"
              />
            </div>
          } */}
        </div>
      </section>
  );
};
export default ConsultationSection;
