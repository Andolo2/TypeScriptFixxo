import { createContext, useContext, useState } from "react";

import ShoppingCart from "../../components/ShoppingCart/ShoppingCart";
import { ShoppingCartContextInterface } from "../../models/productModel";




//const ShoppingCartContext = createContext()



interface ShoppingCartProviderProps{
    children: any
    incrementQuantity: any
     decrementQuantity: any
      removeItem: any
}

const ShoppingCartContext = createContext<ShoppingCartContextInterface | null>(null);



export const useShoppingCart = () => {
    return useContext(ShoppingCartContext)
}

export const ShoppingCartProvider: React.FC<ShoppingCartProviderProps> = ({children}) => {

    const [cartItems, setCartItems] = useState<ShoppingCartContextInterface[]>([])

    const cartQuantity = cartItems.reduce(
        (quantity, item) => item.quantity + quantity, 0
    )

    const getItemQuantity = (articleNumber:string) => {
        return cartItems.find(item => item.articleNumber === articleNumber)?.quantity || 0
        
    }   

    const incrementQuantity = (cartItem: any) => {
        const {articleNumber, product} = cartItem

        setCartItems(items => {
            if (items.find(item => item.articleNumber === articleNumber) == null){
                return [...items, {articleNumber, product, quantity: 1}]
            } else {
                return items.map(item => {
                    if (item.articleNumber === articleNumber) {
                        return {...item, quantity: item.quantity + 1}

                    } else{
                        return item
                    }
                })
            }
        })
    }

    const decrementQuantity = (cartItem: any) => {
        const {articleNumber} = cartItem;
        
        
        setCartItems(items => {
            if (items.find(item => item.articleNumber === articleNumber.quantity) === 1){
                return items.filter(item => item.articleNumber !== articleNumber)
               
            } else {
                return items.map(item => {
                    if (item.articleNumber === articleNumber) {
                        return {...item, quantity: item.quantity - 1}

                    } else{
                        return item
                    }
                })
            }
        })
    }

    const removeItem = (articleNumber: string) => {
        setCartItems(items => {
           
            return items.filter(item => item.articleNumber !== articleNumber)
           
        })
    } 

    return <ShoppingCartContext.Provider value={{cartItems, cartQuantity, getItemQuantity, incrementQuantity, decrementQuantity, removeItem}}>
        {children}
        <ShoppingCart />
    </ShoppingCartContext.Provider>
}