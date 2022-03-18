import React from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import '../Styles/Header.scss'


function Header() {
    return (
        <header>
            <div className="adress__container">
                <LocationOnIcon className='header__icon' />
                <div className="adress__data">
                    <p>Enviar a JUAN</p>
                    <strong>Juramento 4993</strong>
                </div>
            </div>
            <ul className='header__navegation'>
                <li>
                    Categorias <KeyboardArrowDownIcon />
                </li>
                <li>Ofertas</li>
                <li>Historial</li>
                <li>Supermercado</li>
                <li>Moda</li>
                <li>Vender</li>
                <li>Ayuda</li>
            </ul>

            <div >
                <ul className="user__options">
                    <li><AccountCircleIcon className='user__options__icon' /> JUAN PEDRO  <KeyboardArrowDownIcon className='user__options__icon' /></li>
                    <li>Mis Compras</li>
                    <li>Favoritos<KeyboardArrowDownIcon className='user__options__icon' /> </li>
                    <li><NotificationsIcon className='user__options__icon' /></li>
                    <li><ShoppingCartOutlinedIcon className='user__options__icon' /></li>
                </ul>
            </div>
        </header>
    )
}

export default Header