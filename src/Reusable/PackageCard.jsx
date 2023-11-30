import React,{useState} from "react";
import "./Reusable.css";

const PackageCard = ({ data,index }) => {
    const isPremium=index===2
    console.log(isPremium);
  return (
    <div className={`newPackageCard ${isPremium?"premiumCard":""} w-[320px] h-full`}>
      <div className="topContent">
        <div className="topContentHeader flex flex-col items-center mb-[8px] gap-1">
          <h1>{data?.name}</h1>
          <span>{data?.subContent}</span>
        </div>

        <div className="pricesqft items-center flex flex-col gap-[18px]">
          <span className="price">
            {data?.amount}
          </span>
         <a href="https://docs.google.com/forms/d/1hCQ7Jq3EvtKLPCexKfWoCTQAFsGiK1kYE-77Zwtk9lU/edit" target="_blank">
         <button
           
           >
             <span>Enroll Now</span>
           </button>
         </a>
        </div>
      </div>

      <div style={{background: "#907b7b",
  height: "0.8px"}} className="divider w-full my-[32px]"></div>

      <div className="flex flex-col px-[18px] items-start gap-[8px]">
        {data?.content.map((desc,index) => {
            return (
              <div key={index} className="bottomContent flex gap-2 items-start justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="14"
                  viewBox="0 0 18 14"
                  fill="none"
                >
                  <path
                    d="M2.33887 8.30999L6.14644 12.1176L15.6654 2.59863"
                    stroke="white"
                    stroke-width="3.479"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <h3>{desc}</h3>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default PackageCard;
