import type { Meta, StoryObj } from "@storybook/react-vite";
import { Badge } from "./Badge";

const meta = {
	title: "Example/Badge",
	component: Badge,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	argTypes: {
		variant: {
			control: "select",
			options: ["primary", "secondary", "outline", "ghost", "destructive"],
		},
	},
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof Badge>;

export const Primary: Story = {
	args: {
		label: "Primary",
		variant: "primary",
	},
};

export const Secondary: Story = {
	args: {
		label: "Secondary",
		variant: "secondary",
	},
};

export const Outline: Story = {
	args: {
		label: "Outline",
		variant: "outline",
	},
};

export const Ghost: Story = {
	args: {
		label: "Ghost",
		variant: "ghost",
	},
};

export const Destructive: Story = {
	args: {
		label: "Destructive",
		variant: "destructive",
	},
};
