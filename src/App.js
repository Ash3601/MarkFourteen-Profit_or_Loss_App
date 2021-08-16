import { useState } from "react";
import "./styles.css";

export default function App() {
  var [result, setResult] = useState("");

  function checkHandler(event) {
    event.preventDefault();

    let diff, percent, msg;

    let body = document.querySelector("body");
    let initialPrice = document.querySelector("#initial-price").value;
    let quantity = document.querySelector("#quantity").value;
    let currentPrice = document.querySelector("#current-price").value;

    // convert to number *IMP*
    initialPrice = Number(initialPrice);
    quantity = Number(quantity);
    currentPrice = Number(currentPrice);

    if (initialPrice > currentPrice) {
      // loss
      diff = initialPrice - currentPrice;
      percent = (diff / initialPrice) * 100;

      msg = `You have incurred ${percent.toFixed(1)}% loss worth Rs.${(
        diff * quantity
      ).toFixed(1)} 😞`;

      if (percent > 50) {
        body.style.backgroundColor = "#e6877a";
      } else {
        body.style.backgroundColor = "#121212";
      }
    } else if (currentPrice > initialPrice) {
      // profit
      diff = currentPrice - initialPrice;
      percent = (diff / initialPrice) * 100;

      msg = `You have gained ${percent.toFixed(1)}% profit worth Rs.${(
        diff * quantity
      ).toFixed(1)} 😀`;

      if (percent > 50) {
        body.style.backgroundColor = "#7cc491";
        body.style.color = "black";
      } else {
        body.style.backgroundColor = "#121212";
      }
    } else {
      // no profit or loss
      msg = "You're still at no profit no loss! 😐";
      body.style.backgroundColor = "#121212";
    }
    setResult(msg);
  }

  function flashButton(elem) {
    "use strict";

    elem.classList.remove("animate");
    setTimeout(function () {
      elem.classList.add("animate");
    }, 30);
  }

  return (
    <div className="App">
      <header>
        <h1>Check Stocks Profit or Loss</h1>
      </header>

      <main>
        <div className="wrapper">
          <p>Check if your stocks gained profit or not?</p>

          <form onSubmit={(event) => checkHandler(event)}>
            <input
              type="number"
              id="initial-price"
              placeholder="Initial Stock Price*"
              required
              autoFocus
              min="1"
            ></input>
            <input
              type="number"
              id="quantity"
              placeholder="Quantity of Stock*"
              required
              min="1"
            ></input>
            <input
              type="number"
              id="current-price"
              placeholder="Current Stock Price*"
              required
              min="1"
            ></input>

            <button
              className="btn btn-white btn-animate"
              type="submit"
              className="check-btn"
            >
              Check
            </button>
          </form>

          <div id="result">{result}</div>
        </div>
      </main>
    </div>
  );
}
