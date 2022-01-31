import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Col, Container, Row, Button, Card, Image } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import Layout from '../../components/shared/Layout/Layout';
import useOrder from '../../hooks/useOrder';


const SingleProduct = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState({});
    const { createOrder } = useOrder()

    useEffect(() => {
        let url = `https://fashion-store-5.herokuapp.com/products?id=${id}`;
        fetch(url)
        .then(res=> res.json())
        .then(data=> setProduct(data[0]))
        .catch(err=> {
            console.log('Error');
            console.log(err);
        });
    }, []);

    const newOrderHandler = async product => {
        console.log(product)
        await createOrder(product);
        await navigate('/checkout');
    }

    return (
        <>
            <Layout className={`single-product single-product-${product?._id}`}>
                <Container className="my-5">
                    <Row>
                        <Col lg={{ span: 4, offset: 2 }} md={{ span: 4, offset: 2 }} sm={12}>
                            <Image className="w-100" src={product?.img} alt={product?.title} />
                        </Col>
                        
                        <Col lg={6} md={6} sm={12}>
                            <h1 className="mb-3">{product?.title}</h1>
                            <h5 className="mb-5">{product?.currency} {product?.price}</h5>

                            <Button variant="dark" onClick={() => newOrderHandler(product)}>Buy now</Button>
                        </Col>
                    </Row>
                </Container>

            </Layout>
        </>
    );
}

export default SingleProduct;
