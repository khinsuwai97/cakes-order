import { BiPlus, BiMinus } from 'react-icons/bi';
import { addItemToCart, removeItemFromCart } from '../../store';
import { useAppDispatch } from '../../types/types';

type CartQtyProps = {
  id: string;
  title: string;
  image: string;
  price: number;
  quantity: number;
};

const CartQty = ({ quantity, title, price, id, image }: CartQtyProps) => {
  const dispatch = useAppDispatch();

  const addToCartItems = {
    quantity,
    title,
    price,
    id,
    image,
  };

  return (
    <div className="flex flex-row items-center gap-4 my-2">
      <div className="flex flex-row items-center sm:gap-4 gap-2 border-solid border-2 border-primary rounded-[10px] sm:px-2 px-1 ms:py-1 py-[2px] ">
        <button
          className="cursor-pointer"
          onClick={() => dispatch(removeItemFromCart(id))}
        >
          <BiMinus />
        </button>
        <span className="text-[16px] font-poppins">{quantity}</span>

        <button
          className="cursor-pointer"
          onClick={() => dispatch(addItemToCart(addToCartItems))}
        >
          <BiPlus />
        </button>
      </div>
    </div>
  );
};

export default CartQty;
