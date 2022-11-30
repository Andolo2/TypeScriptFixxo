export interface Product {
   

    articleNumber: number
    name: string
    description: string
    category: string
    price: number
    rating: number
    imageName: string

}

export interface ProductRequest {

    name: string
    description: string
    category: string
    price: number
    rating: number
    imageName: string


}

export interface ProductProviderProps {

    children: any
  }

  
