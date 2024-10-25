const PriceCard = (props) => {
  const { handleRequest, amount, plan, head_1, buttonTxt } = props;
  return (
    <>
      <div className="col">
        <div className="card mb-4 rou shadow-sm">
          <div className="plan-label">
            <h5 style={{ color: "#fff" }}>{plan}</h5>
          </div>

          <div className="card-body">
            <h2 className="card-title pricing-card-title">
              {!amount ? (
                <>Your Active Plan</>
              ) : (
                <>
                  Rs. {amount}{" "}
                  <small className="text-muted fw-light">/mo</small>
                </>
              )}
            </h2>
            <ul className="list-unstyled mt-3 mb-4">
              <li>{head_1}</li>
              <li>Email support</li>
              <li>Help center access</li>
            </ul>
            <button
              style={{ cursor: "pointer" }}
              onClick={() => handleRequest(amount, plan, buttonTxt)}
              className="subscribe-button"
            >
              {buttonTxt}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default PriceCard;
