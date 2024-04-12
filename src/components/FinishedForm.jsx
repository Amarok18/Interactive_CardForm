const FinishedForm = ({onContinue}) => {
  return (
    <>
      <div id="cardSubmitted">
        <img src="/images/icon-complete.svg" />
        <h1 id="thanksMsg">THANK YOU!</h1>
        <h3>We've added your card details</h3>
        <button id="continueBtn" onClick={onContinue}>CONTINUE</button>
      </div>
    </>
  );
};

export default FinishedForm;
