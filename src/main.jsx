import React from 'react'
import ReactDOM from 'react-dom/client'
import {Provider} from 'react-redux'
import {BrowserRouter} from 'react-router-dom'
import App from './App'
import {CartProvider} from './contexts/cart.context'
import {store} from './store/store.js'
import './index.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
	<BrowserRouter>
		<React.StrictMode>
			<Provider store={store}>
				<CartProvider>
					<App />
				</CartProvider>
			</Provider>
		</React.StrictMode>,
	</BrowserRouter>
)
