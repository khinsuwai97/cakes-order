import { ShoppingButton } from '../Button';

const EmptyCart = () => {
  return (
    <div className="h-screen ">
      <div className=" w-full flex flex-col justify-center items-center gap-4 mt-10">
        <h2 className=" text-primary1 font-poppins sm:text-[44px] text-[34px] ss:leading-[40px] text-center leading-[20px] mb-2 sm:mb-0">
          Your Cart is empty{' '}
        </h2>

        <ShoppingButton text="Continue Shopping" />
      </div>
    </div>
  );
};

export default EmptyCart;
