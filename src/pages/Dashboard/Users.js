import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Container, Row, Col, Card, Table, Image } from 'react-bootstrap'
import useAuth from '../../hooks/useAuth'


const Users = () => {
    const navigate = useNavigate()
    const [loading, setLoading] = useState(true)
    const { user, role, loggedin } = useAuth()
    const [users, setUsers] = useState([])  // Product List.
    
    useEffect( async () => {
        console.log("Token: ", localStorage.getItem('_token'))
        /**
         * Product Parser.
         */
        // fetch(`${process.env.NEXT_PUBLIC_API_SERVER}/products`)
        await fetch(`https://fashion-store-5.herokuapp.com/users`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('_token')}`
            },
        })
        .then(res=> res.json())
        .then(data=> {
            console.log("Users: ", data)
            setUsers(data)
        })
    }, [])

    useEffect(() => { 

        if (!user.email || loggedin === false) {
            navigate('/login')
        } else { 
            setLoading(false)
        }
    })
        
    return (
        <>
            {(users.length <= 0 && loading === true) && (<Card><Card.Body><Card.Text>Loading...</Card.Text></Card.Body></Card>)}
            {(users.length <= 0 && loading === false) && (<Card><Card.Body><Card.Text>No user found</Card.Text></Card.Body></Card>)}
            {(users.length > 0 && loading === false) && (
                <Card>
                    <Card.Header>
                        <Card.Title>Users</Card.Title>
                    </Card.Header>
                    <Card.Body>
                        <Table hover>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Image</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users && users.map((user, i) => (
                                    <tr key={user?._id}>
                                        <td>{++i}</td>
                                        <td>{`${user?.img}`}</td>
                                        <td>
                                            {user?.displayName}
                                        </td>
                                        <td>{user?.email}</td>
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

export default Users
