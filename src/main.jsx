import React from 'react'
import ReactDOM from 'react-dom/client'
import {Provider} from 'react-redux'
import {BrowserRouter} from 'react-router-dom'
import App from './App'
import {persistor, store} from './store/store.js'
import './index.scss'
import {PersistGate} from 'redux-persist/integration/react'
import {Elements} from '@stripe/react-stripe-js'
import {stripePromise} from './utils/stripe/stripe.utils'

ReactDOM.createRoot(document.getElementById('root')).render(
	<BrowserRouter>
		<React.StrictMode>
			<Provider store={store}>
				<PersistGate persistor={persistor}>
					<Elements stripe={stripePromise}>
						<App />
					</Elements>
				</PersistGate>
			</Provider>
		</React.StrictMode>,
	</BrowserRouter>
)
