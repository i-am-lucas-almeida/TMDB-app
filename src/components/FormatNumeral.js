import React from "react";
import numeral from "numeral";

const FormatNumeral = ({ format, children, text }) => {

    return (

        <>

            <span>

                {`${text}${numeral(children).format(format)}`}

            </span>

        </>

    );
};

export default FormatNumeral;