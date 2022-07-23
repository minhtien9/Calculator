import React, { useState } from "react";
import "./Caculator.scss";

const Caculator = () => {
    const [inputNum, setInputNum] = useState(0);
    const [calculatedNum, setCalculatedNum] = useState(0);
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
                    <button className='one-block'>7</button>
                    <button className='one-block'>8</button>
                    <button className='one-block'>9</button>
                    <button className='one-block orange'>*</button>
                </div>

                <div className='keyboard-row'>
                    <button className='one-block'>4</button>
                    <button className='one-block'>5</button>
                    <button className='one-block'>6</button>
                    <button className='one-block orange'>-</button>
                </div>

                <div className='keyboard-row'>
                    <button className='one-block'>1</button>
                    <button className='one-block'>2</button>
                    <button className='one-block'>3</button>
                    <button className='one-block orange'>+</button>
                </div>

                <div className='keyboard-row'>
                    <button className='two-block'>0</button>
                    <button className='one-block'> .</button>
                    <button className='one-block orange'> =</button>
                </div>
            </section>
        </div>
    );
};

export default Caculator;
