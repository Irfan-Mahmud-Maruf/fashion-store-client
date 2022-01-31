import { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet, useNavigate } from 'react-router-dom';
import DashboardSideMenu from '../../components/dashboard/DashboardSideMenu';
import Layout from '../../components/shared/Layout/Layout';
import useAuth from '../../hooks/useAuth';


const Dashboard = () => {
    let navigate = useNavigate()
    const [loading, setLoading] = useState(true)
    const [isLoading, setIsLoading] = useState(true)
    const { user, role, loggedin } = useAuth()

    useEffect(() => { 
        if (!user.email || loggedin === false) {
            navigate('/login')
        } else { 
            setIsLoading(false)
        }
    })
        
    return (
        <>
            {isLoading && (<Layout><Container className="py-5"><p>Loading...</p></Container></Layout>)}
            {!isLoading && (
                
                <Layout className='dashboard'>
                    <div className="--dashboard-viewport py-4">
                        <Container>
                            <Row>
                                <Col as="aside" lg={3} md={3} sm={12}>
                                    <DashboardSideMenu role={role} />
                                </Col>
                                <Col lg={9} md={9} sm={12}>

                                    {user?.displayName && (
                                        <div className='p-4'>
                                            <h1>Hi {user?.displayName}</h1>
                                        </div>
                                    )}
                                    
                                    <Outlet />
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </Layout>
            )}
        </>
    )
}

export default Dashboard
