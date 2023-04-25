import type { Meta, StoryObj } from "@storybook/react";
import MockedUser from "../../app/mocked-user-profile/page";
import { handlers } from "../msw-mocks/handlers";

const meta: Meta<typeof MockedUser> = {
  title: "Pages/UserProfile",
  component: MockedUser,
};

export default meta;
type Story = StoryObj<typeof MockedUser>;

export const Primary: Story = {
  parameters: {
    msw: {
      handlers: [handlers[0]],
    },
  },
};
