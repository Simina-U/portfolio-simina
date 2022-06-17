import IconButton from "./IconButton";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";

export default function ContactIcons() {
  return (
    <>
      <IconButton url="https://www.linkedin.com/in/simina-urzica/">
        <FaLinkedinIn />
      </IconButton>
      <IconButton url="https://github.com/Simina-U">
        <FaGithub />
      </IconButton>
      <IconButton url="mailto:siminaurzica568@gmail.com">
        <AiOutlineMail />
      </IconButton>
      <IconButton url="/#contact">
        <BsFillPersonLinesFill />
      </IconButton>
    </>
  );
}
