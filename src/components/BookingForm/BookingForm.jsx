import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import ReactDatePicker from 'react-datepicker';
import React, { useState } from 'react';
import Button from '@components/ui/Button';
import 'react-datepicker/dist/react-datepicker.css';
import css from './BookingForm.module.css';

const BookingForm = () => {
  const [startDate, setStartDate] = useState(null);

  const handleSubmit = (values, actions) => {
    try {
      toast.success('Your boonikg was successfully submited!', {
        position: 'top-center',
      });

      actions.resetForm();
      setStartDate(null);
    } catch (error) {
      toast.error('Sumthing went wrong. Try again!', {
        position: 'top-center',
      });
    } finally {
      actions.setSubmitting(false);
    }
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email().required('Email is required'),
    bookingDate: Yup.date().required('Booking date is required').nullable(),
    comment: Yup.string(),
  });

  return (
    <div style={{ width: '100%', display: 'flex', flexGrow: 1 }} className={css.bookingForm}>
      <Formik
        initialValues={{ name: '', email: '', bookingDate: null, comment: '' }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ setFieldValue }) => (
          <div className={css.container}>
            <div className={css.titles}>
              <h3 className={css.title}>Book your campervan now</h3>
              <p className={css.text}>Stay connected! We are always ready to help you.</p>
            </div>
            <Form className={css.formWrapper}>
              <div className={css.formItems}>
                <div className={css.formItem}>
                  <label htmlFor="name"></label>
                  <Field type="text" name="name" className={css.field} placeholder="Name*" />
                  <ErrorMessage name="name" component="div" className={css.error} />
                </div>
                <div className={css.formItem}>
                  <label htmlFor="email"></label>
                  <Field type="email" name="email" className={css.field} placeholder="Email*" />
                  <ErrorMessage name="email" component="div" className={css.error} />
                </div>
                <div className={css.formItem}>
                  <label htmlFor="bookingDate"></label>
                  <ReactDatePicker
                    selected={startDate}
                    onChange={(date) => {
                      setStartDate(date);
                      setFieldValue('bookingDate', date);
                    }}
                    minDate={new Date()}
                    placeholderText="Select a date*"
                    dateFormat="dd/mm/yyyy"
                    className={css.field}
                    style={{ width: '100%' }}
                    showMonthYearDropdown
                  />
                  <ErrorMessage name="bookingDate" component="div" className={css.error} />
                </div>
                <div className={css.formItem}>
                  <label htmlFor="comment"></label>
                  <Field
                    as="textarea"
                    name="comment"
                    className={css.fieldTextarea}
                    placeholder="Comment"
                    resize="none"
                  />
                  <ErrorMessage name="comment" component="div" />
                </div>
              </div>
              <div style={{ display: 'flex', justifyContent: 'center', marginTop: '40px' }}>
                <Button label={'Send'} type={'submit'} />
              </div>
            </Form>
          </div>
        )}
      </Formik>
    </div>
  );
};
export default BookingForm;
