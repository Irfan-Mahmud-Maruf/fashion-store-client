import React, { useEffect, useState } from 'react'
import Hero from '../components/home/Hero'
import Products from '../components/home/Products'
import Subscribe from '../components/home/Subscribe'
import Testimonial from '../components/home/Testimonial'
import Layout from '../components/shared/Layout/Layout'


function Home() {
    const [products, setProducts] = useState([])  // Product List.
    const [testimonials, setTestimonials] = useState([])  // Testimonials List.
    useEffect( async () => {
        /**
         * Product Parser.
         */
        // fetch(`${process.env.NEXT_PUBLIC_API_SERVER}/products`)
        await fetch(`https://fashion-store-5.herokuapp.com/products?limit=8`)
        .then(res=> res.json())
        .then(data=> setProducts(data))

        
        /**
         * Product Parser.
         */
        // fetch(`${process.env.NEXT_PUBLIC_API_SERVER}/products`)
        await fetch(`https://fashion-store-5.herokuapp.com/reviews`)
        .then(res=> res.json())
        .then(data=> setTestimonials(data))
    }, [])

    return (
        <div>
            <Layout className="landing">
                <Hero title="" img="/img/banner.jpg" />
                <Products products={products}/>
                <Testimonial testimonials={testimonials} />
                <Subscribe />
            </Layout>
        </div>
    )
}

export default Home
