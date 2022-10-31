import React from "react";

function ResidentsList({ filteredResults }) {
  return (
    <div className="pa-10 mt-10 w-75">
      <div className="font-weight-bold text-center">Residents List</div>
      {filteredResults.map((input) => {
        return (
          <ul
            className="mt-10 styled w-50 mx-auto"
            data-testid="residentsNameList"
          >
            <li key="item1" className="slide-up-fade-in">
              {input.name}
            </li>
            <li key="item1" className="slide-up-fade-in">
              {input.validityDate}
            </li>
          </ul>
        );
      })}
    </div>
  );
}

export default ResidentsList;
