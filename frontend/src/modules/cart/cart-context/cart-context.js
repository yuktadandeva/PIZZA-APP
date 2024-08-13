import {createContext} from 'react'
export const cartContext = createContext({cart:[], addCart: function(product){}, removeCart: function(product){}})