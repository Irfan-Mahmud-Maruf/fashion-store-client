import { createContext, useState } from "react"


// Creating Auth Context
export const OrderContext = createContext()


const OrderProvider = ({children}) => {
    // Firebase State
    const allContext = Order()

    return (
        <OrderContext.Provider value={allContext}>
            {children}
        </OrderContext.Provider>
    )
}

export default OrderProvider


const Order = () => {
    const [order, setOrder] = useState({})

    const createOrder = object => setOrder(object)

    const removeOrder = () => setOrder({})

    return {
        order,
        createOrder,
        removeOrder
    }
}
