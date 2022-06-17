import React from "react";
import Skill from "../components/Skill";

export default function Skills() {
  return (
    <div id="skills" className="w-full lg:h-screen p-2 py-6 ">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full ">
        <p className="text-xl tracking-widest uppercase text-[#5651e5] pt-16 ">
          Skills
        </p>
        <h2 className="py-4">What I can do?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Skill image="/../public/images/skills/html.png" title="HTML" />
          <Skill image="/../public/images/skills/css.png" title="CSS" />
          <Skill
            image="/../public/images/skills/tailwind.png"
            title="Tailwind"
          />
          <Skill
            image="/../public/images/skills/chakra-ui.png"
            title="Chakra UI"
          />
          <Skill
            image="/../public/images/skills/javascript.png"
            title="JavaScript"
          />
          <Skill
            image="/../public/images/skills/firebase.png"
            title="Firebase"
          />
          <Skill image="/../public/images/skills/mongo.png" title="MongoDB" />

          <Skill
            image="/../public/images/skills/supabase.png"
            title="Supabase"
          />
          <Skill image="/../public/images/skills/node.png" title="Node" />
          <Skill image="/../public/images/skills/react.png" title="React" />
          <Skill image="/../public/images/skills/next.png" title="Next.js" />
          <Skill image="/../public/images/skills/github1.png" title="Github" />
        </div>
      </div>
    </div>
  );
}
