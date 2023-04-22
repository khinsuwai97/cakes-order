import { useEffect } from 'react';
import { HiShoppingCart } from 'react-icons/hi';
import { NavLink } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../types/types';
import { getTotalQuanity } from '../store';

const Navbar = () => {
  const dispatch = useAppDispatch();
  const { totalQuantity } = useAppSelector((state) => state.cart);

  const { cart } = useAppSelector((state) => state.cart);

  useEffect(() => {
    dispatch(getTotalQuanity());
  }, [cart]);
  return (
    <header className="w-full py-0 px-[48px] bg-secondary ">
      <nav className="md:h-[90px] h-[80px] flex justify-between items-center">
        <div>
          <NavLink to="/" className="companyName">
            Delicito
          </NavLink>
        </div>
        <div>
          <NavLink to="/cart">
            <button className="flex gap-2 cursor-pointer transition ease-in hover:scale-[1.1]  bg-secondaryShade px-[25px] sm:px-[40px] py-3 rounded-[30px]">
              <span className="text-[25px] text-primary2 ">
                <HiShoppingCart />
              </span>
              <span className="text-normal">Cart</span>
              <span
                className=" bg-secondary w-[35px] h-[25px] rounded-[30px] 
              text-center  font-semibold  text-normal
             "
              >
                {totalQuantity}
              </span>
            </button>
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
