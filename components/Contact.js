import { useState, useRef } from "react";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import Link from "next/link";
import Image from "next/image";
import emailjs from "@emailjs/browser";
import SuccessMessage from "./SuccessMessage";
import ContactIcons from "./ContactIcons";

export default function Contact() {
  const form = useRef();
  const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_9dnn6j8",
        "template_57kxoai",
        form.current,
        "eY_M6eQHCNI_R-IVh"
      )
      .then(
        (result) => {
          setSuccess(true);
          e.target.reset();
        },
        (error) => {
          alert("FAILED...!", error);
          setSuccess(false);
        }
      );
  };
  return (
    <div id="contact" className="w-full lg:h-screen pt-14">
      <div className="max-w-[1240px] m-auto px-2 py-10 w-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Contact
        </p>
        <h2 className="py-4">Get In Touch</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          {/* left */}
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
            <div className="lg:p-4 h-full">
              <div>
                <Image
                  className="rounded-xl hover:scale-105 ease-in duration-300"
                  src="https://images.unsplash.com/photo-1516387938699-a93567ec168e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80"
                  alt=""
                  width={400}
                  height={300}
                />
              </div>
              <div>
                <h2 className="py-2">Simina-Elena Urzica</h2>
                <p>Jr. Front-End Developer </p>
                <p className="py-4">
                  I am available for onsite/remote internship or full-time job.
                </p>
              </div>
              <div>
                <p className="uppercase pt-8">Connect with me</p>
                <div className="flex justify-between md:justify-start md:gap-6 lg:justify-between py-4 items-center">
                  <ContactIcons />
                </div>
              </div>
            </div>
          </div>
          {/* right */}
          <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
            <div className="p-4">
              {success ? (
                <SuccessMessage />
              ) : (
                <form ref={form} onSubmit={sendEmail}>
                  <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                    <div className="flex flex-col">
                      <label htmlFor="name" className="uppercase text-sm py-2">
                        Name
                      </label>
                      <input
                        className="border-2 rounded-lg p-3 flex border-gray-300"
                        type="text"
                        name="user_name"
                        required
                      />
                    </div>
                    <div className="flex flex-col">
                      <label htmlFor="phone" className="uppercase text-sm py-2">
                        Phone Number
                      </label>
                      <input
                        className="border-2 rounded-lg p-3 flex border-gray-300"
                        type="text"
                        name="user_phone"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col py-2">
                    <label htmlFor="email" className="uppercase text-sm py-2">
                      Email
                    </label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      type="email"
                      name="user_email"
                      required
                    />
                  </div>
                  <div className="flex flex-col py-2">
                    <label htmlFor="subject" className="uppercase text-sm py-2">
                      Subject
                    </label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      type="text"
                      name="subject"
                    />
                  </div>
                  <div className="flex flex-col py-2">
                    <label htmlFor="message" className="uppercase text-sm py-2">
                      Message
                    </label>
                    <textarea
                      className="border-2 rounded-lg p-3 border-gray-300"
                      rows="10"
                      name="message"
                      required
                    ></textarea>
                  </div>
                  <button className="w-full p-4 text-gray-100 mt-4">
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
        {/* scroll to top */}
        <div className="flex justify-center py-12">
          <Link href="/">
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <HiOutlineChevronDoubleUp
                className="m-auto text-[#5651e5]"
                size={25}
              />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
