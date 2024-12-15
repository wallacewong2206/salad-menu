import React from "react";

export default function MenuItem({ name, price, description, allergens }) {
  return (
    <div className="card mb-3">
      <div className="card-body">
        <h5 className="card-title text-warning">{name} - £{price}</h5>
        <p className="card-text">{description}</p>
        <div className="d-flex">
          {allergens.map((color, index) => (
            <div
              key={index}
              style={{
                width: "15px",
                height: "15px",
                borderRadius: "50%",
                backgroundColor: color,
                marginRight: "5px",
              }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}
