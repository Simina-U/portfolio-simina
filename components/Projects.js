import birthdayImage from ".//../public/images/projects/Birthday-Reminder.png";
import linkedinImage from ".//../public/images/projects/LinkedIn.png";
import moviesImage from ".//../public/images/projects/Movies.png";
import rollTheDiceImage from ".//../public/images/projects/Roll-The-Dice.png";
import speedBankingImage from ".//../public/images/projects/Speed-Banking.jpg";
import Project from "./Project";

export default function Projects() {
  return (
    <div id="projects" className="w-full pt-14">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I&apos;ve Built</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Project
            image={rollTheDiceImage}
            title="Roll The Dice "
            mainTechUsed="CSS3, HTML5, JavaScript"
            projectUrl="/rollTheDice"
          />
          <Project
            image={speedBankingImage}
            title="Speed Banking "
            mainTechUsed="CSS3, HTML5, JavaScript"
            projectUrl="/speed-banking"
          />
          <Project
            image={birthdayImage}
            title="Birthday Reminder Component"
            mainTechUsed="React Js"
            projectUrl="/birthday-reminder"
          />
          <Project
            image={linkedinImage}
            title={"LinkedIn Clone"}
            mainTechUsed="React Js, Redux Toolkit, Firebase, Tailwind"
            projectUrl="/linkedIn"
          />
          <Project
            image={moviesImage}
            title="Moviebase "
            mainTechUsed="React Js, Next Js, MongoDB, Chakra UI"
            projectUrl="/moviebase"
          />
        </div>
      </div>
    </div>
  );
}
