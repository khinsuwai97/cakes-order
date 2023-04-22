import { Link } from 'react-router-dom';
import { AiFillPlusCircle } from 'react-icons/ai';
import { addItemToCart } from '../store';
import { useAppDispatch } from '../types/types';

export type MenuItemsProps = {
  id: string;
  image: string;
  title: string;
  price: number;
  quantity: number;
};

const MenuItems = ({ id, image, title, price, quantity }: MenuItemsProps) => {
  const dispatch = useAppDispatch();

  const cartItems = {
    id,
    image,
    title,
    price,
    quantity,
  };

  const addToCart = () => {
    dispatch(addItemToCart(cartItems));
  };

  return (
    <div className=" meal hover:-translate-y-4 ease-in duration-300 ">
      <img src={image} className="w-full  object-cover " />
      <div className="px-4 pt-2 pb-3">
        <h3 className="cake-name py-2 leading-tight">{title}</h3>
        <div className="flex justify-between items-center">
          <p className="cake-price">$ {price}</p>
          <Link to="/cart">
            <button
              className="outline-none cursor-pointer z-10"
              onClick={() => addToCart()}
            >
              <AiFillPlusCircle className="text-[30px] text-secondary" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default MenuItems;
