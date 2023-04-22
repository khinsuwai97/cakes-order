import { FormEvent, useState } from 'react';
import Modal from '../Modal';
import { useAppDispatch, useAppSelector } from '../../types/types';
import {
  getName,
  getCity,
  getPostalCode,
  getStreet,
  closeForm,
} from '../../store';

const isEmpty = (value: string) => value.trim() === '';
const isFiveChar = (value: number) => value.toString().length === 5;

type FormProps = {
  submitCartData: () => void;
};

const CheckoutForm = ({ submitCartData }: FormProps) => {
  const { name, street, postalCode, city } = useAppSelector(
    (state) => state.form
  );
  const dispatch = useAppDispatch();

  const [validForm, setValidForm] = useState({
    name: true,
    street: true,
    postalCode: true,
    city: true,
  });

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();

    const enterNameisValid = !isEmpty(name);
    const enterStreetisValid = !isEmpty(street);
    const enterCityisValid = !isEmpty(city);
    const enterPostalCodeisValid = isFiveChar(postalCode);

    const formisValid =
      enterNameisValid &&
      enterStreetisValid &&
      enterCityisValid &&
      enterPostalCodeisValid;

    setValidForm({
      name: enterNameisValid,
      street: enterStreetisValid,
      postalCode: enterPostalCodeisValid,
      city: enterCityisValid,
    });

    if (!formisValid) {
      return;
    }

    submitCartData();
  };

  const formClass = (value: boolean) => (value ? '' : 'invalid');

  return (
    <Modal>
      <h1 className="font-poppins font-semibold text-secondary">
        Check Out Form
      </h1>
      <form className="my-[16px] mx-0 " onSubmit={handleFormSubmit}>
        <div className={`mb-[10px]  ${formClass(validForm.name)}`}>
          <label htmlFor="name" className={`form-label`}>
            Your Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            className="checkoutInput"
            onChange={(e) => dispatch(getName(e.target.value))}
          />
          {!validForm.name && (
            <p className="invalid-form-text">Please enter a valid name!</p>
          )}
        </div>
        <div className={`mb-[10px]  ${formClass(validForm.street)}`}>
          <label htmlFor="street" className="form-label">
            Street
          </label>
          <input
            type="text"
            id="street"
            value={street}
            className="checkoutInput"
            onChange={(e) => dispatch(getStreet(e.target.value))}
          />
          {!validForm.street && (
            <p className="invalid-form-text">Please enter a valid street!</p>
          )}
        </div>
        <div className={`mb-[10px]  ${formClass(validForm.postalCode)}`}>
          <label htmlFor="postal" className="form-label">
            Postal Code
          </label>
          <input
            type="number"
            inputMode="numeric"
            id="postal"
            value={postalCode || ''}
            className="checkoutInput"
            onChange={(e) => dispatch(getPostalCode(+e.target.value))}
          />
          {!validForm.postalCode && (
            <p className="invalid-form-text">
              Please enter a valid postal code!
            </p>
          )}
        </div>
        <div className={`mb-[10px]  ${formClass(validForm.city)}`}>
          <label htmlFor="city" className="form-label">
            City
          </label>
          <input
            type="text"
            id="city"
            value={city}
            className="checkoutInput"
            onChange={(e) => dispatch(getCity(e.target.value))}
          />
          {!validForm.city && (
            <p className="invalid-form-text">Please enter a valid city!</p>
          )}
        </div>
        <div className="flex justify-end gap-2 sm:mt-0 mt-4">
          <button
            type="button"
            className="form-actions-cancel hover:bg-secondaryShade hover:text-white"
            onClick={() => dispatch(closeForm())}
          >
            Cancel
          </button>
          <button type="submit" className="form-actions">
            Confirm
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default CheckoutForm;
