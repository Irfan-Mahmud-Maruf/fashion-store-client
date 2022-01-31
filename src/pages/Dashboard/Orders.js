import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Card, Table } from 'react-bootstrap'
import useAuth from '../../hooks/useAuth'


const Orders = () => {
    const navigate = useNavigate()
    const [loading, setLoading] = useState(true)
    const { user, role, loggedin } = useAuth()
    const [orders, setOrders] = useState([])  // Product List.
    
    useEffect( () => {
        /**
         * Orders Parser.
         */
        // fetch(`${process.env.NEXT_PUBLIC_API_SERVER}/products`)
        const url = (role === 'admin') 
            ? `https://fashion-store-5.herokuapp.com/orders`
            : `https://fashion-store-5.herokuapp.com/orders?email=${user?.email}`

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('_token')}`
            },
        })
        .then(res=> res.json())
        .then(data=> {
            setOrders(data)
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
            {(loading === true && orders.length <= 0) && (<Card><Card.Body><Card.Text>Loading...</Card.Text></Card.Body></Card>)}
            {(loading === false && orders.length <= 0) && (<Card><Card.Body><Card.Text>No order found!</Card.Text></Card.Body></Card>)}
            {(orders.length > 0 && loading === false) && (
                <Card>
                    <Card.Header>
                        <Card.Title>Orders</Card.Title>
                    </Card.Header>
                    <Card.Body>
                        <Table hover>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Product</th>
                                    <th>date</th>
                                    <th>User</th>
                                    <th>Address</th>
                                    <th>price</th>
                                </tr>
                            </thead>
                            <tbody>
                                {orders && orders.map((order, i) => (
                                    <tr key={order?._id}>
                                        <td>{++i}</td>
                                        <td>
                                            {order?.productTitle}
                                        </td>
                                        <td>
                                            {order?.date}
                                        </td>
                                        <td>
                                            <p className="mb-1"><strong>{order?.name}</strong></p>
                                            <p className="mb-1">{order?.name}</p>
                                            <p className="mb-1">{order?.phone}</p>
                                        </td>
                                        <td>
                                            <p className="mb-1">{order?.address}</p>
                                            <p className="mb-1">{order?.address1}</p>
                                        </td>
                                        <td>{`${order?.productPrice}`}</td>
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

export default Orders
