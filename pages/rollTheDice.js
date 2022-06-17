import rollTheDiceImage from "../public/images/projects/Roll-The-Dice.png";
import ProjectPage from "../components/ProjectPage";
import Head from "next/head";

export default function rollTheDice() {
  return (
    <>
      <Head>
        <title> Simina U | Roll The Dice </title>
      </Head>
      <ProjectPage
        src={rollTheDiceImage}
        title="Roll The Dice"
        stack="CSS3/HTML5/JavaScript"
        desc="This is one of my first projects developed with plain HTML, Vanilla JS and styled with CSS. It's the UI of a multiplayer dice game build without websockets, for now. Players roll the dice and gather a current score as well as a total score, important to determine the winner. If player rolls dice with value of 1 then current score remains 0 and total score resets to 0. Players may try to secure their total scores by selecting the hold button and allowing competition to keep playing the game. Whoever gathers first a score of 30 points will win the game and can start over by pressing New Game button.  "
        stackList="CSS3,HTML5,JavaScript"
        demoUrl="https://inquisitive-pixie-9884ad.netlify.app/"
        codeUrl="https://github.com/Simina-U/Roll-the-Dice"
      />
    </>
  );
}
