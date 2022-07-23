import "../../App.css";
import { useState, useEffect } from "react";
import NumberFormat from "react-number-format";
import Button from "../Button/Button";
import { useDispatch } from "react-redux";
import { inputNumReducer } from "../../redux/calculatorSlice";

function Calculator() {
    const dispatch = useDispatch();

    const [preState, setPreState] = useState("");
    const [curState, setCurState] = useState("");
    const [input, setInput] = useState("0");
    const [operator, setOperator] = useState(null);
    const [total, setTotal] = useState(false);

    const inputNum = (e) => {
        if (curState.includes(".") && e.target.innerText === ".") return;

        if (total) {
            setPreState("");
        }

        curState
            ? setCurState((pre) => pre + e.target.innerText)
            : setCurState(e.target.innerText);
        setTotal(false);
    };

    useEffect(() => {
        setInput(curState);
    }, [curState]);

    useEffect(() => {
        setInput("0");
    }, []);

    const operatorType = (e) => {
        setTotal(false);
        setOperator(e.target.innerText);
        if (curState === "") return;
        if (preState !== "") {
            equals();
        } else {
            setPreState(curState);
            setCurState("");
        }
    };

    const equals = (e) => {
        if (e?.target.innerText === "=") {
            setTotal(true);
        }
        let cal;
        switch (operator) {
            case "/":
                cal = String(parseFloat(preState) / parseFloat(curState));
                break;
            case "+":
                cal = String(parseFloat(preState) + parseFloat(curState));
                break;
            case "X":
                cal = String(parseFloat(preState) * parseFloat(curState));
                break;
            case "-":
                cal = String(parseFloat(preState) - parseFloat(curState));
                break;
            default:
                return;
        }
        setInput("");
        setPreState(cal);
        setCurState("");
    };

    // const minusPlus = () => {
    //     if (curState.charAt(0) === "-") {
    //         setCurState(curState.substring(1));
    //     } else {
    //         setCurState("-" + curState);
    //     }
    // };

    // const percent = () => {
    //     preState
    //         ? setCurState(String((parseFloat(curState) / 100) * preState))
    //         : setCurState(String(parseFloat(curState) / 100));
    // };
    // const reset = () => {
    //     setPreState("");
    //     setCurState("");
    //     setInput("0");
    // };

    const checkType = (type) => {
        if (type === "reset") {
            dispatch(
                inputNumReducer({
                    setPreState: "",
                    setCurState: "",
                })
            );

            setInput("0");
        } else if (type === "percent") {
            preState
                ? setCurState(String((parseFloat(curState) / 100) * preState))
                : setCurState(String(parseFloat(curState) / 100));
        } else if (type === "minusPlus") {
            if (curState.charAt(0) === "-") {
                setCurState(curState.substring(1));
            } else {
                setCurState("-" + curState);
            }
        }
    };
    return (
        <div className='container'>
            <div className='wrapper'>
                {/* Screen UI */}
                <div className='screen'>
                    {input !== "" || input === "0" ? (
                        <NumberFormat
                            value={input}
                            displayType={"text"}
                            thousandSeparator={true}
                        />
                    ) : (
                        <NumberFormat
                            value={preState}
                            displayType={"text"}
                            thousandSeparator={true}
                        />
                    )}
                </div>

                {/* Row 1 */}

                <Button
                    label='AC'
                    classStyle='btn'
                    handleOnClick={() => checkType("reset")}
                />

                <Button
                    label='%'
                    classStyle='btn'
                    handleOnClick={() => checkType("percent")}
                />
                <Button
                    label='+/-'
                    classStyle='btn'
                    handleOnClick={() => checkType("minusPlus")}
                />
                <Button
                    label='/'
                    classStyle='btn orange'
                    handleOnClick={operatorType}
                />

                {/* Row 2 */}
                <Button label='7' classStyle='btn' handleOnClick={inputNum} />
                <Button label='8' classStyle='btn' handleOnClick={inputNum} />
                <Button label='9' classStyle='btn' handleOnClick={inputNum} />
                <Button
                    label='X'
                    classStyle='btn orange'
                    handleOnClick={operatorType}
                />

                {/* Row 3 */}
                <Button label='4' classStyle='btn' handleOnClick={inputNum} />
                <Button label='5' classStyle='btn' handleOnClick={inputNum} />
                <Button label='6' classStyle='btn' handleOnClick={inputNum} />
                <Button
                    label='+'
                    classStyle='btn orange'
                    handleOnClick={operatorType}
                />

                {/* Row 4 */}
                <Button label='1' classStyle='btn' handleOnClick={inputNum} />
                <Button label='2' classStyle='btn' handleOnClick={inputNum} />
                <Button label='3' classStyle='btn' handleOnClick={inputNum} />
                <Button
                    label='-'
                    classStyle='btn orange'
                    handleOnClick={operatorType}
                />

                {/* Row 5 */}
                <Button
                    label='0'
                    classStyle='btn zero'
                    handleOnClick={inputNum}
                />
                <Button label='.' classStyle='btn' handleOnClick={inputNum} />
                <Button
                    label='='
                    classStyle='btn orange'
                    handleOnClick={equals}
                />
            </div>
        </div>
    );
}

export default Calculator;
