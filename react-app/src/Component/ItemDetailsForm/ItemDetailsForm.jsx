import React, { useReducer } from "react";
import Input from "../Input/input";
import "./ItemDetailsForm.css";
import Date from "../Date/date";



const ItemDetailsForm = ({state, setState}) => {
  // const [itemName, setItemName] = useState();
  const { itemName, itemPrice, itemQuantity, submittionDate } = state;

  const handleInputChange = (e) => {
    setState({ [e.target.name]: e.target.value });
  };

  
  return (
    <div className="item-form">
      <Input
        value={itemName}
        name="itemName"
        placeholder="Enter Item Name"
        inputBoxName="Item Name"
        bottomLabel="Max. 50 Character"
        onChange={handleInputChange}
      />
      <Input
        value={itemQuantity}
        name="itemQuantity"
        placeholder="Enter Quantity"
        inputBoxName="Quantity"
        bottomLabel="Numeric Value"
        onChange={handleInputChange}
      />
      <Input
        value={itemPrice}
        name="itemPrice"
        placeholder="Enter item price"
        inputBoxName="Item Price"
        bottomLabel="Numeric Value USD"
        onChange={handleInputChange}
      />
      <Date
        value={submittionDate}
        name="submittionDate"
        placeholder="Select Date"
        inputBoxName="Date of Submission"
        bottomLabel="Format: MM/DD/YYYY"
        onChange={handleInputChange}
      />
    </div>
  );
};

export default ItemDetailsForm;
