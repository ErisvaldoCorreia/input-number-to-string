import React from 'react';
import PropTypes from 'prop-types';
import numero from 'numero-por-extenso';

const lib = ({onChange, ...props}) => {
    return(
        <input
            type="number"
            onChange={e => {
                const numeroPorExtenso = numero.porExtenso(e.target.value)
                onChange(numeroPorExtenso, e);
            }}
            {...props}
        />
    )
}

export default lib;