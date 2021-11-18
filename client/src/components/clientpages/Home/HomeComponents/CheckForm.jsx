import React from "react";
import './checkform.css';
const CheckForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="checkform">
      <div className="checkform__wrapper">
        <form
          className="checkform__form"
          onSubmit={handleSubmit}
        >
          <div className="checkform__row">
            <div className="checkform__col">
              <label className="checkform__heading" htmlFor="checkin">
                Check-In
              </label>
              <input
                className="input__form"
                type="date"
                name="checkin"
                id="checkin"
              />
            </div>
            <div className="checkform__col">
              <label className="checkform__heading" htmlFor="checkout">
                Check-Out
              </label>
              <input
                className="input__form"
                type="date"
                name="checkout"
                id="checkout"
              />
            </div>
            <div className="checkform__col">
              <label className="checkform__heading" htmlFor="adult">
                Adult
              </label>
              <select
                className="select__property"
                name="adult"
                id="adult"
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>
            <div className="checkform__col">
              <label className="checkform__heading" htmlFor="children">
                Children
              </label>
              <select
                className="select__property"
                name="children"
                id="children"
              >
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>
            <div className=" checkform__btn__">
              <button className="checkform__btn">
                CHECK AVAILABILITY
              </button>
            </div>
          </div>
          
        </form>
      </div>
    </div>
  );
};

export default CheckForm;
