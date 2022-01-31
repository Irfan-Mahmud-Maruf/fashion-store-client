import { Container } from "react-bootstrap"
import { Link } from 'react-router-dom'
import Layout from "../components/shared/Layout/Layout"


const Error404 = () => {
    return (
        <>
            <Layout>
                <section className="be-error-404">
                    <Container>
                        <h1 className="mb-2">Opps!</h1>
                        <h4 className="mb-2">404 Status</h4>
                        <p className="mb-5">Please make sure you're in the right address.</p>

                        <p>
                            <Link className="btn btn-dark" to={`/`}>
                                Get back to homepage
                            </Link>
                        </p>
                    </Container>
                </section>
            </Layout>
        </>
    )
}

export default Error404
