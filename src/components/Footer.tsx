const Footer = () => {
  return (
    <section id="footer" className=" py-14 bg-secondary">
      <div className="max-w-[1280px] my-0 mx-auto py-0 sm:px-[32px] px-[24px]">
        <p className="font-poppins text-center font-normal text-[18px] leading-[27px] text-white  ">
          Copyright &copy; {new Date().getFullYear()} Delicito,Inc. All Rights
          Reserved.
        </p>
      </div>
    </section>
  );
};

export default Footer;
