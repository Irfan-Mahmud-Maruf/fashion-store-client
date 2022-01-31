// Core
// UI Component
import { Col, Container, Row, Stack } from 'react-bootstrap';
// Icon
import { FaGooglePlusG, FaInstagram, FaLinkedinIn, FaPinterest, FaTwitter } from "react-icons/fa";
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <>
            <div className='fg-footer'>
                <Container>
                    <Row>
                        <Col lg={6} md={6} sm={12} xs={12}>
                            <Stack direction="horizontal" gap={3} >
                                <p>©2021 Fashion Store</p>

                                <p className="--f-text" >
                                    <Link to={`/`}>
                                        Blog
                                    </Link>
                                </p>
                                <p className="--f-text" >
                                    <Link to={`/`}>
                                        FAQs
                                    </Link>
                                </p>
                                <p className="--f-text" >
                                    <Link to={`/`}>
                                        Contact us
                                    </Link>
                                </p>
                            </Stack>
                        </Col>


                        <Col lg={6} md={6} sm={12} xs={12}>
                            <Stack direction="horizontal" gap={3} >
                                <span style={{marginLeft: 'auto'}}></span>

                                <p className="--f-icon" >
                                    <Link to={`/`}>
                                        <FaTwitter />
                                    </Link>
                                </p>
                                <p className="--f-icon" >
                                    <Link to={`/`}>
                                        <FaInstagram />
                                    </Link>
                                </p>
                                <p className="--f-icon" >
                                    <Link to={`/`}>
                                        <FaLinkedinIn />
                                    </Link>
                                </p>
                                <p className="--f-icon" >
                                    <Link to={`/`}>
                                        <FaPinterest />
                                    </Link>
                                </p>
                                <p className="--f-icon" >
                                    <Link to={`/`}>
                                        <FaGooglePlusG />
                                    </Link>
                                </p>
                            </Stack>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default Footer
