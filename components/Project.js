import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Project({ image, title, mainTechUsed, projectUrl }) {
  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
      <Image
        className="rounded-xl group-hover:opacity-10"
        src={image}
        alt="project image"
        width={300}
        height={300}
      />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%]  translate-x-[-50%] translate-y-[-50%]">
        <h3 className="text-2xl text-white tracking-wider text-center">
          {title}
        </h3>
        <p className="text-center pb-4 pt-2 text-white">{mainTechUsed}</p>
        <Link href={projectUrl}>
          <p className="text-center py-4 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
            More Info
          </p>
        </Link>
      </div>
    </div>
  );
}
