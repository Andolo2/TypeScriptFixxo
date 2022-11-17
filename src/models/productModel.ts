export interface ProductInterface{
    articleNumber: string
    name: string
    description?: string
    price: number
}

export interface ShoppingCartContextInterface {
    articleNumber: string;
    quantity: number;
    incrementQuantity: number
    decrementQuantity: number
    removeItem: any
  
   
  }