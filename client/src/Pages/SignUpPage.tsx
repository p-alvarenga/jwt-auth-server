import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"


import api from "../utils/api.ts"
import Form from "../components/Form.tsx"
import Button from "../components/Button.tsx"

const SignUpPage = () => {
	const navigate = useNavigate(); 

	const [ username, setUsername ] = useState("");
	const [ email, setEmail ] = useState("");
	const [ password, setPassword ] = useState(""); 

	const [ error, setError ] = useState("");

	const handleSubmit = async(e) => {
		e.preventDefault();

		try {
			const res = api.post("signup", {
				username: username, 
				email: email, 
				password: password
			});

			navigate("/");  // server must return token to actual login directly
		} catch (e) {
			console.log(e); 
		}
	}

	return (
		<>
			<Form onSubmit={handleSubmit}>
				<h1 id="form-title">WebServer Sign-up</h1>
				<input
					type="text"
					value={username}
					onChange={(e) => setUsername(e.target.value)}
					placeholder="Your username"
					required
				/>
				<input
					type="email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					placeholder="Your email"
					required
				/>
				<input
					type="password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					placeholder="Your password"
					required
				/>
				<Button
					$fill
					$fontSize="1rem"
					$radius="1.2rem"
					$hoverRadius=".8rem"	
				>
					Sign-up
				</Button>

				<p id="note">* Already have an account? <Link to="/">Log-in</Link></p>
			</Form>
			{ /* <p id="error-note"> */ }
		</>
	)
}

export default SignUpPage 
