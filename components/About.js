import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function About() {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center pt-14">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8 py-16">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4">Who I am</h2>
          <p className="py-2 text-gray-600">
            I am not the common type of developer
          </p>
          <p className="py-2 text-gray-600">
            I have spent the last 6 years in a multinational company working in
            Finance and Accounting. First as Junior Clerk and 3 years after as
            People Manager for one of the largest client accounts handled by my
            former employer.
          </p>
          <p className="py-2 text-gray-600">
            I was always fascinated about programming, I interacted a lot with
            an RPA team and was mesmerized to see the results of their work. I
            had to give it a try. I knew I was not going for RPA development, at
            least not for the moment, but for software development. And here I
            am.
          </p>
          <Link href="/#projects">
            <p className="py-2 pt-2 text-gray-600 underline cursor-pointer">
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image
            className="rounded-xl"
            src="https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1364&q=80"
            alt="/"
            width={400}
            height={300}
          />
        </div>
      </div>
    </div>
  );
}
