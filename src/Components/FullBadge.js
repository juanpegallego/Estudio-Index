import React from 'react'
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import '../Styles/FullBadge.scss'

function FullBadge() {

    return (
        <div className='fullbadge'>
            <ElectricBoltIcon className='icon' />
            <p className='badge__text'>FULL</p>
        </div>
    )
}

export default FullBadge