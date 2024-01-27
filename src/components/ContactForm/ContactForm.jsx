import { useId } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

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
        <Form>
          <div>
            <label htmlFor="name">Name</label>
            <Field type="text" name="name" id={nameField} />

            <label htmlFor="number">Number</label>
            <Field type="text" name="number" id={numberField} />

            <button type="submit">Add contact</button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};
