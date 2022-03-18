import React from 'react'

function Badge({ msg, bgc, color, top, left, position }) {
    const styles = {
        backgroundColor: bgc,
        color: color,
        fontSize: '10px',
        display: 'inline',
        alignSelf: 'center',
        padding: '5px',
        borderRadius: '5px',
        margin: '10px',
        position: position,
        left: left,
        top: top

    }
    return (
        <h3 style={styles}>{msg}</h3>
    )
}

export default Badge