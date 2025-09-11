import styled from "styled-components"; 

const Loading = styled.div`
	width:5vw; 
	height:5vw; 
	border-radius:50%;
	border: .3rem solid; 
	border-color: var(--color_dark_2) var(--color_dark_2) var(--color_dark_2) var(--color_theme_1); 

	animation: rotate-animation 1.2s linear infinite;

	@keyframes rotate-animation {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
`;

export default Loading;
