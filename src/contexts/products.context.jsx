import {createContext, useEffect, useState} from "react";
import {useFirebase} from "../hooks/useFirebase";

export const ProductsContext = createContext({
	products: []
})

export const ProductsProvider = ({children}) => {

	const [products, setProducts] = useState([])
	const {addColletionAndDocuments} = useFirebase()

	return <ProductsContext.Provider value={{products}}>{children}</ProductsContext.Provider>

}
