import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
import App from './App'
import {CartProvider} from './contexts/cart.context'
import {ProductsProvider} from './contexts/products.context'
import {UserProvider} from './contexts/user.context'
import './index.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
	<BrowserRouter>
		<React.StrictMode>
			<UserProvider>
				<ProductsProvider>
					<CartProvider>
						<App />
					</CartProvider>
				</ProductsProvider>
			</UserProvider>
		</React.StrictMode>,
	</BrowserRouter>
)
