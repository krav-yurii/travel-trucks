import React from 'react';
import { Formik, Form, Field } from 'formik';
import { filtersCheckBoxConfig } from '@/shared/config/filtersCheckBoxConfig.js';
import { setFilters } from '@store/filters/filters-slice.js';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilters } from '@store/filters/filters-selectors.js';
import Button from '@components/ui/Button';
import locationIcon from '@assets/ico-map.svg';

import css from './FiltersPanel.module.css';

const FiltersPanel = () => {
  const icons = import.meta.glob('/assets/filterIcons/*.svg', { eager: true });

  const dispatch = useDispatch();
  const filters = useSelector(selectFilters);

  const initialValues = {
    location: filters.location || '',
    equipment: filters.equipment || [],
    form: filters.form || '',
  };

  const handleSubmit = (values) => {
    dispatch(setFilters(values));
  };

  const isFiltersEqual = (formValues, reduxFilters) =>
    JSON.stringify(formValues) === JSON.stringify(reduxFilters);

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      {({ values }) => (
        <Form>
          <div className={css.location}>
            <label htmlFor="location" className={css.locationText}>
              Location
            </label>
            <div className={css.inputWrapper}>
              <img src={locationIcon} alt={'icon'} className={css.locationIcon} />
              <Field
                type="text"
                id="location"
                name="location"
                placeholder="City"
                className={css.locationForm}
              />
            </div>
          </div>
          <div className={css.filterBlock}>Filters</div>
          <div className={css.equipmentWrapper}>
            <h3 className={css.text}>Vehicle equipment</h3>
            <div className={css.items}>
              {filtersCheckBoxConfig.equipment.map(({ iconPath, text, fieldName, value }, index) => (
                <label htmlFor={fieldName} key={index}>
                  <Field
                    type="checkbox"
                    id={fieldName}
                    name={'equipment'}
                    value={JSON.stringify(value)}
                    className={css.hiddenInput}
                  />
                  <div className={css.item}>
                    <img
                      src={icons[`/assets/filterIcons/${iconPath}`]?.default}
                      alt={text}
                      className={css.icon}
                    />
                    <span>{text}</span>
                  </div>
                </label>
              ))}
            </div>
          </div>
          <div className={css.typeWrapper}>
            <h3 className={css.text}>Vehicle type</h3>
            <div className={css.items}>
              {filtersCheckBoxConfig.vehicle_types.map(({ iconPath, text, fieldName, value }, index) => (
                <label htmlFor={value} key={index}>
                  <Field name={fieldName}>
                    {({ form }) => (
                      <input
                        type="radio"
                        id={value}
                        name={fieldName}
                        value={value}
                        checked={form.values[fieldName] === value}
                        className={css.hiddenInput}
                        onClick={() => {
                          if (form.values[fieldName] === value) {
                            form.setFieldValue(fieldName, '');
                          }
                        }}
                        onChange={() => form.setFieldValue(fieldName, value)}
                      />
                    )}
                  </Field>
                  <div className={css.item}>
                    <img
                      src={icons[`/assets/filterIcons/${iconPath}`]?.default}
                      alt={text}
                      className={css.icon}
                    />
                    <span>{text}</span>
                  </div>
                </label>
              ))}
            </div>
          </div>
          <div style={{ marginTop: '40px' }}>
            <Button isDisabled={isFiltersEqual(values, filters)} label={'Search'} type={'submit'} />
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default FiltersPanel;
