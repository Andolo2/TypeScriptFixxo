export interface Product {

    articleNumber: string
    name: string
    description: string
    category: string
    price: number
    rating: number
    imageName: string


}

export interface ProductRequest {

    articleNumber: string
    name: string
    description: string
    category: string
    price: number
    rating: number
    imageName: string


}


export interface iProductProviderProps {
	children: any

}