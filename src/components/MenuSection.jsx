import React from "react";

export default function MenuSection({ title, items }) {
  return (
    <div className="my-4">
      <h3 className="text-center text-warning mb-4">{title}</h3>
      <div className="row justify-content-center">
        {items.map((item, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="card text-center bg-info border-0 shadow">
              {/* <ImageComponent src={item.image} alt={item.name} /> */}
              <div className="card-body">
                <h5 className="card-title text-dark">{item.name}</h5>
                <p className="card-text text-muted">{item.description}</p>
                <div className="d-flex justify-content-center my-2">
                  {item.allergens.map((allergen, idx) => (
                    <div
                      key={idx}
                      className="rounded-circle me-2"
                      style={{
                        width: "15px",
                        height: "15px",
                        backgroundColor: allergen.color,
                        cursor: "pointer",
                      }}
                      data-bs-toggle="tooltip"
                      title={allergen.name}
                    ></div>
                  ))}
                </div>
                <h6 className="text-success">£{item.price}</h6>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
