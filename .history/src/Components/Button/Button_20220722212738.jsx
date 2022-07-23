import React from "react";

const Button = (props) => {
    const { label, classStyle, handleOnClick } = props;
    return (
        <>
            <button className={classStyle} onClick={handleOnClick}>
                {label}
            </button>
        </>
    );
};

export default Button;
