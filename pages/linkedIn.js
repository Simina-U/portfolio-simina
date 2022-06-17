import Head from "next/head";
import linkedInImg from "../public/images/projects/LinkedIn.PNG";
import ProjectPage from "../components/ProjectPage";

export default function LinkedInClone() {
  return (
    <>
      <Head>
        <title> Simina U | LinkedIn Clone </title>
      </Head>
      <ProjectPage
        src={linkedInImg}
        title="LinkedIn Clone"
        stack="React Js/Redux Toolkit/Firebase/Tailwind"
        desc="LinkedIn clone, mostly reproducing UI. Not all original app functionalities implemented, but I used Firebase for authentication and hosting, Tailwind for styling it and React Js."
        stackList="React Js, Redux Toolkit, Firebase, Tailwind"
        demoUrl="https://linkedin-clone-41d97.web.app/"
        codeUrl="https://github.com/Simina-U/linkedin-clone"
      />
    </>
  );
}
