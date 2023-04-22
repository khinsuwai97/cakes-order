import MenuItems from './MenuItems';
import PaginateButtons from './PaginateButtons';
import Loader from './Loader';
import Error from './Error';
import { paginate } from '../utils/paginate';
import { useAppDispatch, useAppSelector } from '../types/types';
import {
  useFetchProductsQuery,
  handleNextPage,
  hanldePrevPage,
} from '../store';

const Menu = () => {
  const dispatch = useAppDispatch();
  const { data, isError, isLoading } = useFetchProductsQuery();

  const { page } = useAppSelector((state) => state.paginate);

  if (isLoading) {
    return <Loader />;
  }

  if (isError || !data) {
    return <Error text="Error with data fetching" />;
  }

  const updatedData = data?.map((meal) => {
    return {
      id: meal.id,
      image: meal.image,
      title: meal.title,
      price: Number((Math.random() * 100).toFixed(2)),
      quantity: 1,
    };
  });

  const cakesData = paginate(updatedData);

  return (
    <section id="menu" className="md:py-[90px] py-14">
      <div className="max-w-[1280px] my-0 mx-auto py-0 sm:px-[32px] px-[24px]">
        <div className="mb-10">
          <h1 className="uppercase text-base tracking-widest text-secondary1 font-bold font-poppins text-center sm:mb-0 mb-2  ">
            Our Menu
          </h1>
          <h2 className="font-poppins text-primary1  font-bold sm:text-[44px] text-[34px] ss:leading-[80px] text-center leading-[40px] mb-2 sm:mb-0 ">
            Choose & Enjoy
          </h2>
        </div>
        <div className="grid md:grid-cols-4 grid-cols-2 gap-8">
          {cakesData[page].map((meal) => (
            <MenuItems key={meal.id} {...meal} />
          ))}
        </div>
        <div className="mt-12 flex justify-center items-center gap-5 sm:gap-10 flex-wrap">
          <button
            className="paginate-btn"
            onClick={() => dispatch(hanldePrevPage(cakesData))}
          >
            Prev
          </button>
          {cakesData.map((_, index) => {
            return <PaginateButtons key={index} index={index} />;
          })}
          <button
            className="paginate-btn"
            onClick={() => dispatch(handleNextPage(cakesData))}
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
};

export default Menu;
