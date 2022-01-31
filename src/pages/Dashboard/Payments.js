import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Card, Table, Offcanvas } from 'react-bootstrap'
import { ErrorMessage, Formik, Form, Field } from 'formik'
import useAuth from '../../hooks/useAuth'


const Payments = () => {
    const navigate = useNavigate()
    const [loading, setLoading] = useState(true)
    const { user, role, loggedin } = useAuth()
    const [payments, setPayments] = useState([])  // Testimonials List.
    
    useEffect( async () => {
        /**
         * Products Parser.
         */
        // fetch(`${process.env.NEXT_PUBLIC_API_SERVER}/products`)
        await fetch(`https://fashion-store-5.herokuapp.com/payments`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('_token')}`
            },
        })
        .then(res=> res.json())
        .then(data=> {
            setPayments(data)
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
            {(payments.length <= 0 && loading === true) && (<Card><Card.Body><Card.Text>Loading...</Card.Text></Card.Body></Card>)}
            {(payments.length <= 0 && loading === false) && (<Card><Card.Body><Card.Text>No user found</Card.Text></Card.Body></Card>)}
            {(payments.length > 0 && loading === false) && (
                <>
                    <Card>
                        <Card.Header>
                            <Card.Title>Payments</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Table hover>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>date</th>
                                        <th>Card</th>
                                        <th>Cost</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {payments && payments.map((payment, i) => (
                                        <tr key={payment?._id}>
                                            <td>{++i}</td>
                                            <td>
                                                <p>{payment?.date}</p>
                                            </td>
                                            <td>
                                                {payment?.card}
                                            </td>
                                            <td>{payment?.cost}</td>
                                        </tr>
                                    ))}

                                </tbody>
                            </Table>
                        </Card.Body>
                    </Card>
                </>
            )}
        </>
    )
}

export default Payments
