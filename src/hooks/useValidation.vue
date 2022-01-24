<script>
import { ref } from "vue";
import { validation } from "boot/validation";

export default async function useValidation(value) {
  const inputValue = ref(value);

  /* -------------------------------------------------------------------------- */
  /*                            Validation Functions                            */
  /* -------------------------------------------------------------------------- */
  const isNumber = () => validation.isNumber(inputValue.value);
  const isString = () => validation.isString(inputValue.value);
  const isBoolean = () => validation.isBoolean(inputValue.value);
  const isArray = () => validation.isArray(inputValue.value);
  const isObject = () => validation.isObject(inputValue.value);
  const isAge = () => validation.isAge(inputValue.value);

  /* -------------------------------------------------------------------------- */
  /*                             Exported Functions                             */
  /* -------------------------------------------------------------------------- */
  return {
    isNumber,
    isString,
    isBoolean,
    isArray,
    isObject,
    isAge,
    inputValue,
  };
}
</script>
