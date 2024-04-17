import React, { useEffect } from "react";
import honeypotz from "../assets/images/honeypotz.png";
import HoneyPotz from "../HoneyPotz";

const PricingTable: React.FC = () => {
  // [script async src="https://js.stripe.com/v3/pricing-table.js"][/script]
  // <stripe-pricing-table pricing-table-id="prctbl_1NzIh6E3jUhiKLS7fGIuKlKP"
  // publishable-key="pk_live_cqQEmbQ2CbUu2Fh3an1M9wWx">
  // </stripe-pricing-table>

  useEffect(() => {
    // Load Stripe.js
    const stripeJs = document.createElement("script");
    stripeJs.src = "https://js.stripe.com/v3/pricing-table.js";
    stripeJs.async = true;
    stripeJs.onload = () => {
      // Initialize Stripe with your publishable key
      //   const stripe = Stripe("pk_live_cqQEmbQ2CbUu2Fh3an1M9wWx");

      // Add the Pricing Table
      const pricingTable = document.createElement("stripe-pricing-table");
      pricingTable.setAttribute(
        "pricing-table-id",
        "prctbl_1NzIh6E3jUhiKLS7fGIuKlKP"
      );
      pricingTable.setAttribute(
        "publishable-key",
        "pk_live_cqQEmbQ2CbUu2Fh3an1M9wWx"
      );

      // Append the Pricing Table to your component
      const container = document.getElementById("stripe_container");

      // Clear the container's existing content
      if (container) {
        container.innerHTML = "";
      }

      if (container) {
        console.log(container);
        container.appendChild(pricingTable);
      }
    };

    document.head.appendChild(stripeJs);
  }, []);

  return (
    <>
      <div id="stripe_container"></div>
      <HoneyPotz />
    </>
  );
};

export default PricingTable;
