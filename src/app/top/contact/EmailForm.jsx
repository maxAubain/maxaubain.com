import React, { useState } from 'react'
import './style/email-form'

export const EmailForm = () => {
  const [status, setStatus] = useState('')

  const submitForm = ev => {
    ev.preventDefault()
    const form = ev.target
    const data = new FormData(form)
    const xhr = new XMLHttpRequest()
    xhr.open(form.method, form.action)
    xhr.setRequestHeader('Accept', 'application/json')
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return
      if (xhr.status === 200) {
        form.reset()
        setStatus('SUCCESS')
      } else {
        setStatus('ERROR')
      }
    }
    xhr.send(data)
  }
  return (
    <div className="email container section-form feature-form">
      <form
        onSubmit={submitForm}
        action="https://formspree.io/xnqjjqeq"
        method="POST"
        className="email form-container"
      >
        <p>
          For professional inquiries, please leave your contact information and
          a brief message.
        </p>
        <p>Or, email me at maxaubain [at] protonmail [dot] com.</p>
        <label className="email form-label">Name</label>
        <input type="text" name="name" className="email form-input" required />
        <label className="email form-label">Company</label>
        <input
          type="text"
          name="company"
          className="email form-input"
          required
        />
        <label className="email form-label">Email</label>
        <input
          type="email"
          name="email"
          className="email form-input"
          required
        />
        <label className="email form-label">Message</label>
        <textarea name="message" className="email form-input" required />
        <br />
        {status === 'SUCCESS' ? (
          <p>Thanks! I will get back to you soon.</p>
        ) : (
          <button className="email submit-button">Submit</button>
        )}
        {status === 'ERROR' && (
          <p>
            Ooops! There was an error. Please make sure each section is
            accurately completed, and re-submit.
          </p>
        )}
      </form>
    </div>
  )
}
