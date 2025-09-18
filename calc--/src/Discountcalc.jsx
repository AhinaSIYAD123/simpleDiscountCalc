import React, { useState } from "react";

function Discountcalc() {  
  const [price, setPrice] = useState("");
  const [discount, setDiscount] = useState("");
  const [finalPrice, setFinalPrice] = useState(null);

  const calculateDiscount = () => {
    if (price && discount) {
      const discountedPrice = price - (price * discount) / 100;
      setFinalPrice(discountedPrice.toFixed(2));
    } else {
      alert("Please enter both price and discount!");
    }
  };

  const resetCalculator = () => {
    setPrice("");
    setDiscount("");
    setFinalPrice(null);
  };

  return (
    <div className="card-custom text-center">
      <h2 className="mb-4">Discount Calculator</h2>

      <div className="mb-3 text-start">
        <label className="form-label">Original Price</label>
        <input
          type="number"
          className="form-control"
          placeholder="Enter price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </div>

      <div className="mb-3 text-start">
        <label className="form-label">Discount %</label>
        <input
          type="number"
          className="form-control"
          placeholder="Enter discount"
          value={discount}
          onChange={(e) => setDiscount(e.target.value)}
        />
      </div>

      <div className="d-flex justify-content-center gap-2 mb-3 flex-wrap">
        <button className="btn btn-custom px-4" onClick={calculateDiscount}>
          Calculate
        </button>
        <button
          className="btn btn-secondary px-4"
          style={{ border: "2px solid #ff0000", color: "#ff0000" }}
          onClick={resetCalculator}
        >
          Reset
        </button>
      </div>

      {finalPrice !== null && (
        <h4 className="mt-3">Final Price: {finalPrice}</h4>
      )}
    </div>
  );
}

export default Discountcalc;
