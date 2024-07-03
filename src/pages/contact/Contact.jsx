import React, { useState } from "react";
import { MdContactMail } from "react-icons/md";
import Header from "../../components/pageHeader/Header";
import { Animate } from "react-simple-animate";
import "./Contact.scss";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    fetch("https://formspree.io/f/xovaqwkg", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        message: formData.description,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.ok) {
          alert("Email sent successfully!");
        } else {
          alert("Failed to send email.");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <section id="contact" className="contact">
      <Header headerText="My Contact" icon={<MdContactMail size={40} />} />
      <div className="contact__content">
        <Animate
          play
          duration={1}
          delay={0}
          start={{
            transform: "translateX(-200px)",
          }}
          end={{
            transform: "translateX(0px)",
          }}
        >
          <h3 className="contact__content__header-text">Let's Talk</h3>
        </Animate>
        <Animate
          play
          duration={1}
          delay={0}
          start={{
            transform: "translateX(200px)",
          }}
          end={{
            transform: "translateX(0px)",
          }}
        >
          <form onSubmit={handleSubmit} className="contact__content__form">
            <div className="contact__content__form__controlswrapper">
              <div>
                <input
                  required
                  name="name"
                  className="inputName"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                />
                <label htmlFor="name" className="nameLabel">
                  Name
                </label>
              </div>
              <div>
                <input
                  required
                  name="email"
                  className="inputEmail"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                />
                <label htmlFor="email" className="emailLabel">
                  Email
                </label>
              </div>
              <div>
                <textarea
                  required
                  name="description"
                  className="inputDescription"
                  rows="5"
                  value={formData.description}
                  onChange={handleChange}
                />
                <label htmlFor="description" className="descriptionLabel">
                  Message
                </label>
              </div>
            </div>
            <button type="submit">Send Message</button>
          </form>
        </Animate>
      </div>
    </section>
  );
};

export default Contact;
