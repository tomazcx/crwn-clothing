import {Route, Routes} from "react-router-dom"
import {Layout} from "./pages/layout/layout.page"
import {Home} from './pages/home/home.page'
import {Auth} from "./pages/auth/auth.page"
import {Shop} from "./pages/shop/shop.page"
import {Checkout} from "./pages/checkout/checkout.page"
import {useEffect} from "react"
import {useAuth} from "./hooks/useAuth"
import {useFirebase} from "./hooks/useFirebase"
import {setCurrentUser} from "./store/user/user.reducer"
import {useAppDispatch} from "./hooks/useAppDispatch"


const App = () => {

	const {register} = useAuth()
	const {onAuthStateChangedListener} = useFirebase()
	const dispatch = useAppDispatch()

	useEffect(() => {
		const unsubscribe = onAuthStateChangedListener((user) => {
			if (user) {
				register(user) //will only return the doc refference in case already registered
			}

			dispatch(setCurrentUser(user))
		})

		return unsubscribe
	}, [dispatch])




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
