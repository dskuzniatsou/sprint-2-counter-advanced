import {ChangeEvent} from "react";

type Props = {
    type: string
    minNumber?: number
    maxNumber?: number
    step?: number
    inputName: string
    description?: string
    value?: number
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    onFocus?: () => void;
    onBlur?: () => void;
   className?: string
}
export const Input = ({type, minNumber, maxNumber, step, inputName, description,value, onFocus, onBlur, onChange, className}: Props) => {

    // const [value, setValue] = useState<number>(0);
    //
    // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     setValue(Number(e.target.value));
    // };

    return (
        <div className="inputWrapper">
            <label htmlFor={inputName}>{description}</label>
            <input
                name={inputName}
                type={type}
                min={minNumber}
                max={maxNumber}
                step={step}
                value={value}
                onChange={onChange}
                onFocus={onFocus}
                onBlur={onBlur}
                className={className}
            />
        </div>
    );

};

