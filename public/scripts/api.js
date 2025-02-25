const url = "http://localhost:3000";

export const SignUpUser = async (data) => {
	if (!data || !data.username || !data.email || !data.password)
		return null; 

	try {
		const response = await fetch(`${url}/users`, {
			method: "POST"
			body: JSON.stringify(data)
		})

	} catch (er) {
		console.log(er.message);
	}

};
