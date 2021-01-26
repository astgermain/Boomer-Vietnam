import React, { useState } from "react";
import { useForm } from "react-hook-form";
import TextField from "@material-ui/core/TextField";
import Alert from "@material-ui/lab/Alert";

const LAMBDA_URL =
  "https://qbq13jjtbc.execute-api.us-west-1.amazonaws.com/Production";
const required = "This field is required";
const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const methods = useForm();
  const {
    register,
    handleSubmit,
    setError,
    errors,
    reset,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = async (data) => {
    try {
      await fetch(LAMBDA_URL, {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        body: JSON.stringify(data),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      setSubmitted(true);
      reset();
    } catch (error) {
      setError(
        "submit",
        "submitError",
        `Oops! There seems to be an issue! ${error.message}`
      );
    }
  };

  const showSubmitError = (msg) => <p className="msg-error">{msg}</p>;

  const showThankYou = (
    <div className="msg-confirm">
      <button type="button" onClick={() => setSubmitted(false)}>
        Send another message?
      </button>
    </div>
  );

  const showForm = (
    <form onSubmit={handleSubmit(onSubmit)} method="post">
      <label htmlFor="name">
        <h5>Name</h5>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Your name"
          ref={register({ required })}
          disabled={isSubmitting}
        />
      </label>

      <label htmlFor="email">
        <h5>Email</h5>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="your@email.address"
          ref={register({ required })}
          disabled={isSubmitting}
        />
      </label>

      <label htmlFor="question">
        <h5>Message</h5>
        <textarea
          ref={register({ required })}
          name="question"
          id="question"
          rows="3"
          placeholder="Your message"
          disabled={isSubmitting}
        />
      </label>

      <div className="submit-wrapper">
        <button type="submit" disabled={isSubmitting}>
          Send
        </button>
      </div>
    </form>
  );

  return (
    <div className="contact-page">
      <div className="text-side">
        <h2>Contact me</h2>
        {errors.name && (
          <Alert onClose={() => {}} variant="outlined" severity="warning">
            Name is required!
          </Alert>
        )}
        {errors.email && (
          <Alert onClose={() => {}} variant="outlined" severity="warning">
            E-Mail is required! 
          </Alert>
        )}
        {errors.question && (
          <Alert onClose={() => {}} variant="outlined" severity="warning">
            Please include a message
          </Alert>
        )}
        {errors && errors.submit && (
          <Alert onClose={() => {}} variant="outlined" severity="error">
            Your message wasn't sent, there seems to be an issue!
          </Alert>
        )}
      </div>
      <div className="form-side">{submitted ? showThankYou : showForm}</div>
    </div>
  );
};

export default Contact;
