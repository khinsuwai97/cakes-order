import CartTotal from './CartTotal';
import CartHeader from './CartHeader';
import CartItem from './CartItem';
import CartItemHeader from './CartItemHeader';
import EmptyCart from './EmptyCart';
import CheckoutForm from './CheckoutForm';
import { useAppDispatch, useAppSelector } from '../../types/types';
import Modal from '../Modal';
import {
  clearCart,
  useOrderCartItemsMutation,
  closeForm,
  clearFormData,
} from '../../store';

import { ShoppingButton } from '../Button';

type Form = {
  name: string;
  street: string;
  postalCode: number;
  city: string;
};

const Cart = () => {
  const dispatch = useAppDispatch();
  const { showForm } = useAppSelector((state) => state.form);
  const { cart } = useAppSelector((state) => state.cart);
  const userData: Form = useAppSelector((state) => state.form);
  const [addCartData, results] = useOrderCartItemsMutation();

  const cartData = {
    orderItems: cart,
    userData,
  };

  const submitCartData = () => {
    addCartData(cartData);
    dispatch(closeForm());
    dispatch(clearCart());
    dispatch(clearFormData());
  };

  if (results.isLoading) {
    return (
      <Modal>
        <h1 className="text-center font-poppins text-base text-primary1">
          Sendinging your order!
        </h1>
      </Modal>
    );
  }

  if (results.isSuccess) {
    return (
      <Modal>
        <h1 className="text-center font-poppins text-base text-primary1">
          Successfully sent your order! Thanks for ordering!😃
        </h1>
        <div className="flex justify-end mt-4">
          <ShoppingButton text="Close" />
        </div>
      </Modal>
    );
  }

  return (
    <section id="cart" className="md:pt-22 md:pb-[90px] pb-3 pt-6  w-screen">
      <div className="max-w-[1280px] my-0 mx-auto py-0 sm:px-[32px] px-[24px]">
        {cart?.length === 0 && <EmptyCart />}

        {cart.length >= 1 && (
          <div>
            <CartHeader />
            <div>
              <CartItemHeader />
              <hr className="mb-6" />
              {/* item */}
              {cart?.map((meal) => {
                return <CartItem {...meal} key={meal.id} />;
              })}
            </div>
            <div className="flex justify-end items-center mt-6">
              <button
                className={`px-3 sm:py-1 py-[4px] font-poppins bg-secondary text-[16px] text-white outline-none font-normal cursor-pointer whitespace-nowrap btn-mobile`}
                type="button"
                onClick={() => dispatch(clearCart())}
              >
                Clear Cart
              </button>
            </div>
            <CartTotal />
            {showForm && <CheckoutForm submitCartData={submitCartData} />}
          </div>
        )}
      </div>
    </section>
  );
};

export default Cart;
