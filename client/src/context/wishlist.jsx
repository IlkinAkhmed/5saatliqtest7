import { createContext, useEffect, useState } from "react";
import Swal from "sweetalert2"

export const WishlistContext = createContext()


export const WishlistProvider = ({ children }) => {

    const [wishlist, setWishlist] = useState(localStorage.getItem('5saatliqtest7wish') ? JSON.parse(localStorage.getItem('5saatliqtest7')) : [])

    useEffect(() => {
        localStorage.setItem('5saatliqtest7wish', JSON.stringify(wishlist))
    }, [wishlist])



    function addToWishlist(item) {
        const foundData = wishlist.find(x => x._id === item._id)
        if (foundData) {
            setWishlist(wishlist.filter(x => x._id !== item._id))
            Swal.fire({
                icon: "success",
                title: "Removed from Wishlist!!!"
            })
        } else {
            setWishlist([...wishlist, { ...item }])
            Swal.fire({
                icon: "success",
                title: "Added To Wishlist"
            })
        }
    }



    const data = {
        wishlist,
        setWishlist,
        addToWishlist
    }

    return (
        <WishlistContext.Provider value={data}>
            {children}
        </WishlistContext.Provider>
    )
}

export default WishlistProvider