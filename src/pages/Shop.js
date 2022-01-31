import React, { useState, useEffect } from 'react'
import { Alert, Col, Container, Row } from 'react-bootstrap'
import CardProduct from '../components/shared/cards/CardProduct'
import Layout from '../components/shared/Layout/Layout'
import Banner from '../components/shop/Banner'



const Shop = () => {
    const [products, setProducts] = useState([])  // Product List.
    
    useEffect(() => {
        /**
         * Product Parser.
         */
        // fetch(`${process.env.NEXT_PUBLIC_API_SERVER}/products`)
        fetch(`https://fashion-store-5.herokuapp.com/products`)
        .then(res=> res.json())
        .then(data=> setProducts(data))
    }, [])

    
// Click handler for 'Add to cart'
const clickHandler = async (id, title, email, price) => {
    console.log('clicked', id)

    let cart = {
        email,
        productId: id,
        title,
        price
    }

    
}
    
    return (
        <>
            <Layout className={'explore'}>
                <Banner img={`/img/banner.jpg`}/>
                
                <section className="fg-products">

                    <div className="--s-body">
                        <Container>
                            <div className="--sb-content">
                                <h1 className="fg-hero-title mb-4">Explore Our Collections</h1>

                                <div className="--products">
                                    <Row>
                                        {products && products.map(product => (
                                            <Col lg={3} md={3} sm={12}>
                                                <CardProduct key={product?._id} id={product?._id} className={`card-${product._id} mb-3`} img={product?.img} title={product?.title} price={product?.price} currency={product?.currency} url={clickHandler} />
                                            </Col>
                                        ))}

                                    </Row>
                                </div>
                            </div>
                        </Container>
                    </div>
                </section>
            </Layout>
        </>
    )
}

export default Shop