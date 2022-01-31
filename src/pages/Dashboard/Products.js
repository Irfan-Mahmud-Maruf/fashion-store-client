import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Container, Row, Col, Card, Table, Image } from 'react-bootstrap'
import useAuth from '../../hooks/useAuth'


const Products = () => {
    const navigate = useNavigate()
    const [loading, setLoading] = useState(true)
    const { user, role, loggedin } = useAuth()
    const [products, setProducts] = useState([])  // Product List.
    
    useEffect( async () => {
        /**
         * Products Parser.
         */
        // fetch(`${process.env.NEXT_PUBLIC_API_SERVER}/products`)
        await fetch(`https://fashion-store-5.herokuapp.com/products`)
        .then(res=> res.json())
        .then(data=> {
            setProducts(data)
            setLoading(false)
        })
    }, [])

    useEffect(() => { 

        if (!user.email || loggedin === false) {
            navigate('/login')
        }
    })
        
    return (
        <>
            {(products.length <= 0 && loading === true) && (<Card><Card.Body><Card.Text>Loading...</Card.Text></Card.Body></Card>)}
            {(products.length <= 0 && loading === false) && (<Card><Card.Body><Card.Text>No user found</Card.Text></Card.Body></Card>)}
            {(products.length > 0 && loading === false) && (
                <Card>
                    <Card.Header>
                        <Card.Title>Products</Card.Title>
                    </Card.Header>
                    <Card.Body>
                        <Table hover>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Image</th>
                                    <th>Title</th>
                                    <th>Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                {products && products.map((product, i) => (
                                    <tr key={product?._id}>
                                        <td>{++i}</td>
                                        <td>
                                            <Image src={product?.img} width={36} alt={product?.title} />
                                        </td>
                                        <td>
                                            {product?.title}
                                        </td>
                                        <td>{product?.price}</td>
                                    </tr>
                                ))}
                                    
                            </tbody>
                        </Table>
                    </Card.Body>
                </Card>
            )}
        </>
    )
}

export default Products
