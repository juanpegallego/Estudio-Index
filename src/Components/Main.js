import React, { useState, useEffect } from 'react'
import Card from './Card'
import '../Styles/Main.scss'

function Main() {
    const productsUrl = [
        'https://api.mercadolibre.com/items/MLA884216659',
        'https://api.mercadolibre.com/items/MLA646715969',
        'https://api.mercadolibre.com/items/MLA906258237'
    ]

    const [loading, setLoading] = useState(true)
    const [productos, setProductos] = useState([])

    useEffect(() => {
        Promise.all(productsUrl.map(url => fetch(url)))
            .then(responses => {
                return Promise.all(responses.map(res => res.json()))

            })
            .then(data => {
                setProductos([...productos, ...data])
                setLoading(false)
            })


    }, [])

    return (
        <main>
            {loading ? <h1>Loading </h1> : productos.map(producto =>
                <Card
                    props={producto}
                />
            )}


        </main>
    )
}

export default Main