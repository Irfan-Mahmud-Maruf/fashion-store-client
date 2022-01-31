import { Container, Row, Col } from 'react-bootstrap'
import CardProduct from '../shared/cards/CardProduct'


// Click handler for 'Add to cart'
const clickHandler = (id, title) => {
    console.log('clicked', id)
}


const Products = ({ products }) => {
    return (
        <>
            <section className="fg-products">

                <div className="--s-body">
                    <Container>
                        <div className="--sb-content">
                                <h1 className="fg-hero-title mb-4">Featured Products</h1>
                            
                            <div className="--products">
                                <Row>
                                    {products && products.map(product => (
                                        <Col lg={3} md={3} sm={12} key={product?._id }>
                                            <CardProduct Key={product?._id} id={product?._id} className={`card-${product._id} mb-3`} img={product?.img} title={product?.title} price={product?.price} currency={product?.currency} onclick={ clickHandler } />
                                        </Col>
                                    ))}
                                </Row>
                            </div>
                        </div>
                    </Container>
                </div>
            </section>
        </>
    )
}

export default Products
