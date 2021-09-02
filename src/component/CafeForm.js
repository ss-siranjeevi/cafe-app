import React from "react";
import firebase from "../config/firebase";
import "./styles.css";

const CafeForm = (props) => {
  const initialValues = {
    cafeName: "",
    city: "",
    pinCode: "",
    quantity: "",
  };
  const [formData, setFormdata] = React.useState(initialValues);
  const handleOnFormData = (e) => {
    setFormdata({ ...formData, [e.target.name]: e.target.value });
  };
  const handleOnSubmit = async () => {
    if (
      formData.cafeName==="" ||
      formData.city===""||
      formData.pinCode==="" ||
      formData.quantity===""
    )
      return;
    const firestore=firebase.database().ref("/cafe").push(formData)
    .then(res=>{
        if(res){
            console.log(res);
            setFormdata(initialValues)
        }
    })
    .catch(err=>{
        console.log(err);
    })
   
    console.log(firestore)
  };

  return (
    <div className="form-container">
      <div className="generic-row">
        <label className="label">Cafe Name:</label>
        <input
          type="text"
          name="cafeName"
          value={formData.cafeName}
          onChange={(e) => handleOnFormData(e)}
        />
      </div>
      <div className="generic-row">
        <label className="label">City :</label>
        <input
          type="text"
          name="city"
          value={formData.city}
          onChange={(e) => handleOnFormData(e)}
        />
      </div>
      <div className="generic-row">
        <label className="label">Pin Code :</label>
        <input
          type="text"
          name="pinCode"
          value={formData.pinCode}
          onChange={(e) => handleOnFormData(e)}
        />
      </div>
      <div className="generic-row">
        <label className="label">Quantity :</label>
        <input
          type="radio"
          value="less than 5"
          name="quantity"
          onChange={(e) => handleOnFormData(e)}
        />
        <span style={{ padding: "4px" }}>less than 5</span>
        <input
          type="radio"
          value="more than 5"
          name="quantity"
          onChange={(e) => handleOnFormData(e)}
        />{" "}
        <span style={{ marginRight: "4px" }}>more than 5</span>
      </div>
      <div className="generic-row">
        <button className="button" onClick={handleOnSubmit}>
          submit
        </button>
      </div>
    </div>
  );
};
export default CafeForm;
