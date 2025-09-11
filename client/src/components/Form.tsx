import styled from "styled-components"

const Form = styled.form`
	display:flex; 
	flex-direction:column;
	gap: .5rem;
	justify-content: center;
	align-items: center;
	height: 80vh;

	&>#form-title { color:var(--color_theme_1); }
	&>#note { 
		color:var(--color_light_2); 
		&>a { color:var(--color_theme_1); } 
	}

	&>input {
		width: 18rem;
		height: 2.2rem;
		padding: .1rem 1rem;
		border-radius: .4rem;
		border: 0px;
	}
		
	&>button {
		width: 9rem;
		height:3rem;
		padding: 0;
		margin-top: .5rem;	
	}

`;

export default Form
