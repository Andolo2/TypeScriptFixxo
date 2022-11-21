import { createContext, ReactNode, useContext, useState } from "react";

import ShoppingCart from "../../components/ShoppingCart/ShoppingCart";

const ShoppingCartContext = createContext({} as ShoppingCartContext)

type ProviderProp={
    children: ReactNode
}

type ShoppingCartContext  = {
    // children: ReactNode
    cartQuantity: number
    getItemQuantity: (articleNumber: number) => void
    incrementQuantity: (cartItem: any) => void
    decrementQuantity:(articleNumber: number) => void
    removeItem: (articleNumber: number) => void
    cartItems: cartItemProp[]
}

type cartItemProp = {
    
    quantity: number
    item?: number
    articleNumber: number
    items?: number
    product?: any
   
}


export const useShoppingCart = () => {
    return useContext(ShoppingCartContext)
}



export const ShoppingCartProvider: React.FC <ProviderProp> = ({children}) => {

    const [cartItems, setCartItems] = useState<cartItemProp[]>([])

    const cartQuantity = cartItems.reduce(
        (quantity, item) => item.quantity + quantity, 0
    )

    const getItemQuantity = (articleNumber: number) => {
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

    const decrementQuantity = (articleNumber: number) => {
        
        
        
        setCartItems(items => {
            if (items.find(item => item.articleNumber === articleNumber)?.quantity === 1) {
              return items.filter(item => item.articleNumber !== articleNumber)
            }else {
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

    const removeItem = (articleNumber: number) => {
        setCartItems(items => {
           
            return items.filter(item => item.articleNumber !== articleNumber)
           
        })
    } 

    return <ShoppingCartContext.Provider value={{cartItems, cartQuantity, getItemQuantity, incrementQuantity, decrementQuantity, removeItem}}>
        {children}
        <ShoppingCart cartItems={0}  />
    </ShoppingCartContext.Provider>
}