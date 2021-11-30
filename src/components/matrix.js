import React from "react";

const Matrix = (props) => {
  console.log(props);
  let row = [];
  row.length = props.row;
  console.log(row);
  let col = [];
  col.length = props.col;
  col.fill(1);
  row.fill(1);
  console.log(col);
  return (
    <div className="matrix">
      <div className="container">
        {col.map((e) => {
          return (
            <div className="row">
              {col.map((e) => {
                return <div className={props.className}></div>;
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Matrix;
