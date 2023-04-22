import { useEffect } from 'react';
import { CheckOutBtn } from '../Button';
import { useAppDispatch, useAppSelector } from '../../types/types';
import { getTotalAmount } from '../../store';

const shippinFees = 5;

const CartTotal = () => {
  const { cart, totalAmount } = useAppSelector((state) => state.cart);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getTotalAmount());
  }, [cart]);

  return (
    <section id="cartTotal" className=" md:pt-22 md:pb-[90px] pb-10 pt-6 ">
      <div className="flex items-center justify-center sm:justify-end">
        <div className="flex flex-col gap-4  md:w-[30%] sm:w-[40%] w-[100%] ">
          <div className="  border-solid border-2 border-gray-300 px-8  ">
            <div className="grid grid-row-2 items-center gap-3 py-4">
              <h5 className="flex justify-between paragraph">
                Subtotal :{' '}
                <span className="font-poppins text-[16px] font-semibold">
                  $ {totalAmount.toFixed(2)}
                </span>
              </h5>
              <p className="flex justify-between font-poppins text-[16px]">
                Shipping Fee :
                <span className="font-lato text-[16px]">
                  $ {shippinFees.toFixed(2)}
                </span>
              </p>
            </div>
            <hr />
            <h5 className="flex justify-between py-4 font-poppins text-[18px] font-bold">
              Order Total :
              <span className="font-lato text-[18px] font-semibold">
                $ {(totalAmount + shippinFees).toFixed(2)}
              </span>
            </h5>
          </div>

          <CheckOutBtn />
        </div>
      </div>
    </section>
  );
};

export default CartTotal;
