import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"

import api from "../utils/api.ts"
import Button from "../components/Button.tsx"
import Loading from "../components/Loading.tsx"

interface Profile {
	id: number, 
	username: string, 
	email: string, 
	description: string | null, 
	photoUrl: string | null, 
};

const ProfilePage = () => {
	const navigate = useNavigate();

	const [ profile, setProfile ] = useState<Profile | null>(null); 
	const [ isLoading, setIsLoading ] = useState<boolean>(true); 

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
				console.error("[ERROR] Profile Page fetch\n", err);
				navigate("/");
			}
		}
	
		fetchProfile();
	}, [])

	const onLogOut = () => {
		localStorage.removeItem("token");
		navigate("/");
	}

	return (
		<>
			{ !isLoading?
				<>
					<nav style={{
						display:"flex",
						justifyContent: "right"
					}}>
						<Button	
							onClick={onLogOut}
							$fill
							$radius=".8rem"
							$hoverRadius=".8rem"
							$injection="
								background-color:transparent!important;
								border-color:red!important;
								color:red!important;

								&:hover {
									background-color:red!important;
									color:white!important;
								}
							"
						>Log out</Button>
					</nav>

					<h1>Hello, { profile?.username }!</h1>
					{ /* <img> & buttons */ }
				</> 

				: <Loading/>
			}
		</>
	)
}

export default ProfilePage
