import { Link, useNavigate, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { ErrorMessage, Formik, Form, Field } from 'formik'
import { Col, Container, Row, Button, Stack } from 'react-bootstrap'
import useAuth from '../hooks/useAuth'
import Layout from '../components/shared/Layout/Layout'


function Login() {
    let navigate = useNavigate() 
    let location = useLocation()
    const from = location?.state?.from?.pathname || '/'  // Previous visited path.
    const [loading, setLoading] = useState(true) 
    const {
        user,
        loggedin,
        message,
        signinWithFormHandler,
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
                                        initialValues={{ email: '', password: '' }}
                                        validate={values => {
                                            const errors = {};
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
                                                signinWithFormHandler(values)
                                                setSubmitting(false);
                                            }, 400);
                                        }}
                                    >
                                        {({ values, errors, isSubmitting }) => (
                                            <Form className='gh-subscription-form'>
                                                <h3 className="text-center mb-3">Login</h3>

                                                {message && (
                                                    <div className="--box p-3 bg-bg mb-4">
                                                        {message}
                                                    </div>
                                                )}
                                                <Stack direction="vertical">
                                                    <Stack>
                                                        <Field className="mb-3 w-100" type="email" name="email" placeholder="Email" />
                                                        <ErrorMessage name="email" className="text-red" component="p" />
                                                    </Stack>

                                                    <Stack>
                                                        <Field className="mb-3 w-100" type="password" name="password" placeholder="Password" />
                                                        {errors.password && <p className="text-red"> Name {errors.password}</p>}
                                                    </Stack>
                                                    
                                                    <Button type="submit" disabled={isSubmitting} variant="dark" >Sign in</Button>
                                                </Stack>
                                            </Form>
                                        )}
                                    </Formik>

                                    <div className='--form-footer mt-3'>
                                        <Stack>
                                            <Button className="mb-3" onClick={() => signinWith0Handler('google')} variant="outline-dark" as="div" disabled={false} >Sign in with Google</Button>

                                            <p className="text-center" >
                                                New user?
                                                <Link to={`/register`}>
                                                    Create an account
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

export default Login
