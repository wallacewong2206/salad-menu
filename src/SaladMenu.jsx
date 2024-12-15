import React from "react";
import MenuSection from "./components/MenuSection";
import AllergyLegend from "./components/AllergyLegend";

export default function SaladMenu() {
  const salads = [
    {
      name: "Beetroot Salad",
      price: "5.50",
      description: "Mixed bistro leaves, beetroot, honey roasted walnuts, goats cheese",
      allergens: [{ color: "yellow", name: "Celery" }, { color: "green", name: "Crustaceans" }],
    },
    {
      name: "Pancetta & Prune Salad",
      price: "5.50",
      description: "Mixed bistro leaves, dried prunes, black kalamata olives, smoked pancetta, red onion",
      allergens: [{ color: "black", name: "Eggs" }, { color: "pink", name: "Sulphites" }],
    },
    {
      name: "Parma-Ham Salad",
      price: "5.50",
      description: "Mixed bistro leaves, cherry tomatoes, parma-ham, parmesan grana padano D.O.P.",
      allergens: [
        { color: "yellow", name: "Celery" },
        { color: "orange", name: "Cereals" },
        { color: "black", name: "Eggs" },
      ],
    },
    {
      name: "Zucchini Salad",
      price: "5.50",
      description: "Mixed bistro leaves, parmesan grana padano, zucchini, toasted pine nuts",
      allergens: [{ color: "yellow", name: "Celery" }, { color: "brown", name: "Nuts" }],
    },
  ];

  return (
    <div className="bg-dark text-light min-vh-100 py-5">
      <div className="container">
        <h1 className="text-center text-warning mb-0.5">Salad Menu</h1>
        <div className="row justify-content-center">
          <MenuSection items={salads} />
        </div>
        <AllergyLegend />
      </div>
    </div>
  );
}
