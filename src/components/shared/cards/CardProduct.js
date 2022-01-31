import { Card } from 'react-bootstrap'
import useAuth from '../../../hooks/useAuth'


const CardProduct = ({ className, id, img, title, price, currency, url }) => {
    const { user } = useAuth()
    return (
        <>
            <Card className={className}>
                <div className="card-img-top">
                    {/* {img && <img src={img} width={205} height={245} alt={title} />} */}
                    {img && <img className="w-100" src={img} alt={title} />}
                    <a  href={`/shop/${id}`} className="text-center w-100 py-2 card-button-cart" variant="dark">Read more</a>
                </div>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        <span className="---price-currency-ymbol">{currency}</span>
                        {price}
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    )
}

export default CardProduct
