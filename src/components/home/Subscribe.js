import { Field, Form, Formik } from 'formik'
import { Button, Container } from 'react-bootstrap'

const Subscribe = () => {
    return (
        <>
            <section className="fg-s-subscribe">
                <Container>
                    <h1 className='text-center mb-3'>Newsletter</h1>
                    <p className='text-center mb-4'>Get timely updates from your favorite products</p>

                    <Formik
                        initialValues={{ email: '' }}
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
                                alert(JSON.stringify(values, null, 2));
                                setSubmitting(false);
                            }, 400);
                        }}
                    >
                        {({ values, errors, isSubmitting }) => (
                            <Form className='gh-subscription-form'>
                                <Field type="email" name="email" placeholder="Enter your email" />
                                <Button type="submit" disabled={isSubmitting} variant="dark" >Subscribe</Button>
                            </Form>
                        )}
                    </Formik>
                </Container>
            </section>
        </>
    )
}

export default Subscribe
