import Head from "next/head";
import birthdayReminderImg from ".//../public/images/projects/Birthday-Reminder.PNG";
import ProjectPage from "../components/ProjectPage";

export default function birthdayReminderComponent() {
  return (
    <>
      <Head>
        <title> Simina U | Birthday Reminder </title>
      </Head>
      <ProjectPage
        src={birthdayReminderImg}
        title="Birthday Reminder"
        stack="React Js"
        desc="Plain React JS component using also localStorage as to enable clear button functionality on a static component. Made using CRA, styled with CSS"
        stackList="React JS"
        demoUrl="https://goofy-clarke-c416cc.netlify.app/"
        codeUrl="https://github.com/Simina-U/Birthday-Reminder"
      />
    </>
  );
}
