import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import s from "./ContactForm.module.css";

const ContactForm = ({ addNewContact }) => {
  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, "Name must be at least 3 characters")
      .max(50, "Name cannot exceed 50 characters")
      .required("Name is required"),
    number: Yup.string()
      .min(3, "Number must be at least 3 characters")
      .max(15, "Number cannot exceed 15 characters")
      .required("Number is required"),
  });

  return (
    <Formik
      // початкові значення
      initialValues={{
        name: "",
        number: "",
      }}
      validationSchema={validationSchema}
      // сабмітить дані у values і передаєм ії у addNewContact
      onSubmit={(values, { resetForm }) => {
        addNewContact(values), resetForm();
      }}
    >
      <Form className={s.form}>
        <label className={s.labelForm}>
          <span>Name:</span>
          <Field type="text" name="name" />
          <ErrorMessage name="name" component="div" style={{ color: "red" }} />
        </label>
        <label className={s.labelForm}>
          <span>Number:</span>
          <Field type="text" name="number" />
          <ErrorMessage
            name="number"
            component="div"
            style={{ color: "red" }}
          />
        </label>

        <button className={s.btnForm} type="submit">
          Add Contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
