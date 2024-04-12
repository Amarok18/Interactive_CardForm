const Cards = (props) => {
  let { cardOwnername, cardnumber, expMonth, expYear, cardCvc } = props.values;
  return (
    <>
      <div id="frontViewCard">
        <div id="cardLogo">
          <img src="/images/card-logo.svg" />
        </div>
        <div id="cardFinalN">
          <div id="card-finalNumber">
            <div>
              <span>{cardnumber[0] ? cardnumber[0] : 0}</span>
              <span>{cardnumber[1] ? cardnumber[1] : 0}</span>
              <span>{cardnumber[2] ? cardnumber[2] : 0}</span>
              <span>{cardnumber[3] ? cardnumber[3] : 0}</span>
            </div>
            <div>
              <span>{cardnumber[4] ? cardnumber[4] : 0}</span>
              <span>{cardnumber[5] ? cardnumber[5] : 0}</span>
              <span>{cardnumber[6] ? cardnumber[6] : 0}</span>
              <span>{cardnumber[7] ? cardnumber[7] : 0}</span>
            </div>
            <div>
              <span>{cardnumber[8] ? cardnumber[8] : 0}</span>
              <span>{cardnumber[9] ? cardnumber[9] : 0}</span>
              <span>{cardnumber[10] ? cardnumber[10] : 0}</span>
              <span>{cardnumber[11] ? cardnumber[11] : 0}</span>
            </div>
            <div>
              <span>{cardnumber[12] ? cardnumber[12] : 0}</span>
              <span>{cardnumber[13] ? cardnumber[13] : 0}</span>
              <span>{cardnumber[14] ? cardnumber[14] : 0}</span>
              <span>{cardnumber[15] ? cardnumber[15] : 0}</span>
            </div>
          </div>
        </div>
        <div id="cardOwnerExp">
          <input
            type="text"
            id="cardOwner"
            placeholder="Jane Appleseed"
            readOnly
            value={cardOwnername}
          />
          <input
            id="expirationDate"
            value={`${expMonth?expMonth:"00"}/${expYear?expYear:"00"}`}
            readOnly
          />
        </div>
      </div>
      <div id="backViewCard">
        <div>
          <input
            id="card-finalCvc"
            placeholder="000"
            type="number"
            value={cardCvc}
            readOnly
          />
        </div>
      </div>
    </>
  );
};

export default Cards;
