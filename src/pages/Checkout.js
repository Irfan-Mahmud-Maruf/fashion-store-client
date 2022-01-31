import { Link, useNavigate, useLocation, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Formik, Form, Field } from 'formik';
import { Col, Container, Row, Button, Stack, Alert } from 'react-bootstrap'
import useAuth from '../hooks/useAuth'
import useOrder from '../hooks/useOrder'
import Layout from '../components/shared/Layout/Layout';


const Checkout = () => {
    let navigate = useNavigate() 
    const params = useParams()
    let location = useLocation()
    const [success, setSuccess] = useState(false);
    const from = location?.state?.from?.pathname || '/'  // Previous visited path.
    const [loading, setLoading] = useState(true)
    const { order } = useOrder()
    const {
        auth,
        user,
        loggedin,
    } = useAuth()

    useEffect(() => {
    //     if (user.email && loggedin === true) {
    //         navigate(from)
    //     } else {
            setLoading(false)
    //     }
    console.log(order)
    })

    const checkoutFormHandler = (values) => {
        const url = 'https://fashion-store-5.herokuapp.com/orders';
        const data = {
            date: new Date(),
            ...values
        }

        fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('_token')}`,
            },
            body: JSON.stringify(data)
        })
        .then(res=> res.json())
        .then(data=> {if(data?.acknowledged === true) setSuccess(true)});
    }


    return (
        <>
            {loading && (<Layout><Container className="py-5"><p>Loading...</p></Container></Layout>)}
            {!loading && (
                <Layout className="checkout">
                    <section className='fg-checkout'>
                        <Container>
                            <Row className="justify-content-center">
                                <Col lg={4} md={5} sm={12}>
                                    {/* Success Alert */}
                                    <Alert className="mb-4" show={success} variant="success">
                                        Order successfull
                                    </Alert>

                                    <Formik
                                        initialValues={
                                            { 
                                                name: user?.displayName, 
                                                email: user?.email, 
                                                phone: '', 
                                                address: '', 
                                                address1: '',
                                                productTitle: order?.title,
                                                productPrice: order?.price,
                                            }
                                        }
                                        validate={values => {
                                            const errors = {};
                                            if (!values.name) {
                                                errors.name = 'Required';
                                            }
                                            if (!values.email) {
                                                errors.email = 'Required';
                                            } else if (
                                                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                                            ) {
                                                errors.email = 'Invalid email address';
                                            }

                                            return errors;
                                        }}
                                        onSubmit={(values, { setSubmitting }) => {
                                            setTimeout(() => {
                                                checkoutFormHandler(values)
                                                setSubmitting(false);
                                            }, 400);
                                        }}
                                    >
                                        {({ values, errors, isSubmitting }) => (
                                            <Form className='gh-subscription-form'>
                                                <h3 className="text-center mb-3">Checkout</h3>
                                                <Stack direction="vertical">
                                                    {errors.email && (
                                                        <div className="--box p-3 bg-bg mb-4">
                                                        </div>
                                                    )}
                                                    <stack>
                                                        <Field className="mb-3 w-100" type="text" name="name" placeholder="Full Name" value={user?.displayName} />
                                                        {errors.name && <p className="text-red">{errors.name}</p>}
                                                    </stack>
                                                    
                                                    <stack>
                                                        <Field className="mb-3 w-100" type="email" name="email" placeholder="Email" value={user?.email} />
                                                        {errors.email && <p className="text-red">{errors.email}</p>}
                                                    </stack>
                                                    
                                                    <stack>
                                                        <Field className="mb-3 w-100" type="tel" name="address" placeholder="Address line 1" />
                                                        {errors.password && <p className="text-red">{errors.password}</p>}
                                                    </stack>
                                                    <stack>
                                                        <Field className="mb-3 w-100" type="tel" name="address1" placeholder="Address line 2" />
                                                    </stack>

                                                    <stack>
                                                        <Field className="mb-3 w-100" type="text" name="phone" placeholder="Mobile" />
                                                        {errors.password1 && <p className="text-red">{errors.password1}</p>}
                                                    </stack>
                                                    
                                                    <stack>
                                                        <Field className="mb-3 w-100" type="text" name="productTitle" value={order?.title} />
                                                    </stack>
                                                    <stack>
                                                        <Field className="mb-3 w-100" type="number" name="productPrice" value={parseFloat(order?.price).toFixed(2)} />
                                                    </stack>
                                                    <Button type="submit" disabled={isSubmitting} variant="dark" >Checkout</Button>
                                                </Stack>
                                            </Form>
                                        )}
                                    </Formik>
                                </Col>
                            </Row>
                        </Container>
                    </section>
                </Layout>
            )}
        </>
    )
}

export default Checkout
