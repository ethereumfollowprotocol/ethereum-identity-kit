import { StoryFn, Meta } from "@storybook/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ProfileCard from "./ProfileCard";

const queryClient = new QueryClient();

export default {
  title: "ReactComponentLibrary/Rating",
  component: ProfileCard,
} as Meta<typeof ProfileCard>;

const Template: StoryFn<typeof ProfileCard> = (args) => <QueryClientProvider client={queryClient}><ProfileCard {...args} /></QueryClientProvider>;

export const ProfileCardTest = Template.bind({});
ProfileCardTest.args = {
  userAddress: "0x5B0f3DBdD49614476e4f5fF5Db6fe13d41fCB516",
};