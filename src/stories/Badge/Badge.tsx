import "./badge.css";

export type BadgeVariant =
	| "primary"
	| "secondary"
	| "outline"
	| "ghost"
	| "destructive";

export interface BadgeProps {
	label: string | number;
	variant?: BadgeVariant;
	children?: React.ReactNode;
	className?: string;
}

export const Badge = ({
	label,
	variant = "primary",
	children,
	className = "",
}: BadgeProps) => {
	const classes = ["badge", `badge--${variant}`, className]
		.filter(Boolean)
		.join(" ");

	return (
		<span className={classes}>
			{children}
			{label}
		</span>
	);
};
