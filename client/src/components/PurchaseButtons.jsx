import React from 'react';

const PurchaseButtons = (props) => {

  return (
    <div className="buttonBox">
      <div className="buttonBuyBox">
        {/* <form className="buttonBuyInBox"> */}
          <button className="buttonBuy">
            Buy it now
          </button>
        {/* </form> */}
      </div>
      <div className="buttonAddBox">
        <form className="buttonAddInBox">
          <button className="buttonAdd">
            <div className="buttonAddFont">
              Add to cart
            </div>
          </button>
        </form>
      </div>
    </div>
  )
}

export default PurchaseButtons;