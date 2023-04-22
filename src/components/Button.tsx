import { Link } from 'react-router-dom';
import { useAppDispatch } from '../types/types';
import { openForm } from '../store';
export const Button = () => {
  return (
    <a href="#menu">
      <button
        className={`px-[20px] py-[8px] font-poppins bg-primary2 text-[16px] text-secondaryShade outline-none font-normal cursor-pointer rounded-[25px] whitespace-nowrap`}
        type="button"
      >
        Order Now
      </button>
    </a>
  );
};

type Props = {
  text: string;
};

export const ShoppingButton = ({ text }: Props) => {
  return (
    <Link to="/">
      <button
        className={`px-[20px] py-[8px] font-poppins bg-secondary text-[16px] text-white outline-none font-normal cursor-pointer rounded-[25px] whitespace-nowrap`}
        type="button"
      >
        {text}
      </button>
    </Link>
  );
};

export const CheckOutBtn = () => {
  const dispatch = useAppDispatch();
  return (
    <button
      className="placeholder:w-[100%] px-[47px] py-[8px] font-poppins bg-secondary text-[16px] text-white outline-none font-normal cursor-pointer whitespace-nowrap"
      type="button"
      onClick={() => dispatch(openForm())}
    >
      Check Out
    </button>
  );
};
