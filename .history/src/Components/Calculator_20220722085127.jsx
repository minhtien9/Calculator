import React, { useEffect, useState } from "react";
import "./Calculator.scss";

const Caculator = () => {
    const [curState, setCurState] = useState("");
    const [inputNum, setInputNum] = useState(0);
    const [calculatedNum, setCalculatedNum] = useState(0);
    const [operator, setOperator] = useState("");
    const [isDecimal, setIsDecimal] = useState(false);
    const [decimalCount, setDecimalCount] = useState(1);
    const [monitor, setMonitor] = useState("");

    useEffect(() => {
        setMonitor(inputNum);
    }, [inputNum]);

    useEffect(() => {
        setMonitor(calculatedNum);
    }, [calculatedNum]);

    // Take input number from keyboard
    const TakeInputNum = (num) => {
        if (isDecimal) {
            num = num / Math.pow(10, decimalCount);
            setDecimalCount(decimalCount + 1);
            setInputNum(parseFloat((inputNum + num).toFixed(decimalCount)));
        } else {
            setInputNum(inputNum * 10 + num);
        }
    };

    // Take operator from keyboard
    const TakeOperator = (operator) => {
        setOperator(operator);
        Calculate();
        setInputNum(0);
    };

    // Do the calculation
    const Calculate = () => {
        setIsDecimal(false);
        setDecimalCount(1);
        if (operator === "/" && inputNum === 0) {
            setCalculatedNum(NaN);
            setInputNum(0);
            return;
        }

        if (calculatedNum === 0 && inputNum === 0) {
            return;
        }

        switch (operator) {
            case "+":
                setCalculatedNum(calculatedNum + inputNum);
                break;
            case "-":
                setCalculatedNum(calculatedNum - inputNum);
                break;
            case "*":
                setCalculatedNum(calculatedNum * inputNum);
                break;
            case "/":
                setCalculatedNum(calculatedNum / inputNum);
                break;

            default:
                break;
        }
        if (operator === "") {
            setCalculatedNum(inputNum);
        } else {
            setInputNum(0);
        }
        return;
    };

    // Get the equation
    const GetEqual = () => {
        Calculate();
        setOperator("");
    };

    // Minus plus
    const minusPlus = () => {
        if (inputNum.charAt(0) === "-") {
            setInputNum(inputNum.substring(1));
            console.log(setInputNum(inputNum.substring(1)));
        } else {
            setInputNum("-" + inputNum);
        }
    };

    // Clear All
    const Clear = () => {
        setInputNum(0);
        setCalculatedNum(0);
        setMonitor("");
        setOperator("");
    };

    return (
        <div className='caculator'>
            <section className='monitor'>
                <p className='out-put'>{monitor}</p>
            </section>

            <section className='keyboard'>
                <div className='keyboard-row'>
                    <button
                        className='one-block'
                        onClick={() => {
                            Clear();
                        }}
                    >
                        AC
                    </button>
                    <button className='one-block'> +/- </button>
                    <button className='one-block' onClick={minusPlus}>
                        %
                    </button>
                    <button
                        className='one-block orange'
                        onClick={() => {
                            TakeOperator("/");
                        }}
                    >
                        ÷
                    </button>
                </div>

                <div className='keyboard-row'>
                    <button
                        className='one-block'
                        onClick={() => {
                            TakeInputNum(7);
                        }}
                    >
                        7
                    </button>
                    <button
                        className='one-block'
                        onClick={() => {
                            TakeInputNum(8);
                        }}
                    >
                        8
                    </button>
                    <button
                        className='one-block'
                        onClick={() => {
                            TakeInputNum(9);
                        }}
                    >
                        9
                    </button>
                    <button
                        className='one-block orange'
                        onClick={() => {
                            TakeOperator("*");
                        }}
                    >
                        *
                    </button>
                </div>

                <div className='keyboard-row'>
                    <button
                        className='one-block'
                        onClick={() => {
                            TakeInputNum(4);
                        }}
                    >
                        4
                    </button>
                    <button
                        className='one-block'
                        onClick={() => {
                            TakeInputNum(5);
                        }}
                    >
                        5
                    </button>
                    <button
                        className='one-block'
                        onClick={() => {
                            TakeInputNum(6);
                        }}
                    >
                        6
                    </button>
                    <button
                        className='one-block orange'
                        onClick={() => {
                            TakeOperator("-");
                        }}
                    >
                        -
                    </button>
                </div>

                <div className='keyboard-row'>
                    <button
                        className='one-block'
                        onClick={() => {
                            TakeInputNum(1);
                        }}
                    >
                        1
                    </button>
                    <button
                        className='one-block'
                        onClick={() => {
                            TakeInputNum(2);
                        }}
                    >
                        2
                    </button>
                    <button
                        className='one-block'
                        onClick={() => {
                            TakeInputNum(3);
                        }}
                    >
                        3
                    </button>
                    <button
                        className='one-block orange'
                        onClick={() => {
                            TakeOperator("+");
                        }}
                    >
                        +
                    </button>
                </div>

                <div className='keyboard-row'>
                    <button
                        className='two-block'
                        onClick={() => {
                            TakeInputNum(0);
                        }}
                    >
                        0
                    </button>
                    <button
                        className='one-block'
                        onClick={() => {
                            setIsDecimal(true);
                        }}
                    >
                        .
                    </button>
                    <button
                        className='one-block orange'
                        onClick={() => {
                            GetEqual();
                        }}
                    >
                        =
                    </button>
                </div>
            </section>
        </div>
    );
};

export default Caculator;

// import React, { useEffect, useState } from "react";
// import NumberFormat from "react-number-format";
// import "./Calculator.scss";

// const Caculator = () => {
//     const [preState, setPreState] = useState("");
//     const [curState, setCurState] = useState("");
//     const [input, setInput] = useState("0");
//     const [operator, setOperator] = useState(null);
//     const [total, setTotal] = useState(false);

//     const inputNum = (e) => {
//         if (curState.includes(".") && e.target.innerHTML === ".") return;

//         if (total) {
//             setPreState("");
//         }

//         curState
//             ? setCurState((pre) => pre + e.target.innerText)
//             : setCurState(e.target.innerText);

//         setTotal(false);
//     };

//     useEffect(() => {
//         setInput(curState);
//     }, [curState]);

//     useEffect(() => {
//         setInput("0");
//     }, []);

//     const operatorType = (e) => {
//         setTotal(false);
//         setOperator(e.target.innerText);
//         if (curState === "") return;
//         if (preState !== "") {
//             equals();
//         } else {
//             setPreState(curState);
//             setCurState("");
//         }
//     };

//     const equals = (e) => {
//         if (e?.target.innerText === "=") {
//             setTotal(true);
//         }
//         let cal;
//         switch (operator) {
//             case "/":
//                 cal = String(parseFloat(preState) / parseFloat(curState));
//                 break;
//             case "+":
//                 cal = String(parseFloat(preState) + parseFloat(curState));
//                 break;
//             case "*":
//                 cal = String(parseFloat(preState) * parseFloat(curState));
//                 break;
//             case "-":
//                 cal = String(parseFloat(preState) - parseFloat(curState));
//                 break;
//             default:
//                 break;
//         }
//         setInput("");
//         setPreState(cal);
//         setPreState("");
//         setCurState("");
//     };

//     const minusPlus = () => {};

//     const percent = () => {};
//     const reset = () => {
//         setCurState("");
//         setPreState("");
//         setInput("0");
//     };

//     return (
//         <div className='caculator'>
//             <section className='screen'>
//                 {input !== "" || input === "0" ? (
//                     <NumberFormat
//                         value={input}
//                         displayType={"text"}
//                         thousandsSeparator={true}
//                     />
//                 ) : (
//                     <NumberFormat
//                         value={preState}
//                         displayType={"text"}
//                         thousandsSeparator={true}
//                     />
//                 )}
//             </section>

//             <section className='keyboard'>
//                 <div className='keyboard-row'>
//                     <button className='one-block' onClick={reset}>
//                         AC
//                     </button>
//                     <button className='one-block' onClick={minusPlus}>
//                         +/-
//                     </button>
//                     <button className='one-block' onClick={percent}>
//                         %
//                     </button>
//                     <button className='one-block orange' onClick={operatorType}>
//                         ÷
//                     </button>
//                 </div>

//                 <div className='keyboard-row'>
//                     <button className='one-block' onClick={inputNum}>
//                         7
//                     </button>
//                     <button className='one-block' onClick={inputNum}>
//                         8
//                     </button>
//                     <button className='one-block' onClick={inputNum}>
//                         9
//                     </button>
//                     <button className='one-block orange' onClick={operatorType}>
//                         *
//                     </button>
//                 </div>

//                 <div className='keyboard-row'>
//                     <button className='one-block' onClick={inputNum}>
//                         4
//                     </button>
//                     <button className='one-block' onClick={inputNum}>
//                         5
//                     </button>
//                     <button className='one-block' onClick={inputNum}>
//                         6
//                     </button>
//                     <button className='one-block orange' onClick={operatorType}>
//                         -
//                     </button>
//                 </div>

//                 <div className='keyboard-row'>
//                     <button className='one-block' onClick={inputNum}>
//                         1
//                     </button>
//                     <button className='one-block' onClick={inputNum}>
//                         2
//                     </button>
//                     <button className='one-block' onClick={inputNum}>
//                         3
//                     </button>
//                     <button className='one-block orange' onClick={operatorType}>
//                         +
//                     </button>
//                 </div>

//                 <div className='keyboard-row'>
//                     <button className='two-block' onClick={inputNum}>
//                         0
//                     </button>
//                     <button className='one-block' onClick={operatorType}>
//                         .
//                     </button>
//                     <button className='one-block orange' onClick={operatorType}>
//                         =
//                     </button>
//                 </div>
//             </section>
//         </div>
//     );
// };

// export default Caculator;
