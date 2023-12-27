import emailjs from "@emailjs/browser";
import React, { useState, useEffect } from "react";
// import SweetAlert from "sweetalert-react";

const Newsletter = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  // const [show, setShow] = useState(false);

  useEffect(() => emailjs.init("wihgcjmTpFqvlLyiQ"), []);
  const validateEmail = (e: any) => {
    setEmail(e.target.value);
    if (email === "" || !email.includes("@") || email.length < 10) {
      setError(true);
    } else setError(false);
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const serviceId = "service_y9h5hak";
    const templateId = "template_4pm6iag";
    try {
      setLoading(true);
      await emailjs.send(serviceId, templateId, {
        recipient: email,
      });
      setError(false);
      setEmail("");
      // setShow(true);
      alert("email successfully sent, check inbox");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="newsletter">
      <div className="newsletter-container">
        <div className="image-content">
          <div>
            <img
              src="/images/News.jpg"
              alt="Newsletter"
              className="newsletter-img"
            />
          </div>
          <div className="newsletter-content">
            <h3 className="heading">GET OUR WEEKLY</h3>
            <h1 className="newsletter-heading">NEWSLETTER</h1>
            <p className="newsletter-para">
              Get weekly updates on the newest design stories, case studies and
              tips right in your mailbox.
              <br />
              <b>Subscribe now!</b>
            </p>
          </div>
        </div>
        <div>
          <form onSubmit={handleSubmit}>
            <div className="email-input">
              <input
                value={email}
                type="text"
                placeholder="Email Address"
                className="email-box"
                onChange={validateEmail}
              />
              <input
                type="submit"
                disabled={loading}
                className="subscribe-btn"
                value="SUBSCRIBE"
              />
            </div>
            {/* <SweetAlert
              show={show}
              text="SweetAlert in React"
              onConfirm={() => setShow(false)}
            /> */}
            {error ? <p className="email-error">Enter valid email!</p> : ""}
          </form>
          <h4 className="newsletter-footer">
            Your email is safe with us, We don't spam
          </h4>
        </div>
      </div>
    </div>
  );
};
export default Newsletter;
