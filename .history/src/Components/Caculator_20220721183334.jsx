import React from "react";
import "./Caculator.scss";

const Caculator = () => {
    return (
        <div className='caculator'>
            <section className='monitor'>0</section>

            <section className='keyboard'>
                <div className='keyboard-row'>
                    <button className='one-block'>AC</button>
                    <button className='one-block'> +/- </button>
                    <button className='one-block'> % </button>
                    <button className='one-block'>/</button>
                </div>

                <div className='keyboard-row'>
                    <button className='one-block'>7</button>
                    <button className='one-block'>8</button>
                    <button className='one-block'>9</button>
                    <button className='one-block'>*</button>
                </div>

                <div className='keyboard-row'>
                    <button className='one-block'>4</button>
                    <button className='one-block'>5</button>
                    <button className='one-block'>6</button>
                    <button className='one-block'>-</button>
                </div>

                <div className='keyboard-row'>
                    <button className='one-block'>1</button>
                    <button className='one-block'>2</button>
                    <button className='one-block'>3</button>
                    <button className='one-block'>+</button>
                </div>

                <div className='keyboard-row'>
                    <button className='two-block'>0</button>
                    <button className='one-block'> .</button>
                    <button className='one-block'> =</button>
                </div>
            </section>
        </div>
    );
};

export default Caculator;
