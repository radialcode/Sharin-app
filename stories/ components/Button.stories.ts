import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import Button from "./Button";


const meta = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    text: "Salta",
    variant: "primary",
  },
};

export const Secondary: Story = {
  args: {
    text: "Indietro",
    variant: "secondary",
  },
};
  