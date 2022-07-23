import React, { useEffect, useState } from "react";
import "./Caculator.scss";

const Caculator = () => {
    const [inputNum, setInputNum] = useState(0);
    const [calculatedNum, setCalculatedNum] = useState(0);
    const [operator, setOperator] = useState("");
    const [monitor, setMonitor] = useState("");

    useEffect(() => {
        setMonitor(inputNum);
    }, []);

    const TakeInputNum = (num) => {
        setInputNum(inputNum * 10);
    };
    return (
        <div className='caculator'>
            <section className='monitor'>
                <p className='out-put'>0</p>
            </section>

            <section className='keyboard'>
                <div className='keyboard-row'>
                    <button className='one-block'>AC</button>
                    <button className='one-block'> +/- </button>
                    <button className='one-block'> % </button>
                    <button className='one-block orange'>/</button>
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
                    <button className='one-block orange'>*</button>
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
                    <button className='one-block orange'>-</button>
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
                    <button className='one-block orange'>+</button>
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
                    <button className='one-block'> .</button>
                    <button className='one-block orange'> =</button>
                </div>
            </section>
        </div>
    );
};

export default Caculator;
