import { Carousel, Container, Image } from 'react-bootstrap'


const Testimonial = ({ testimonials }) => {
    return (
        <>
            <section className="fg-testimonials">
                <Container>
                    <Carousel>
                        {testimonials && testimonials.map(item => (
                            <Carousel.Item key={item?._id}>

                                <Carousel.Caption>
                                    <div className="carousell-avater mb-5">
                                        {item?.img && <Image src={item?.img} alt={item?.name} width={100} height={100} alt={item?.name} />}
                                    </div>

                                    <p className="mb-3">{item?.statement}</p>
                                    <h4>{item?.name}, {item?.company}</h4>
                                </Carousel.Caption>
                            </Carousel.Item>
                        ))}
                    </Carousel>
                </Container>
            </section>
        </>
    )
}

export default Testimonial
