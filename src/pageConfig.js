import * as SC from "components/MainLayout/HomeScreens/Cases/CardsList/CardsList.styled";
import { ReactComponent as DiamondSvg } from "assets/svg/diamondHIW.svg";
import { ReactComponent as SunSvg } from "assets/svg/sunHIW.svg";
import { ReactComponent as EyeSvg } from "assets/svg/eyeHIW.svg";
import { ReactComponent as StarSvg } from "assets/svg/starHIW.svg";

export const home = {
  cases: {
    cardsList: [
      {
        title: (
          <SC.ListItemTitle>
            <SC.Span>{"Engaging"}</SC.Span>
            {" Task Lists"}
          </SC.ListItemTitle>
        ),
        text: "Spark creativity and connection with your audience by creating custom task lists. Let your followers contribute their ideas and requests, while you receive both financial support and fresh content inspiration. It's a win-win situation where everyone gets what they want.",
        icon: <SC.DiamondSvg />,
      },
      {
        title: (
          <SC.ListItemTitle>
            {"Live "}
            <SC.Span>{"Interactions"}</SC.Span>
          </SC.ListItemTitle>
        ),
        text: "Enhance your live stream with tailored task lists for your viewers. Engage and entertain your audience by fulfilling tasks in real-time during your stream. It's a fantastic way to communicate effectively and make the most of your live sessions while keeping your viewers happy.",
        icon: <SC.SunSvg />,
      },
      {
        title: (
          <SC.ListItemTitle>
            <SC.Span>{"Creative"}</SC.Span>
            {" Polls"}
          </SC.ListItemTitle>
        ),
        text: "Customize your task list, lock new task creation, and create polls for fan-driven content. Engage with your audience on a deeper level, letting them support and express their content preferences through donations. It's an interactive and friendly way to involve your fans and keep them excited.",
        icon: <SC.StarSvg />,
      },
    ],
  },
  howItWorks: {
    cardsList: [
      {
        title: "Start",
        icon: <StarSvg style={{ width: "68px", height: "68px" }} />,
        content:
          "Apply for the beta and receive an email from Givell. Submit all the necessary documents to gain access to the platform and embark on your journey.",

        border: "60px 60px 300px 60px",
        background: "linear-gradient(180deg, #5754FC 0%, #6332ED 100%)",
      },
      {
        title: "Create",
        icon: <DiamondSvg style={{ width: "68px", height: "68px" }} />,
        content:
          "Log in to the Givell platform and begin creating your personalised task list for various occasions and use cases that suit you best.",
        border: "60px 60px 60px 300px",
        background: "linear-gradient(180deg, #6332ED 0%, #9B32ED 100%)",
      },
      {
        title: "Engage",
        icon: <SunSvg style={{ width: "68px", height: "68px" }} />,
        content:
          "Share your lists with your audience and kickstart interaction and monetisation. Easily incorporate the link into your social media posts, videos, or live stream chats.",
        border: "60px 300px 60px 60px",
        background: "linear-gradient(180deg, #9B32ED 0%, #E932ED 100%)",
      },
      {
        title: "Earn",
        icon: <EyeSvg style={{ width: "68px", height: "68px" }} />,
        content:
          "Unlock a new stream of income through donations to your task lists. Easily withdraw your hard-earned funds directly to your card, with Givell’s seamless and convenient payment experience.",
        border: "300px 60px 60px 60px",
        background: "linear-gradient(180deg, #E932ED 0%, #5754FC 100%)",
      },
    ],
  },
  faqs: {
    cardsList: [
      {
        id: 1,
        question: "How can i share the task list with my audience?",
        answer:
          "Lorem ipsum dolor sit amet consectetur. Mauris rhoncus mi in elit nibh dictumst nulla. Fringilla in nisl ante gravida mattis rutrum. Pellentesque sed faucibus tellus elementum sed pellentesque arcu hendrerit nisl. Nisi ullamcorper mi amet in massa donec placerat sodales gravida.",
      },
      {
        id: 2,
        question: "Is Givell free to use in beta version?",
        answer:
          "Lorem ipsum dolor sit amet consectetur. Mauris rhoncus mi in elit nibh dictumst nulla. Fringilla in nisl ante gravida mattis rutrum. Pellentesque sed faucibus tellus elementum sed pellentesque arcu hendrerit nisl. Nisi ullamcorper mi amet in massa donec placerat sodales gravida.",
      },
      {
        id: 3,
        question: "How much money I can payout in one go?",
        answer:
          "Lorem ipsum dolor sit amet consectetur. Mauris rhoncus mi in elit nibh dictumst nulla. Fringilla in nisl ante gravida mattis rutrum. Pellentesque sed faucibus tellus elementum sed pellentesque arcu hendrerit nisl. Nisi ullamcorper mi amet in massa donec placerat sodales gravida.",
      },
      {
        id: 4,
        question: "Who is Givell platform suitable for?",
        answer:
          "Lorem ipsum dolor sit amet consectetur. Mauris rhoncus mi in elit nibh dictumst nulla. Fringilla in nisl ante gravida mattis rutrum. Pellentesque sed faucibus tellus elementum sed pellentesque arcu hendrerit nisl. Nisi ullamcorper mi amet in massa donec placerat sodales gravida.",
      },
      {
        id: 5,
        question: "What documents will I need to use Givell?",
        answer:
          "Lorem ipsum dolor sit amet consectetur. Mauris rhoncus mi in elit nibh dictumst nulla. Fringilla in nisl ante gravida mattis rutrum. Pellentesque sed faucibus tellus elementum sed pellentesque arcu hendrerit nisl. Nisi ullamcorper mi amet in massa donec placerat sodales gravida.",
      },
      {
        id: 6,
        question: "How quickly do I receive money on my account?",
        answer:
          "Lorem ipsum dolor sit amet consectetur. Mauris rhoncus mi in elit nibh dictumst nulla. Fringilla in nisl ante gravida mattis rutrum. Pellentesque sed faucibus tellus elementum sed pellentesque arcu hendrerit nisl. Nisi ullamcorper mi amet in massa donec placerat sodales gravida.",
      },
      {
        id: 7,
        question: "How much do I need to pay for the withdraw?",
        answer:
          "Lorem ipsum dolor sit amet consectetur. Mauris rhoncus mi in elit nibh dictumst nulla. Fringilla in nisl ante gravida mattis rutrum. Pellentesque sed faucibus tellus elementum sed pellentesque arcu hendrerit nisl. Nisi ullamcorper mi amet in massa donec placerat sodales gravida.",
      },
      {
        id: 8,
        question: "How many task lists and task can I and my audience create?",
        answer:
          "Lorem ipsum dolor sit amet consectetur. Mauris rhoncus mi in elit nibh dictumst nulla. Fringilla in nisl ante gravida mattis rutrum. Pellentesque sed faucibus tellus elementum sed pellentesque arcu hendrerit nisl. Nisi ullamcorper mi amet in massa donec placerat sodales gravida.",
      },
    ],
  },
};
