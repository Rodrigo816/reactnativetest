const validate = (value,rules, connectedValue) => {
  let isValid = true;
  for(let rule in rules){
    switch (rule) {
      case 'isEmail':
        isValid= isValid && isEmail(value);
        break;
      case 'minLength':
        isValid= isValid && isMinLength(value, rules[rule]);
        break;
      case 'equalTo':
        isValid= isValid && isEqual(value,connectedValue[rule]);  
        break;
      default:
        isValid = true;
    }
  }
  return isValid;
}
export default validate;

const isEmail = value => {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(value).toLowerCase());
}

const isMinLength = (value, minLength) => {
  return value.length >= minLength;
}

const isEqual = (value, checkValue) => {
  return value === checkValue;
}