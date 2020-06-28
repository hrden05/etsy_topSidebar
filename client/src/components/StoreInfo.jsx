import React from 'react';

const multiplyNode = (node, count, deep) => {
  for (var i = 0, copy; i < count / 2 - 1; i++) {
      copy = node.cloneNode(deep);
      node.parentNode.insertBefore(copy, node);
  }
};

const StoreInfo = (props) => {

  let sales = 0;
  if (props.sales !== undefined) {
    sales = props.sales.toLocaleString();
  }
  multiplyNode(document.querySelector('.fullStar'), props.rating, true)

  return (
    <div className="storeBox">
        <p className="usernameBox">
          <span className="username">{props.user}</span>
        </p>
        <div>
          <div className="salesBox">
            <span className="salesNum">{sales} sales</span>
            <span className="salesLine">|</span>
            {/* <span>{props.rating} stars</span> */}
            <span className="starBox">
              <svg className="fullStar">
                <path d="M20.83,9.15l-6-.52L12.46,3.08h-.92L9.18,8.63l-6,.52L2.89,10l4.55,4L6.08,19.85l.75.55L12,17.3l5.17,3.1.75-.55L16.56,14l4.55-4Z">
                </path>
              </svg>
            </span>
          </div>
        </div>
    </div>

  )
}
export default StoreInfo;