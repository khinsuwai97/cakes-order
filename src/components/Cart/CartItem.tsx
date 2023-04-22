import CartQty from './CartQty';
import { RiDeleteBinLine } from 'react-icons/ri';
import { useAppDispatch } from '../../types/types';
import { deletItem } from '../../store';

type CartItemsProps = {
  id: string;
  image: string;
  title: string;
  price: number;
  quantity: number;
};

const CartItem = ({ image, title, price, quantity, id }: CartItemsProps) => {
  const dispatch = useAppDispatch();

  return (
    <div>
      <div className=" cart-container items-center justify-between my-4 sm:gap-4 gap-0">
        <div className="flex sm:gap-8 gap-4 items-center ">
          <img
            src={image}
            alt={title}
            className="sm:w-[20%] w-[40%] h-[100%] meal"
          />
          <div>
            <div className="flex flex-col gap-1">
              <p className="max-w-[200px] font-poppins text-[16px] font-semibold">
                {title}
              </p>
              <p className="font-poppins text-[16px]">$ {price.toFixed(2)}</p>
            </div>
          </div>
        </div>

        {/* Quantity */}

        <div className="flex sm:flex-row flex-col justify-between items-center gap-4 sm:justify-self-auto justify-self-end">
          <CartQty
            quantity={quantity}
            title={title}
            price={price}
            id={id}
            image={image}
          />

          <button
            className="cursor-pointer"
            onClick={() => dispatch(deletItem(id))}
          >
            <RiDeleteBinLine className="text-[20px] text-secondary3 cursor-pointer" />
          </button>
          <div className="sm:flex hidden ">
            <p className="font-poppins">$ {(price * quantity).toFixed(2)}</p>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default CartItem;
