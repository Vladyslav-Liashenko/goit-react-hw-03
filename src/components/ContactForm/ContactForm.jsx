import { useId } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import styled from './ContactForm.module.css';

export const ContactForm = ({ addContact }) => {
  const nameField = useId();
  const numberField = useId();
  const contactField = useId();

  const contactSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, 'Name must be at least 2 sumb long')
      .required('This is a required field'),
    number: Yup.string()
      .min(5, 'Number must be at least 5 sumb long')
      .required('This is a required field'),
  });

  return (
    <div>
      <Formik
        initialValues={{
          name: '',
          number: '',
        }}
        validationSchema={contactSchema}
        onSubmit={(values, actions) => {
          addContact({ id: contactField, ...values });
          actions.resetForm();
        }}
      >
        <Form autoComplete='off'>
          <div className={styled.form}>
            <label htmlFor="name" className={styled.label}>Name</label>
            <Field type="text" name="name" id={nameField} />
            <ErrorMessage name="name" component="span"/>

            <label htmlFor="number" className={styled.label}>Number</label>
            <Field type="text" name="number" id={numberField} />
            <ErrorMessage name="number" component="span"/>

            <button type="submit" className={styled.btnAdd}>Add contact</button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};
