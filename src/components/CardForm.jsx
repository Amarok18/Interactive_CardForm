import { useEffect, useState } from "react";
import Cards from "./Cards";
import FinishedForm from "./FinishedForm";

export const CardForm = () => {
  const [showAlternateComponent, setShowAlternateComponent] = useState(false);
  const [errorMsg, setErrorMsg] = useState({
    cardOwnerNameError: "",
    cardnumberError: "",
    expMonthError: "",
    expYearError: "",
    cardCvcError: "",
  });
  const [input, setInput] = useState({
    cardOwnername: "",
    cardnumber: "",
    expMonth: "",
    expYear: "",
    cardCvc: "",
  });
  function handleContinue(){
    setInput({
      cardOwnername: "",
      cardnumber: "",
      expMonth: "",
      expYear: "",
      cardCvc: "",
    });
    setShowAlternateComponent(false)
  }
  function handleChange(e) {
    if (e.target.name === "cardOwnername") {
      if (e.target.value !== "" && e.target.value.length <= 5) {
        setErrorMsg((prevData) => {
          return {
            ...prevData,
            cardOwnerNameError: "Name length incorrect",
          };
        });
      } else {
        setErrorMsg((prevData) => {
          return {
            ...prevData,
            cardOwnerNameError: "",
          };
        });
      }
    }
    if (e.target.name === "cardnumber") {
      if (e.target.value !== "" && e.target.value.length !== 16) {
        setErrorMsg((prevData) => {
          return {
            ...prevData,
            cardnumberError: "Wrong Card format",
          };
        });
      } else {
        setErrorMsg((prevData) => {
          return {
            ...prevData,
            cardnumberError: "",
          };
        });
      }
    }
    if (e.target.name === "expMonth") {
      const month = parseInt(e.target.value, 10);
      if (e.target.value !== "" && (isNaN(month) || month < 1 || month > 12)) {
        setErrorMsg((prevData) => ({
          ...prevData,
          expMonthError: "Invalid month",
        }));
      } else {
        setErrorMsg((prevData) => ({
          ...prevData,
          expMonthError: "",
        }));
      }
    }
    if (e.target.name === "expYear") {
      const year = parseInt(e.target.value, 10);
      if (e.target.value !== "" && (isNaN(year) || year < 1 || year < 24)) {
        setErrorMsg((prevData) => ({
          ...prevData,
          expYearError: "Invalid year",
        }));
      } else {
        setErrorMsg((prevData) => ({
          ...prevData,
          expYearError: "",
        }));
      }
    }
    setInput((prevData) => {
      return {
        ...prevData,
        [e.target.name]: e.target.value,
      };
    });
  }

  function submitForm(e) {
    e.preventDefault();
    setShowAlternateComponent(true);
  }
  return (
    <>
      <div id="cards-container">
        <Cards values={input} />
      </div>
      <div id="form-container">
      {showAlternateComponent ? <FinishedForm onContinue={handleContinue}/> : (
        <form id="cardForm" onSubmit={submitForm}>
          <label className="labelCard" htmlFor="cardHolderName">
            CARDHOLDER NAME
          </label>
          <input
            id="cardHolderName"
            placeholder="e.g. Jane Appleseed"
            name="cardOwnername"
            value={input.cardOwnername}
            required
            onChange={handleChange}
          />
          {<span className="errorMsg">{errorMsg.cardOwnerNameError}</span>}

          <label htmlFor="cardNumber">CARD NUMBER</label>
          <input
            id="cardNumber"
            placeholder="e.g. 1234 5678 9123 0000"
            type="number"
            required
            name="cardnumber"
            value={input.cardnumber}
            onChange={handleChange}
            maxLength={16}
          />
          {<span className="errorMsg">{errorMsg.cardnumberError}</span>}
          <div className="cardDateCvcLabel">
            <label htmlFor="expDate">EXP.DATE (MM/YY)</label>
            <label htmlFor="cvc">CVC</label>
          </div>
          <div className="cardDateCvc">
            <input
              id="expDate"
              placeholder="MM"
              name="expMonth"
              onChange={handleChange}
              value={input.expMonth}
              required
              maxLength={2}
            />
            {<span className="errorMsg">{errorMsg.expMonthError}</span>}
            <input
              placeholder="YY"
              name="expYear"
              value={input.expYear}
              onChange={handleChange}
              maxLength={2}
              required
            />
            {<span className="errorMsg">{errorMsg.expYearError}</span>}
            <input
              id="cvc"
              placeholder="e.g. 123"
              name="cardCvc"
              required
              value={input.cardCvc}
              onChange={handleChange}
              maxLength={3}
              
            />
          </div>
          <button
            id="confirmBtn"
            disabled={Object.values(errorMsg).some((error) => error !== "")}
          >
            CONFIRM
          </button>
        </form>
      )}
      </div>
    </>
  );
};
