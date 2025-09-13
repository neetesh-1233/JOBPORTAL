import React, { useState } from "react";
import nitesh from "../assets/neetesh.jpg";

const Contact = () => {
  const [messageData, setMessagedata] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMessagedata((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(messageData);
    setMessagedata({
      fullName: "",
      email: "",
      subject: "",
      message: ""
    });
  };
  return (
    <>
      <div className=" border min-h-screen flex items-center justify-center ">
        <div className="min-w-xl  flex rounded shadow bg-white p-10  gap-15 bg-gradient-to-l from-yellow-300 to-violet-200  ">
          <div className="w-2/4">
            <img src={nitesh} alt="img" className="h-100 rounded-4xl" />
          </div>

          <form className="w-2/4 " onSubmit={handleSubmit}>
            <div className="items-center space-y-8 ">
              <h1 className="text-2xl text-center text-green-700 hover:cursor-cell">Get in Touch with us</h1>
              <div>
                <div>
                  <label htmlFor="fullName" className="w-1/4 inline-block">
                    Name:
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    id="fullName"
                    value={messageData.fullName}
                    onChange={handleChange}
                    placeholder="fullName"
                    className=" w-3/4 border p-2 rounded focus:ring-2  focus:ring-blue-500 focus:outline-none"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="w-1/4 inline-block">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={messageData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className=" w-3/4 border p-2 rounded focus:ring-2  focus:ring-blue-500 focus:outline-none"
                />
              </div>
              <div>
                <label htmlFor="subject" className="w-1/4 inline-block">
                  subject
                </label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  value={messageData.subject}
                  onChange={handleChange}
                  placeholder="subject"
                  className=" w-3/4 border p-2 rounded focus:ring-2  focus:ring-blue-500 focus:outline-none"
                />
              </div>
              <div className="flex  items-center">
                <label htmlFor="message" className="w-1/4 inline-block ">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  value={messageData.message}
                  onChange={handleChange}
                  placeholder="write your message"
                  className=" w-3/4 border p-3 rounded focus:ring-2  focus:ring-blue-500 focus:outline-none"
                ></textarea>
              </div>
              <button
                className="w-full border rounded-lg shadow p-2  hover:bg-blue-600 text-violet-600 hover:text-white"
                type="submit"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
