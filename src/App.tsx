import React, {useState, useEffect} from 'react'
//import {productContext, featuredContext, featuredNineContext, showcaseContext} from  './assets/context/context'
import { BrowserRouter, Routes, Route, Form } from 'react-router-dom';
import './App.min.css';
import { ProductInterface } from './models/productModel';
import HomeView from './views/HomeView'


const App: React.FC = () => {
  const [products, setProducts] = useState<ProductInterface[]>([])
  const [featured, setTwoFeatured] = useState<ProductInterface[]>([])
  const [nineCards, setNineCards] = useState<ProductInterface[]>([])
  const [showcase, setShowcase] = useState<ProductInterface[]>([])
  
    useEffect(() => {
  
      const fetchEightProducts = async () => {
        // You can await here
        let result = await fetch('https://win22-webapi.azurewebsites.net/api/products?take=8')
        setProducts( await result.json())
      }
      fetchEightProducts();
  
      
       const fetchTwoProducts = async () => {
        // You can await here
        let result = await fetch('https://win22-webapi.azurewebsites.net/api/products?take=2')
        setTwoFeatured(  await result.json())
        
      }
      fetchTwoProducts(); 
  
      const fetchNineProducts = async () => {
        // You can await here
        let result = await fetch('https://win22-webapi.azurewebsites.net/api/products?take=9')
        setNineCards(  await result.json())
        
      }
      fetchNineProducts(); 
  
       const showcaseProducts = async () => {
        // You can await here
        let result = await fetch('https://win22-webapi.azurewebsites.net/api/products?take=1')
        setShowcase(  await result.json())
        
      }
      showcaseProducts(); 
  
      
   
      
      
    },[setProducts, setTwoFeatured, setNineCards, setShowcase] )




  return (
    <BrowserRouter>
      <HomeView />
    </BrowserRouter>
  );
}

export default App;
