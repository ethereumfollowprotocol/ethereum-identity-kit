import { StoryFn, Meta } from "@storybook/react";
import ProfileCard from "./ProfileCard";

export default {
  title: "ReactComponentLibrary/Rating",
  component: ProfileCard,
} as Meta<typeof ProfileCard>;

const Template: StoryFn<typeof ProfileCard> = (args) => <ProfileCard {...args} />;

export const CardTest = Template.bind({});
CardTest.args = {
  userAddress: "0x1234567890123456789012345678901234567890",
};