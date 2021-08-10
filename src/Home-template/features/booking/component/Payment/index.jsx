import React, { useState } from "react";
import "./Payment.scss";
import Cards from "react-credit-cards";
import validateInfo from "./validateInfo";
import swal from "sweetalert";
import "react-credit-cards/lib/styles.scss";
import { Form, Button, Alert, FormControl, FormGroup } from "react-bootstrap";

function Payment(props) {
  const { setChangePage, postChairList } = props;

  const [values, setValues] = useState({
    name: "",
    number: "",
    cvc: "",
    expiry: "",
    focus: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleFocus = (e) => {
    setValues({
      ...values,
      focus: e.target.name,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateInfo(values).errors;
    setErrors(errors);
    if (errors.message === "Credit card is valid") {
      swal({
        title: "Đặt vé thành công",
        icon: "success",
      }).then(() => {
        setChangePage("result");
      });
    }
  };

  return (
    <div className="payment__container">
      <div className="payment__row">
        <div className="payment__form">
          <div className="payment__creditCard">
            <Cards
              name={values.name}
              number={values.number}
              cvc={values.cvc}
              expiry={values.expiry}
              focused={values.focus}
            />
          </div>
          <div className="payment__input">
            <Form onSubmit={handleSubmit}>
              <FormGroup>
                <FormControl
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Cardholder Name"
                  value={values.name}
                  onChange={handleChange}
                  onFocus={handleFocus}
                  isValid={errors.cname}
                />
              </FormGroup>
              <FormGroup>
                <FormControl
                  type="number"
                  id="number"
                  name="number"
                  placeholder="Card number"
                  value={values.number}
                  onChange={handleChange}
                  onFocus={handleFocus}
                  isValid={errors.cnumber}
                />
              </FormGroup>
              <div className="payment__input--date">
                <FormGroup>
                  <FormControl
                    type="number"
                    id="expiry"
                    name="expiry"
                    placeholder="Card expiry"
                    value={values.expiry}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    isValid={errors.cexp}
                  />
                </FormGroup>
                <FormGroup>
                  <FormControl
                    type="number"
                    id="cvc"
                    name="cvc"
                    placeholder="Card cvc"
                    value={values.cvc}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    isValid={errors.ccvc}
                  />
                </FormGroup>
              </div>

              <Button
                type="submit"
                id="validateButton"
                onClick={() => postChairList()}
              >
                Thanh toán
              </Button>
            </Form>
            <Alert variant={errors.variant} show={errors.show}>
              {errors.message}
            </Alert>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
