import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"

import api from "../utils/api.ts"
import Loading from "../components/Loading.tsx"

const ProfilePage = () => {
	const navigate = useNavigate();

	const [ profile, setProfile ] = useState(null); 
	const [ isLoading, setIsLoading ] = useState<boolean>(true); 
	const [ error, setError ] = useState<any>(null);

	useEffect(() => {
		const token = localStorage.getItem("token");
		if (!token) { navigate("/"); }

		const fetchProfile = async() => {
			try {
				const res = await api.get("/profile");
				console.log(res);
				setIsLoading(false);
				setProfile(res.data.profile);
			} catch (err) { 
				setError(err);
				console.error("[ERROR] Profile Page fetch\n", err);
			}
		}

		fetchProfile();
	}, [])
	
	return (
		<>
			{ !isLoading? 
				<>
					<h1>Hello, {profile.username}!</h1>
					{ /* <img> & buttons */ }
				</> 

				: <Loading/>
			}
		</>
	)
}

export default ProfilePage
