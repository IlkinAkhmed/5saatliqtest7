import { createContext, useEffect, useState } from "react";
import Swal from "sweetalert2"

export const BasketContext = createContext()


export const BasketProvider = ({ children }) => {

    const [basket, setBasket] = useState(localStorage.getItem('5saatliqtest7') ? JSON.parse(localStorage.getItem('5saatliqtest7')) : [])

    useEffect(() => {
        localStorage.setItem('5saatliqtest7', JSON.stringify(basket))
    }, [basket])



    function addToCart(item) {
        const foundData = basket.find(x => x._id === item._id)
        if (foundData) {
            foundData.count++
            foundData.total = foundData.count * foundData.price
            setBasket([...basket])
            Swal.fire({
                icon: "info",
                title: "Alreadt To Cart, count increased!!!"
            })
        } else {
            const total = item.price
            setBasket([...basket, { ...item, count: 1, total: total }])
            Swal.fire({
                icon: "success",
                title: "Added To Cart"
            })
        }
    }

    function modifyCount(isIncreament, item) {
        const foundData = basket.find(x => x._id === item._id)
        if (isIncreament) {
            foundData.count++
            foundData.total = foundData.count * foundData.price
            setBasket([...basket])
        } else {
            foundData.count--
            foundData.total = foundData.count * foundData.price
            setBasket([...basket])

        }
    }

    const data = {
        basket,
        setBasket,
        addToCart,
        modifyCount
    }

    return (
        <BasketContext.Provider value={data}>
            {children}
        </BasketContext.Provider>
    )
}

export default BasketProvider