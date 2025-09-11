import styled from "styled-components";

import { Link } from "react-router-dom"

const NotFoundStyled = styled.div`
	display:flex;
	color:white;
	flex-direction:column;

	justify-content:center;
	align-items:center;
	height:80vh;
	
	font-family:monospace;

	&>#block{ 
		border:1px solid var(--color_theme_1);
		padding:3rem;
		border-radius: 20px;

		&>h3 { font-size:1.5rem; }
		&>p  { color:var(--color_light_2); }

		&>#link-container {
			display:flex;
			justify-content:space-around;
		
			&>a {
				color:var(--color_theme_1);
			}
		}
	}
`;

const NotFoundPage = () => {
	return (
		<NotFoundStyled>
			<div id="block"> 
				<h3>Page Not Found :(</h3>
				<p>* Check this links if you are lost!</p>
				<span id="link-container">
					<Link to="/">Log-in</Link>
					<Link to="/sign-up">Sign Up</Link>
				</span>
			</div>
		</NotFoundStyled>
	)
}

export default NotFoundPage
