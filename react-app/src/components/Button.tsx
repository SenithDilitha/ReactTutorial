import { Children, ReactNode } from "react";

interface Props {
	children: ReactNode;
	color: "primary" | "secondary" | "danger" | "warning";
	onClick: () => void;
}

const Button = ({ children, color, onClick }: Props) => {
	return (
		<button type="button" className={"btn btn-" + color} onClick={onClick}>
			{children}
		</button>
	);
};

export default Button;
