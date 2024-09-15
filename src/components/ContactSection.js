import React, { useState } from "react";
import emailjs from "emailjs-com";

const ContactSection = () => {
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState(""); // For showing success or error messages

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    // Send email with the user's name and form data
    emailjs
      .send(
        "service_y24i12r", // Your EmailJS service ID
        "template_ncrsu9s", // Replace with your EmailJS template ID
        {
          from_name: formData.name, // Use the name input as from_name
          from_email: formData.email, // Use the email input as from_email
          phone: formData.number,
          subject: formData.subject,
          message: formData.message,
        },
        "2XQZmqzkxVRLpPaBd" // Your EmailJS user ID
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setStatus("Message sent successfully!");
          setSuccess(true);
          setTimeout(() => {
            setStatus("");
          }, 5000);
        },
        (err) => {
          console.log("FAILED...", err);
          setStatus("Failed to send message. Please try again.");
          setSuccess(false);
          setTimeout(() => {
            setStatus("");
          }, 5000);
        }
      );

    // Clear form fields
    setFormData({
      name: "",
      email: "",
      number: "",
      subject: "",
      message: "",
    });
  };

  return (
    <section id="contact" className="bg-white px-8 py-12">
      <div className=" mb-8">
        <h2 className="text-lg md:text-lg font-semibold tracking-widest ">
          LOCATION
        </h2>
        <h1 className="text-2xl md:text-2xl text-gray-500 font-bold mt-2">
          CONTACT ME
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        {/* Contact Information Section */}
        <div className="flex flex-col items-start md:items-start space-y-4">
          <h2 className="text-xl md:text-xl tracking-widest font-bold mb-4">
            INFORMATION
          </h2>
          <p className="text-lg font-semibold text-gray-500">
            <span className="font-semibold text-black">Address:</span> Kim
            Giang, Thanh Xuan District, Hanoi, Vietnam
          </p>
          <p className="text-lg font-semibold text-gray-500">
            <span className="font-semibold text-black">Phone:</span>{" "}
            (+84)393217202
          </p>
          <p className="text-lg font-semibold text-gray-500">
            <span className="font-semibold text-black">Email:</span>{" "}
            vuvantrung002@gmail.com
          </p>
          <p className="text-lg font-semibold text-gray-500">
            <span className="font-semibold text-black">Facebook:</span>{" "}
            https://www.facebook.com/trungvu.172002/
          </p>
        </div>

        {/* Contact Form Section */}
        <div className="flex flex-col items-start md:items-center">
          <h2 className="text-xl md:text-xl tracking-widest font-bold mb-6">
            GET IN TOUCH
          </h2>
          <form className="w-full max-w-2xl space-y-6" onSubmit={sendEmail}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name *"
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email *"
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <input
                type="text"
                name="number"
                value={formData.number}
                onChange={handleChange}
                placeholder="Your Number *"
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject *"
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message *"
              rows="5"
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            ></textarea>
            <div className="flex justify-start">
              <button
                type="submit"
                className="px-8 py-4 bg-primary rounded-full text-white shadow-black shadow-sm transition-colors duration-300 hover:bg-white hover:text-primary font-semibold hover:shadow-primary"
              >
                Send Message
              </button>
            </div>
          </form>
          {status && (
            <p
              className={`${
                success ? "text-green-500" : "text-red-500"
              } mt-4 text-lg text-green-500 font-bold`}
            >
              {status}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
