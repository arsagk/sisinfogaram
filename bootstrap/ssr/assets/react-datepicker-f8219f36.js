import { jsxs, jsx } from "react/jsx-runtime";
import ReactInputMask from "react-input-mask";
import { id } from "date-fns/locale";
import DatePicker from "react-datepicker";
function DateInput(props) {
  const mask = [/\d/, /\d/, "-", /\d/, /\d/, "-", /\d/, /\d/, /\d/, /\d/];
  return /* @__PURE__ */ jsxs("div", { className: "relative w-full mb-3", children: [
    props.label && /* @__PURE__ */ jsx(
      "label",
      {
        className: `block uppercase text-blueGray-600 text-xs font-bold mb-2 ${props.errors ? "text-red-500" : ""} `,
        children: props.label
      }
    ),
    /* @__PURE__ */ jsx(
      DatePicker,
      {
        className: "border-0 px-3 py-2 mb-2 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 ",
        selected: new Date(props.selected),
        value: props.value,
        onChange: props.onChange,
        locale: id,
        dateFormat: "dd/MM/yyyy",
        customInput: /* @__PURE__ */ jsx(ReactInputMask, { mask })
      }
    ),
    props.errors ? /* @__PURE__ */ jsx("span", { className: "text-sm text-red-500", children: props.errors }) : null
  ] });
}
const reactDatepicker = "";
export {
  DateInput as D
};
