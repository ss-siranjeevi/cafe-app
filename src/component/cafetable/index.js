import React from "react";
import firebase from "../../config/firebase";
import "./styles.css";
export default function CafeTable(props) {
  const [cafeDetails, setCafeDetails] = React.useState([]);
  React.useEffect(() => {
    const firestore = firebase.database().ref("/cafe");
    firestore.on("value", (response) => {
      const data = response.val(); //return object of object
      let info = [];
      for (let id in data) {
        info.push({
          id,
          cafeName: data[id].cafeName,
          city: data[id].city,
          pinCode: data[id].pinCode,
          quantity: data[id].quantity,
        });
      }
      setCafeDetails(info);
    });
  }, []);
  return (
    <div>
      <div className="header">
        <div/>
        <div>
          <h1>Cafe Details</h1>
        </div>
        <div>
          <button className="add_button" onClick={()=>{props.history.push("/")}}>Add</button>
        </div>
      </div>

      <table className="table" style={{ fontSize: "20px" }}>
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">City</th>
            <th scope="col">PinCode</th>
            <th scope="col">Quantity</th>
          </tr>
        </thead>
        <tbody>
          {cafeDetails.map((data) => {
            return (
              <tr key={data.id}>
                <td>{data.id}</td>
                <td>{data.cafeName}</td>
                <td>{data.city}</td>
                <td>{data.pinCode}</td>
                <td>{data.quantity}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
