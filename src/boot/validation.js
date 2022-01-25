import { boot } from "quasar/wrappers";

/* -------------------------------------------------------------------------- */
/*                            Validation Functions                            */
/* -------------------------------------------------------------------------- */
const isNumber = (inputValue) => typeof inputValue === "number";

const isString = (inputValue) =>
  typeof inputValue === "string" && inputValue.length;

const isBoolean = (inputValue) => typeof inputValue === "boolean";

const isArray = (inputValue) => Array.isArray(inputValue) && inputValue.length;

const isObject = (inputValue) =>
  typeof inputValue === "object" &&
  !Array.isArray(inputValue) &&
  Object.keys(inputValue).length;

const isAge = (inputValue) =>
  isNumber(inputValue) && inputValue > 0 && inputValue <= 120;

const isEmail = (inputValue) => {
  const regex = new RegExp(
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
  return regex.test(inputValue);
};
/* -------------------------------------------------------------------------- */

const validation = {
  isNumber,
  isString,
  isBoolean,
  isArray,
  isObject,
  isAge,
  isEmail,
};

export default boot(({ app }) => {
  app.config.globalProperties.$validation = validation;
});

export { validation };
