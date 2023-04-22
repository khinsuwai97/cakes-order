import cake from '../images/cake.png';
import { Button } from './Button';

const Hero = () => {
  return (
    <section className="md:pt-22 md:pb-[90px] pb-3 pt-4 sm:pt-2 bg-secondary ">
      <div className="xl:max-w-[1280px] w-full grid md:grid-cols-2 py-0 sm:px-[32px] px-[24px]  ">
        <div className=" sm:px-16 px-6 md:mt-20 z-10 max-w-[1300px] ">
          <h1 className="font-poppins text-primary2 font-bold sm:text-[62px] ss:text-[44px] text-[34px] ss:leading-[80px] text-center ss:text-left leading-[40px]">
            Delicious Cake, Delivered To You
          </h1>
          <p className="font-poppins font-normal sm:text-[20px] text-[18px] ss:leading-[30px] ss:text-left text-center mt-5 text-primary2 leading-[25px] max-w-[470px] ">
            Our cakes are made with high-quality ingredients, just-in-time and
            of course by experienced chefs!
          </p>
          <div className="text-center ss:text-left sm:mb-0 mb-3 mt-5 sm:mt-10">
            <Button />
          </div>
        </div>
        <div className="flex justify-center items-center relative">
          <img src={cake} className="w-[90%] z-10" />
        </div>
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 pink__gradient" />
      </div>
    </section>
  );
};

export default Hero;
