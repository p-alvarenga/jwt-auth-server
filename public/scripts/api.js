const url = "http://localhost:3000/api";

export const SignUpUser = async (data) => {
	if (!data || !data.username || !data.email || !data.password)
		return null; 
	
	try {
		const response = await fetch(`${url}/users`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data)
		});

		//if (!response.ok) {
			//console.log(response.error.message);
		//}
		
		const json = await response;
		console.log(json);
	} catch (er) {
		
			
		console.error(er);
	}
};
