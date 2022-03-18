import React from 'react'
import Badge from './Badge'
import '../Styles/card.scss'
import FullBadge from './FullBadge'


function Card({ props }) {

    let base_price = new Intl.NumberFormat().format(props.base_price)


    function shipping(props) {
        let shippingType = props.shipping.logistic_type
        switch (shippingType) {
            case 'fulfillment': return fullShipping()

            case 'cross_docking': return < Badge
                msg={'Envio gratuito'}
                bgc={'green'}
                color={"white"}
                left={'-15px'}
                position={'relative'}
            />

            default: return null
        }
    }


    function fullShipping() {
        return < Badge
            msg={'Llega gratis hoy'}
            bgc={'green'}
            color={"white"}
            left={'-15px'}
        />
    }

    function getDiscount(props) {
        let discount = Math.abs(Math.round(((props.base_price / props.original_price) * 100) - 100))
        return discount
    }


    return (
        <section>

            <div className="img__container">
                <img src={props.pictures[0].url} alt={props.thumbnail} />
            </div>



            <div className="description__container">

                {props.variations.length > 1 ? <p className='variations'>{props.variations.length} colores</p> : null}
                {props.original_price ? <h4 className='original__price'>${props.original_price}</h4> : null}
                {props.sold_quantity > 500 ? <Badge
                    msg={'MAS VENDIDO'}
                    bgc={'rgb(231, 105, 21)'}
                    color={'white'}
                    left={'-55px'}
                    top={'0px'}
                    position={'relative'}
                /> : null}


                <div className="pricing__container">

                    <h2 className='base__price'>${base_price}</h2>

                    {props.original_price ? <Badge
                        msg={getDiscount(props) + '% OFF'}
                        bgc={getDiscount(props) > 20 ? 'rgb(231, 105, 21)' : 'transparent'}
                        color={getDiscount(props) > 20 ? 'white' : 'green'}
                    /> : null}

                </div>

                <div className="shipping__container">

                    {shipping(props)}

                    {props.shipping.logistic_type === 'fulfillment' ? <FullBadge /> : null}
                </div>





                <p className='product__description'>{props.title}</p>
            </div>
        </section>
    )
}

export default Card