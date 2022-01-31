import { Link } from 'react-router-dom'
import { ListGroup } from 'react-bootstrap'
import useAuth from '../../hooks/useAuth'


const DashboardSideMenu = ({ role }) => {
    const { signoutHandler } = useAuth()

    return (
        <>
            <ListGroup as="ul">
                <ListGroup.Item as="li">
                    <Link to={`/dashboard/orders`}>
                        Orders
                    </Link>
                </ListGroup.Item>
                {role === 'admin' && (
                    <ListGroup.Item as="li">
                        <Link to={`/dashboard/products`}>
                            Products
                        </Link>
                    </ListGroup.Item>
                )}
                <ListGroup.Item as="li">
                    <Link to={`/dashboard/reviews`}>
                        Reviews
                    </Link>
                </ListGroup.Item>
                <ListGroup.Item as="li">
                    <Link to={`/dashboard/payments`}>
                        Payments
                    </Link>
                </ListGroup.Item>

                {role === 'admin' && (
                    <ListGroup.Item as="li">
                        <Link to={`/dashboard/users`}>
                            Users
                        </Link>
                    </ListGroup.Item>
                )}
                <ListGroup.Item as="li" onClick={() => signoutHandler()}>
                    Logout
                </ListGroup.Item>
            </ListGroup>
        </>
    )
}

export default DashboardSideMenu
