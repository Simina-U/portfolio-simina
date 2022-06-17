import Head from "next/head";
import movies from ".//../public/images/projects/Movies.PNG";
import ProjectPage from "../components/ProjectPage";

export default function MoviebasePage() {
  return (
    <>
      <Head>
        <title> Simina U | MovieBase </title>
      </Head>
      <ProjectPage
        src={movies}
        title="MovieBase"
        stack="React Js/Next Js/MongoDB/Chakra UI/TMDB API"
        desc="I developed MovieBase using Next Js,a React Js framework, taking advantage of the neat API routing system, image optimization, navigation history etc. For movies data I used TMDB API. User will be able to see movie recommendations based on TMDB trends but also based on his/her history and his/her watchlist. Also, user is able to search for a movie, by the name of it, if no reccomendation is suitable. 
        Movies can be added or removed to both watchlist and history.   
        "
        stackList="React Js, Next Js, MongoDB, Chakra UI,TMDB API"
        demoUrl="https://movie-base-teal.vercel.app/"
        codeUrl="https://github.com/Simina-U/MovieBase"
      />
    </>
  );
}
