import { BrowserRouter, Routes, Route } from "react-router-dom";

import ProfilePage from "./Pages/ProfilePage.tsx"
import LoginPage from "./Pages/LoginPage.tsx"
import SignUpPage from "./Pages/SignUpPage.tsx"
import NotFoundPage from "./Pages/NotFoundPage.tsx"

const App = () => {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<LoginPage/>}/>
					<Route path="/sign-up" element={<SignUpPage/>}/>
					<Route path="/profile" element={<ProfilePage/>}/>		

					<Route path="*" element={<NotFoundPage/>}/>
				</Routes>
			</BrowserRouter>
		</>
	)
}

export default App 
