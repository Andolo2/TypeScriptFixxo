import { useState,createContext, useContext} from 'react'




/*
export const productContext = createContext()
export const featuredContext = createContext()

export const featuredNineContext = createContext()

export const showcaseContext = createContext() */




   
interface productContextInterface {
  name: string;
  author: string;
  url: string;
}

const productContext = createContext<productContextInterface | null>(null);
  
  