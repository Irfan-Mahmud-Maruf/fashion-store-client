import { Image } from 'react-bootstrap'


const Banner = ({img}) => {
    return (
        <>
            <section className="fg-banner">
                <Image src={img} className='w-100' alt="Banner Image" />
            </section>
        </>
    )
}

export default Banner
