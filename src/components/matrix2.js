import React from "react";

const matrix2 = (props) => {
  let r = [0, 0];
  let w = [0, 0];
  console.log(r);
  return (
    <div className="matrix">
      <div className="container">
        {r.forEach((e) => {
          console.log(1);
          return (
            <div className="row">
              {w.forEach((e) => {
                return <div className="circle"></div>;
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default matrix2;
