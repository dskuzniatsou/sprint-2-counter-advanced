import {Button} from "./Button.tsx";

import {Wrapper} from "./Wrapper.tsx";

type CounterProps = {
    count: number;
    startValue: number;
    setCount: (val: number) => void;
    maxValue: number;
    isInvalid: boolean;
    valuesAreSet: boolean;
};


export const Counter = ({ count,startValue, setCount, maxValue, isInvalid, valuesAreSet }: CounterProps) => {
    const inc = () => {
        if (count < maxValue) {
            setCount(count + 1);
        }
    };


    const reset = () => setCount(startValue);
    const renderMessage = () => {
        if (isInvalid) {
            return <span style={{ color: "red", fontSize: "30px" }}>Incorrect value!</span>;
        }
        if (!valuesAreSet) {
            return <span style={{ color: "aqua", fontSize: "24px" }}>Enter values and press 'set'</span>;
        }
        return count;
    };

    return (
        <div className={'counter'}>

            <div id={count === maxValue ? 'attention' : ''} className='counter_container'>
                {renderMessage()}
                </div>


            <Wrapper className="button_container">
                <Button title={'inc'} onClickButton={inc} className={count < maxValue && valuesAreSet && !isInvalid ? 'active' : 'disabled'}/>
                <Button title={'reset'} onClickButton={reset} className={count !== startValue && valuesAreSet && !isInvalid ? 'active' : 'disabled'}/>
            </Wrapper>


        </div>

    )

}