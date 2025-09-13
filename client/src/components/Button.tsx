import styled from "styled-components"; 

const ButtonStyle = styled.button<{ $injection?:string | null; $fill?:boolean; $fontSize?:string; $radius?:string; $hoverRadius?:string; $pH?:string; $pV?:string; }>
`
	${ props => props.$injection ? props.$injection : "" }; 

	background-color: ${ props => props.$fill ? "var(--color_theme_1)" : "var(--color_dark_1)"};
	color: ${ props => props.$fill ? "var(--color_dark_1)" : "var(--color_theme_1) "};
	border: 1px solid ${ props => props.$fill ? "transparent" : "var(--color_theme_1)" };	
	border-radius: ${ props => props.$radius ? props.$radius : "3px" };

	font-size: ${ props => props.$fontSize ? props.$fontSize : "auto" };
	padding: ${ props => props.$pV ? props.$pV : "10px" } ${ props => props.$pH ? props.$pH : "20px" };

	transition: .3s; 
	&:hover {
		${ props => !props.$fill ? `
				background-color: var(--color_theme_1);
				color: var(--color_dark_1);
				border-color: var(--color_theme_1);
			`: ""
		}
	
		border-radius: ${ props => props.$hoverRadius ? props.$hoverRadius : "4px" };
		cursor: pointer;	
	}
`;

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
	$injection?: string, 
	$fill?: boolean, 
	$fontSize?: string,
	$radius?: string,
	$hoverRadius?: string, 
	$pV?: string,
	$pH?: string, 
	children: React.ReactNode
};

const Button = ({ $injection, $fill, $fontSize, $radius, $hoverRadius, $pV, $pH, children }: ButtonProps) => {
	return (
		<ButtonStyle
			$injection={$injection}
			$fill={$fill}
			$fontSize={$fontSize}
			$radius={$radius}
			$hoverRadius={$hoverRadius}
			$pV={$pV}
			$pH={$pH}
		>
			{ children }
		</ButtonStyle>
	)
}

export default Button
