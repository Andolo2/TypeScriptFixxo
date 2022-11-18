import React from 'react'
import { useState,createContext, useContext} from 'react'



interface productContextInterface {
   product: string
  }


export const productContext = createContext<productContextInterface | unknown>(null);





interface featuredContextInterface {
  product: string
 }

export const featuredContext = createContext<featuredContextInterface | unknown>(null);

/*

export const featuredNineContext = createContext()

export const showcaseContext = createContext() */



