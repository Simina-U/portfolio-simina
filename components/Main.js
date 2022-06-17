import ContactIcons from "./ContactIcons";

export default function Main() {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-600 mt-28">
            We can build awesomeness together!
          </p>
          <h1 className="py-4 text-gray-700">
            Hi, I am <span className="text-[#5651e5]">Simina</span>
          </h1>
          <h2 className="py-2 text-gray-700 text-5xl">
            A Front-End Web Developer
          </h2>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            I am a Jr. Front-End Developer specializing in building exceptional
            digital experiences. Currently, I am focused on practicing
            responsive front-end web applications while learning back-end
            technologies.
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <ContactIcons />
          </div>
        </div>
      </div>
    </div>
  );
}
