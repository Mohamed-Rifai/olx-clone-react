import React from "react";
import "./Loader.css";

function Loader() {
  return (
    <div>
      <div className="overlay"></div>
      <div className="div_spin">
        <div class="lds-roller">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div>Loading</div>
      </div>
    </div>
  );
}

export default Loader;