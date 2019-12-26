import React, { useState } from "react";

export const EmailForm = () => {
  const [status, setStatus] = useState("");

  const submitForm = ev => {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        setStatus("SUCCESS");
      } else {
        setStatus("ERROR");
      }
    };
    xhr.send(data);
  };
  return (
    <div className="email-wrapper">
      <div className="section-form feature-form">
        <form
          onSubmit={submitForm}
          action="https://formspree.io/xnqjjqeq"
          method="POST"
          className="email-form"
        >
          <p>
            For professional inquiries, please leave your contact information
            and a brief message.
          </p>
          <label className="email-label">Name</label>
          <input type="text" name="name" className="email-input" />
          <label className="email-label">Company</label>
          <input type="text" name="company" className="email-input" />
          <label className="email-label">Email</label>
          <input type="email" name="email" className="email-input" />
          <label className="email-label">Message</label>
          <textarea name="message" className="email-input" /><br />
          {status === "SUCCESS" ? (
            <p>Thanks!  I will get back to you soon.</p>
          ) : (
            <button className="email-submit">Submit</button>
          )}
          {status === "ERROR" && <p>Ooops! There was an error.</p>}
        </form>
      </div>
    </div>
  );
};
