import type { Meta, StoryObj } from "@storybook/react";
import Faucet from "@suiware/ui/Faucet";

const meta: Meta<typeof Faucet> = {
  component: Faucet,
  argTypes: {
    // type: {
    //   control: { type: "radio" },
    //   options: ["button", "submit", "reset"],
    // },
  },
};

export default meta;

type Story = StoryObj<typeof Faucet>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: (props) => <Faucet />,
  name: "Faucet",
  args: {},
};
