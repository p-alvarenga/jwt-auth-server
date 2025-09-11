import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

import api from "../utils/api.ts"

import Form from "../components/Form.tsx"
import Button from "../components/Button.tsx"

const LoginPage = ({ onLogin }) =>
{
	const navigate = useNavigate(); 

	const [ email, setEmail ] = useState("");
	const [ password, setPassword ] = useState("");

	const handleSubmit = async(e) => {
		e.preventDefault();

		try {
			const res = await api.post("/login", {
				email: email,
				password: password
			});
	
			navigate("/profile");
			localStorage.setItem("token", res.data.token); 
		} catch (e) {
			console.error(e);
		}
	}  

	return (
		/*
			<Form <-- NOTE: develop this
				config={ onSubmit: {handleSubmit}, ... },
				inputs=[
					{ 
						type="email",
						value={email}, 
						onChange={(e) => setEmail(e.target.value)}
					}, ... 
				]
			/> 
		*/
		<>
			<Form onSubmit={handleSubmit}>
				<h1 id="form-title">WebServer Log-in</h1>
				<input
					type="email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					placeholder="Your Email"
					required
				/>
		
				<input
					type={password} 
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					placeholder="Your Password"
					required 
				/>

				<Button
					fontSize="1rem"
					radius=".4rem"
					hoverRadius=".6rem"
				>Log-in</Button>

				<p id="note">* Do not have a account yet? <Link to="sign-up">create one!</Link></p>
			</Form>

			{ /* Footer Here */ }
		</>
	);
}

export default LoginPage
