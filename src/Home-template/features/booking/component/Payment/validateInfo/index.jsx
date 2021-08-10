import valid from "card-validator";

const validateInfo = (values) => {
  let errors = {};
  let creditCard = valid.number(values.number, { maxLength: 16 });

  creditCard.expirationDate = valid.expirationDate(values.expiry);
  creditCard.cardholderName = valid.cardholderName(values.name);
  creditCard.cvv = valid.cvv(values.cvc);

  errors.variant = "danger";
  errors.show = true;
  errors.message = "An unknown error occured. Please try again later";
  errors.cname = false;
  errors.cnumber = false;
  errors.ccvc = false;
  errors.cexp = false;

  //  Card CVC
  if (values.cvc === null || !values.cvc.trim()) {
    errors.message = "Credit card CVC is not complete";
  } else if (creditCard.cvv.isValid) {
    errors.ccvc = true;
  } else {
    errors.message = "Credit card CVC is invalid";
  }

  //  Card expirationdate
  if (values.expiry === null || !values.expiry.trim()) {
    errors.message = "Credit card expiration date is not complete";
  } else if (creditCard.expirationDate.isValid) {
    errors.cexp = true;
  } else {
    errors.message = "Credit card expiration date is invalid";
  }

  //  Card number
  if (values.number === null || !values.number.trim()) {
    errors.message = "Credit card number is not complete";
  } else if (creditCard.isValid) {
    errors.cnumber = true;
  } else {
    errors.message = "Credit card number is invalid";
  }

  //  Cardholder name
  if (values.name === null || !values.name.trim()) {
    errors.message = "Credit Cardholder name is not complete";
  } else if (creditCard.cardholderName.isValid) {
    errors.cname = true;
  } else {
    errors.message = "Credit Cardholder name is invalid";
  }

  if (errors.cname && errors.cnumber && errors.ccvc && errors.cexp) {
    errors.variant = "success";
    errors.message = "Credit card is valid";
  }

  return { errors, creditCard };
};

export default validateInfo;
