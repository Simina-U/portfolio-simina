import React from "react";
import Skill from "../components/Skill";

export default function Skills() {
  return (
    <div id="skills" className="w-full lg:h-screen p-2 py-6 pt-16  ">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full  ">
        <p className="text-xl tracking-widest uppercase text-[#5651e5] ">
          Skills
        </p>
        <h2 className="py-4">What I can do?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Skill src="/images/skills/html.png" title="HTML" />
          <Skill src="/images/skills/css.png" title="CSS" />
          <Skill src="/images/skills/tailwind.png" title="Tailwind" />
          <Skill src="/images/skills/Chakra.png" title="Chakra UI" />
          <Skill src="/images/skills/javascript.png" title="JavaScript" />
          <Skill src="/images/skills/firebase.png" title="Firebase" />
          <Skill src="/images/skills/mongo.png" title="MongoDB" />

          <Skill src="/images/skills/supabase.png" title="Supabase" />
          <Skill src="/images/skills/node.png" title="Node" />
          <Skill src="/images/skills/react.png" title="React" />
          <Skill src="/images/skills/next.png" title="Next.js" />
          <Skill src="/images/skills/github1.png" title="Github" />
        </div>
      </div>
    </div>
  );
}
