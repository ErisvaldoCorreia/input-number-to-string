import React from 'react';
import PropTypes from 'prop-types';
import numero from 'numero-por-extenso';

const lib = ({returnType, onChange, ...props}) => {
    return(
        <input
            type="number"
            onChange={e => {
                const numeroPorExtenso = numero.porExtenso(e.target.value, numero.estilo[returnType])
                onChange(numeroPorExtenso, e);
            }}
            {...props}
        />
    )
}

NumberToString.propTypes = {
    returnType: PropTypes.oneOf(["normal", "monetario", "porcentagem"])
}

NumberToString.defaulProps = {
    returnType: "normal"
}

export default lib;