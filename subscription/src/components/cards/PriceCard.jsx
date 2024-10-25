const PriceCard = (props) => {
  const { handleRequest, amount, plan, head_1, buttonTxt } = props;
  return (
    <>
      <div className="col">
        <div className="card mb-4 rounded-3 shadow-sm">
          <div className="card-header py-3">
            <h4 className="my-0 fw-normal">{plan}</h4>
          </div>

          <div className="card-body">
            <h1 className="card-title pricing-card-title">
              {!amount ? (
                <>Your Active Plan</>
              ) : (
                <>
                  Rs. {amount}{" "}
                  <small className="text-muted fw-light">/mo</small>
                </>
              )}
            </h1>
            <ul className="list-unstyled mt-3 mb-4">
              <li>{head_1}</li>
              <li>Email support</li>
              <li>Help center access</li>
            </ul>
            <button
              style={{ cursor: "pointer" }}
              onClick={() => handleRequest(amount, plan, buttonTxt)}
              className="w-100 btn btn-lg btn-outline-danger"
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
