import React from "react";
import "./App.css";

function Pricetag({ type, price, features }) {
  return (
    <div
      className="row "
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
     <div className="container d-flex justify-content-center align-items-center ">
     <div className="card" style={{backgroundColor:"lightblue"}}>
        <div className="card-body">
          <h3 className="card-title" style={{textAlign:"center"}}>{type}</h3>
          <h5 className="card-title" style={{textAlign:"center"}}>{price}</h5>
          <ul className="">
            {features.map((data, index) => (
              <li key={index}>{data}</li>
            ))}
          </ul>
          <button className="btn btn-primary" style={{marginLeft:"50px"}}>Subscribe</button>
        </div>
      </div>
     </div>
    </div>
  );
}

export default Pricetag;
