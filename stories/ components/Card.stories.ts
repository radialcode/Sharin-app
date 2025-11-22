import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import Card from "./Card";
import { CARD_DEFAULTS } from "@/utils/helper";


const meta = {
  title: "Components/Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    card: CARD_DEFAULTS[0]
  },
};
