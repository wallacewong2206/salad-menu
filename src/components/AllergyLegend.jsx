import React from "react";

export default function AllergyLegend() {
  const legends = [
    { color: "yellow", name: "Celery" },
    { color: "orange", name: "Cereals" },
    { color: "blue", name: "Crustaceans" },
    { color: "black", name: "Eggs" },
    { color: "grey", name: "Fish" },
    { color: "pink", name: "Sulphites" },
    { color: "brown", name: "Nuts" },
  ];

  return (
    <div className="d-flex flex-wrap justify-content-center my-4">
      {legends.map((legend, index) => (
        <div key={index} className="d-flex align-items-center mx-3">
          <div
            className="rounded-circle me-2"
            style={{
              width: "15px",
              height: "15px",
              backgroundColor: legend.color,
            }}
          ></div>
          <span>{legend.name}</span>
        </div>
      ))}
    </div>
  );
}
