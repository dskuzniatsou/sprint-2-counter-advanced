import './App.css'

import {Counter} from "./components/Counter.tsx";
import {Settings} from "./components/Settings.tsx";
import {Wrapper} from './components/Wrapper.tsx';
import {useEffect, useState} from "react";

function App() {
    const [startValue, setStartValue] = useState(0);
    const [maxValue, setMaxValue] = useState(0);
    const [count, setCount] = useState(0);
    const [valuesAreSet, setValuesAreSet] = useState(false);


    const isInvalid = (startValue >= maxValue) || (startValue < 0) || (maxValue <= 0);

    // При первом рендере загружаем значения из localStorage
    useEffect(() => {
        const startFromStorage = localStorage.getItem("startValue");
        const maxFromStorage = localStorage.getItem("maxValue");

        if (startFromStorage && maxFromStorage) {
            const start = JSON.parse(startFromStorage);
            const max = JSON.parse(maxFromStorage);
            setStartValue(start);
            setMaxValue(max);
            setCount(start); // Сбросить счётчик на старт
        }
    }, []);


    return (
        <div className="app">
            <Wrapper className="appContainer">
                <Settings startValue={startValue}
                          maxValue={maxValue}
                          setStartValue={setStartValue}
                          setMaxValue={setMaxValue}
                          setCount={setCount}
                          setValuesAreSet={setValuesAreSet}
                          valuesAreSet={valuesAreSet}/>
                <Counter count={count}
                         setCount={setCount}
                         maxValue={maxValue}
                         startValue={startValue}
                         isInvalid={isInvalid}
                         valuesAreSet={valuesAreSet}/>
            </Wrapper>

        </div>
    )
}

export default App
