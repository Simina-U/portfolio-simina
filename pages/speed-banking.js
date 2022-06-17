import Head from "next/head";
import speedBankingImg from ".//../public/images/projects/Speed-Banking.jpg";
import ProjectPage from "../components/ProjectPage";

export default function speedBanking() {
  return (
    <>
      <Head>
        <title> Simina U | Speed Banking </title>
      </Head>
      <ProjectPage
        src={speedBankingImg}
        title="Speed Banking"
        stack="CSS3/HTML5/JavaScript"
        desc="This is my very first project made with JavaScript. For now this project is not responsive as it was intented to help me have a better grasp on JS Data Structures and algorythms and their use. I used plain CSS for styling.
        There are 4 hard coded user accounts with following usernames and passwords: 
        { user:rp, pin:1111}
        { user:va, pin:2222}
        { user:rc, pin:3333}
        { user:ls, pin:4444}.
        Inspired by mobile banking apps Speed Banking allows existing users (meaning one of the already mentioned) to check their up to date balance, transfer money to another user, request a loan, or deleting their account. 
        "
        stackList="CSS3,HTML5,JavaScript"
        demoUrl="https://sharp-goldberg-4127ce.netlify.app/"
        codeUrl="https://github.com/Simina-U/Speed-Banking"
      />
    </>
  );
}
