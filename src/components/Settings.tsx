import {Wrapper} from "./Wrapper.tsx";
import {Button} from "./Button.tsx";
import {Input} from "./Input.tsx";
import {useState} from "react";

type SettingsProps = {
    startValue: number;
    maxValue: number;
    setStartValue: (val: number) => void;
    setMaxValue: (val: number) => void;
    setCount: (val: number) => void;
    setValuesAreSet: (val: boolean) => void;
    valuesAreSet:boolean;
};

export const Settings = ({ startValue, maxValue, setStartValue, setMaxValue, setCount,setValuesAreSet,valuesAreSet }: SettingsProps) => {
    const [inputFocused, setInputFocused] = useState(false);


    const isInvalid = (startValue >= maxValue) || (startValue < 0) || (maxValue <= 0);

    const handleSet = () => {
        localStorage.setItem("startValue", JSON.stringify(startValue));
        localStorage.setItem("maxValue", JSON.stringify(maxValue));
        setCount(startValue)
        setValuesAreSet(true);
        setInputFocused(false);// значения установлены
    };
    const handleStartValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setStartValue(Number(e.target.value));
        setValuesAreSet(false); // редактируем
    };

    const handleMaxValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMaxValue(Number(e.target.value));
        setValuesAreSet(false); // редактируем
    };

    return (
        <div className='settings'>
            <Wrapper className="input_container">
                <Input type={'number'}
                       inputName={"maxValue"}
                       description={'max value:'}
                       step={1}
                       value={maxValue}
                       onChange={handleMaxValueChange}

                       onFocus={() => setInputFocused(true)}
                       className={!isInvalid ? '': 'error'}
                />
                <Input type={'number'}
                       inputName={"startValue"}
                       description={'start value:'}
                       step={1}
                       value={startValue}
                       onChange={handleStartValueChange}
                       onFocus={() => setInputFocused(true)}
                       className={!isInvalid ? '': 'error'}

                />
            </Wrapper>

            <Wrapper className="button_container">
                <Button title={'set'} onClickButton={handleSet}
                        className={!isInvalid && inputFocused && !valuesAreSet ? 'active' : 'disabled'}/>
            </Wrapper>
        </div>
    );
};

