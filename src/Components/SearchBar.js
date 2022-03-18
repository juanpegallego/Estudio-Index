import React from 'react'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import '../Styles/Searchbar.scss'

function Header() {
    return (
        <nav className='searchbar'>
            <div className="logo__container">
                <img src="logo__large_plus.png" alt="meli logo" />
            </div>
            <div className="search__box">
                <input type="text" placeholder='Buscar productos, marcas y mas...' />
                <SearchOutlinedIcon className='search__icon' />
            </div>
            <div className="banner">
                <p>Suscribite al nivel 6: beneficios exclusivos</p>
            </div>
        </nav>
    )
}

export default Header