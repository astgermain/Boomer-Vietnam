import React, { useState } from "react";
import { useForm } from "react-hook-form";
import TextField from "@material-ui/core/TextField";
import Alert from "@material-ui/lab/Alert";
import Button from '@material-ui/core/Button';

const LAMBDA_URL =
  "https://qbq13jjtbc.execute-api.us-west-1.amazonaws.com/Production";
const required = "This field is required";
const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [value, setValue] = React.useState("Name");
  const handleChange = (event) => {
    setValue(event.target.value);
  };
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
      <Alert onClose={() => {}} variant="outlined" severity="success">
        Your message was sent!
      </Alert>
      <Button color="primary" onClick={() => setSubmitted(false)}>
        Send another message?
      </Button>
    </div>
  );

  const showForm = (
    <form onSubmit={handleSubmit(onSubmit)} method="post">
      <label htmlFor="name">
        <TextField
          inputRef={register({ required })}
          id="name"
          type="text"
          name="name"
          label="Name"
          rowsMax={1}
          variant="outlined"
          disabled={isSubmitting}
        />

        {/*
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Name"
          ref={register({ required })}
          disabled={isSubmitting}
        />
        */}
      </label>

      <label htmlFor="email">
        <TextField
          inputRef={register({ required })}
          type="email"
          name="email"
          id="email"
          label="E-Mail Address"
          rowsMax={1}
          variant="outlined"
          disabled={isSubmitting}
        />
      </label>

      <label htmlFor="question">
        <TextField
          inputRef={register({ required })}
          type="text"
          name="question"
          id="question"
          label="Your Message"
          multiline
          rowsMax={8}
          variant="outlined"
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
