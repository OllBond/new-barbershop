import { Formik, Form, Field, ErrorMessage } from "formik";
import { object, string } from "yup";

import Button from "../../shared/components/Button/Button";

import css from "./online-register-form.module.css";
import styled from "styled-components";

const ErrorText = styled.p`
  color: red;
`;

const FormError = ({ name }) => {
  return (
    <ErrorMessage
      name={name}
      render={(message) => <ErrorText>{message}</ErrorText>}
    />
  );
};

const schema = object({
  name: string().required("введіть ім'я"),
  phone: string().required("введіть номер телефона +38(XXX)XXX-XX-XX"),
  message: string().min(5),
});
const initialValues = {
  name: "",
  phone: "",
  message: "",
};
const OnlineRegisterForm = () => {
  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <Form autoComplete="off">
        <h2 className={css.titleForm}>Онлайн-запис</h2>
        <div className={css.fieldWrapper}>
          <Field
            className={css.input}
            type="text"
            name="name"
            placeholder="Ім'я"
          />
          <FormError name="name" />
          <Field
            className={css.input}
            type="tel"
            name="phone"
            placeholder="Teлефон"
          />
          <FormError name="phone" />
          <Field
            className={css.input}
            name="message"
            placeholder="Повідомлення"
            as="textarea"
            rows="4"
          ></Field>
          <ErrorMessage name="message" component="div" />
          <Button text="ВІДПРАВИТИ" type="submit" />
        </div>
      </Form>
    </Formik>
  );
};
export default OnlineRegisterForm;
