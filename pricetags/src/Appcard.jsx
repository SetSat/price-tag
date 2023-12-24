import React from "react";
import "./App.css";
import Pricetag from "./Pricetag";


function Appcard() {
  const pricedetails = [
    {
      type: "Free",
      price: "$0/Month",
      features: [
        "Single User",
        "50GB Storage",
        "Unlimited Public projects",
        "Community Access",
        "Unlimited Private Projects",
        "Public Support",
        "Free Subdomain",
        "Monthly Status Report",
      ],
    },
    {
      type: "Pro",
      price: "$9.6/Month",
      features: [
        "Single User",
        "50GB Storage",
        "Unlimited Public projects",
        "Community Access",
        "Unlimited Private Projects",
        "Public Support",
        "Free Subdomain",
        "Monthly Status Report",
      ],
    },
    {
      type: "Premium", // Changed the type to "Premium"
      price: "$20.6/Month",
      features: [
        "Single User",
        "50GB Storage",
        "Unlimited Public projects",
        "Community Access",
        "Unlimited Private Projects",
        "Public Support",
        "Free Subdomain",
        "Monthly Status Report",
      ],
    },
  ];

  return (
    <div className="container d-flex justify-content-center align-items-center">
      <div className="row">
        {pricedetails.map((data, index) => (
          <div className="col-md-4" key={index}>
            <Pricetag {...data}></Pricetag>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Appcard;
