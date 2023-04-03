import {Route, Routes} from "react-router-dom"
import {Layout} from "./pages/layout/layout.page"
import {Home} from './pages/home/home.page'
import {Auth} from "./pages/auth/auth.page"
import {Shop} from "./pages/shop/shop.page"
import {Checkout} from "./pages/checkout/checkout.page"

const App = () => {

	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route index element={<Home />} />
				<Route path="/sign-in" element={<Auth />} />
				<Route path="/shop" element={<Shop />} />
				<Route path="/checkout" element={<Checkout />} />
			</Route>
		</Routes>
	)
}

export default App
