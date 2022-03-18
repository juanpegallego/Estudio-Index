import React from 'react'
import Header from './Header'
import SearchBar from './SearchBar'
import '../Styles/Nav__Container.scss'

function Nav() {
    return (
        <nav className='nav__container'>
            <SearchBar />
            <Header />

        </nav >
    )
}

export default Nav