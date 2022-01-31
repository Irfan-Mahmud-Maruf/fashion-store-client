import { Link, useNavigate, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Formik, Form, Field } from 'formik';
import { Col, Container, Row, Button, Stack } from 'react-bootstrap'
import useAuth from '../hooks/useAuth'
import Layout from '../components/shared/Layout/Layout';


const Register = () => {
    let navigate = useNavigate() 
    let location = useLocation()
    const from = location?.state?.from?.pathname || '/'  // Previous visited path.
    const [loading, setLoading] = useState(true)
    const {
        auth,
        user,
        loggedin,
        message,
        signupWithFormHandler,
        signinWith0Handler
    } = useAuth()

    useEffect(() => {
        if (user.email && loggedin === true) {
            navigate(from)
        } else {
            setLoading(false)
        }
    })

    return (
        <>
            {loading && (<Layout><Container className="py-5"><p>Loading...</p></Container></Layout>)}
            {!loading && (
                <Layout className="login">
                    <section className='fg-login'>
                        <Container>
                            <Row className="justify-content-center">
                                <Col lg={4} md={5} sm={12}>
                                    <Formik
                                        initialValues={{ name: '', email: '', password: '', password1: '' }}
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
                                            if (!values.password) {
                                                errors.password = 'Required';
                                            } else if (values.password !== values.password1) {
                                                errors.password1 = 'Password not matched';
                                            }

                                            return errors;
                                        }}
                                        onSubmit={(values, { setSubmitting }) => {
                                            setTimeout(() => {
                                                signupWithFormHandler(values)
                                                setSubmitting(false);
                                            }, 400);
                                        }}
                                    >
                                        {({ values, errors, isSubmitting }) => (
                                            <Form className='gh-subscription-form'>
                                                <h3 className="text-center mb-3">Register</h3>
                                                <Stack direction="vertical">
                                                    {errors.email && (
                                                        <div className="--box p-3 bg-bg mb-4">
                                                        </div>
                                                    )}
                                                    <stack>
                                                        <Field className="mb-3 w-100" type="text" name="name" placeholder="Full Name" />
                                                        {errors.name && <p className="text-red">{errors.name}</p>}
                                                    </stack>
                                                    
                                                    <stack>
                                                        <Field className="mb-3 w-100" type="email" name="email" placeholder="Email" />
                                                        {errors.email && <p className="text-red">{errors.email}</p>}
                                                    </stack>
                                                    
                                                    <stack>
                                                        <Field className="mb-3 w-100" type="password" name="password" placeholder="Password" />
                                                        {errors.password && <p className="text-red">{errors.password}</p>}
                                                    </stack>

                                                    <stack>
                                                        <Field className="mb-3 w-100" type="password" name="password1" placeholder="Re-enter Password" />
                                                        {errors.password1 && <p className="text-red">{errors.password1}</p>}
                                                    </stack>
                                                    
                                                    <Button type="submit" disabled={isSubmitting} variant="dark" >Register</Button>
                                                </Stack>
                                            </Form>
                                        )}
                                    </Formik>

                                    <div className='--form-footer mt-3'>
                                        <Stack>
                                            <Button className="mb-3" onClick={() => signinWith0Handler('google')} variant="outline-dark" as="div" disabled={false} >Register with Google</Button>

                                            <p className="text-center" >
                                                Have an account?
                                                <Link to={`/login`}>
                                                    sign in
                                                </Link>
                                            </p>
                                        </Stack>
                                        
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </section>
                </Layout>
            )}
        </>
    )
}

export default Register
