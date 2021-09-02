import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import firebase from "../../config/firebase";
import "./styles.css";

const initialValues = {
  cafeName: "",
  city: "",
  pinCode: "",
  quantity: "",
};

const CafeForm = (props) => {
  const handleOnSubmit = async (values) => {
    firebase
      .database()
      .ref("/cafe")
      .push(values)
      .then((res) => {
        if (res) {
          props.history.push("/cafe");
        }
      })
      .catch(() => {
        return;
      });
  };

  return (
    <div className="form-container">
      <Formik
        initialValues={initialValues}
        onSubmit={handleOnSubmit}
        validationSchema={Yup.object().shape({
          cafeName: Yup.string().required("Cafe name is required"),
          city: Yup.string().required("city is required required"),
          pinCode: Yup.string().required("PinCode is required"),
          quantity: Yup.string().required("Quantity is required"),
        })}
      >
        {(props) => {
          const {
            values,
            touched,
            errors,
            isSubmitting,
            handleChange,
            handleBlur,
            handleSubmit,
          } = props;
          return (
            <form onSubmit={handleSubmit}>
              <div className="generic-row">
                <label className="label">Cafe Name:</label>
                <input
                  type="text"
                  name="cafeName"
                  value={values.cafeName}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  className={errors.cafeName && touched.cafeName && "error"}
                />
                {errors.cafeName && touched.cafeName && (
                  <div className="error-message">{errors.cafeName}</div>
                )}
              </div>
              <div className="generic-row">
                <label className="label">City :</label>
                <input
                  type="text"
                  name="city"
                  value={values.city}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  className={errors.city && touched.city && "error"}
                />
                {errors.city && touched.city && (
                  <div className="error-message">{errors.city}</div>
                )}
              </div>
              <div className="generic-row">
                <label className="label">Pin Code :</label>
                <input
                  type="text"
                  name="pinCode"
                  value={values.pinCode}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  className={errors.pinCode && touched.pinCode && "error"}
                />
                {errors.pinCode && touched.pinCode && (
                  <div className="error-message">{errors.pinCode}</div>
                )}
              </div>
              <div className="generic-row">
                <label className="label">Quantity :</label>
                <input
                  type="radio"
                  value="less than 5"
                  name="quantity"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  className={errors.quantity && touched.quantity && "error"}
                />
                <span style={{ padding: "4px" }}>less than 5</span>
                <input
                  type="radio"
                  value="more than 5"
                  name="quantity"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  className={errors.quantity && touched.quantity && "error"}
                />{" "}
                <span style={{ marginRight: "4px" }}>more than 5</span>
                {errors.quantity && touched.quantity && (
                  <div className="error-message">{errors.quantity}</div>
                )}
              </div>
              <div className="generic-row">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="button"
                >
                  submit
                </button>
              </div>
            </form>
          );
        }}
      </Formik>
    </div>
  );
};
export default CafeForm;
