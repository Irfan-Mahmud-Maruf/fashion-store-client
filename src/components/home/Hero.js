import { Container } from 'react-bootstrap'



const Hero = ({ title, img}) => {
    const style = {
        background: `url(${img})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
        backgroundOrigin: 'border-box'
    }
    return (
        <>
            <section className="fg-hero">
                <div className="--s-bg" style={style}></div>

                <div className="--s-body">
                    <Container>
                        <div className="--sb-content">
                            <h1 className="fg-hero-title">Lets <br/>Be Model</h1>
                        </div>
                    </Container>
                </div>
            </section>
        </>
    )
}

export default Hero
