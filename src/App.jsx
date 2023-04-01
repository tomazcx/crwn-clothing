import {Route, Routes} from "react-router-dom"
import {Layout} from "./pages/layout/layout.page"
import {Home} from './pages/home/home.page'
import {Auth} from "./pages/auth/auth.page"

const App = () => {

	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route index element={<Home />} />
				<Route path="/sign-in" element={<Auth />} />
			</Route>
		</Routes>
	)
}

export default App
