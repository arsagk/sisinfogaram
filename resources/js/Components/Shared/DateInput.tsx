import ReactInputMask from "react-input-mask";
import { NumberFormatBaseProps } from "react-number-format/types/types";
import { id } from "date-fns/locale";
import DatePicker from "react-datepicker";

type Props = NumberFormatBaseProps & {
    selected: string;
    value: string;
    label?: string;
    errors?: string | undefined;
    onChange: (e: any) => void;
};
export default function DateInput(props: Props) {
    // /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/
    const mask = [/\d/, /\d/, "-", /\d/, /\d/, "-", /\d/, /\d/, /\d/, /\d/];
    // [/\d/, /\d/, "\-", /\d/, /\d/, "\-", /\d/, /\d/, /\d/, /\d/]
    const format = (numStr: any) => {
        if (numStr === "") return "";
        return new Intl.NumberFormat("id-ID", {
            maximumFractionDigits: 0,
        }).format(numStr);
    };
    return (
        <div className="relative w-full mb-3">
            {props.label && (
                <label
                    className={`block uppercase text-blueGray-600 text-xs font-bold mb-2 ${
                        props.errors ? "text-red-500" : ""
                    } `}
                >
                    {props.label}
                </label>
            )}
            <DatePicker
                className="border-0 px-3 py-2 mb-2 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 "
                selected={new Date(props.selected)}
                value={props.value}
                onChange={props.onChange}
                // className={props.className}
                locale={id}
                dateFormat="dd/MM/yyyy"
                customInput={<ReactInputMask mask={mask} />}
            />
            {props.errors ? (
                <span className="text-sm text-red-500">{props.errors}</span>
            ) : null}
        </div>
    );
    // return <NumberFormatBase {...props} format={format} />;
}
