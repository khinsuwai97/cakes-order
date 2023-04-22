type Props = {
  text: string;
};

const Error = ({ text }: Props) => {
  return (
    <div className="flex justify-center items-center pt-[100px] h-screen">
      <h2 className="font-poppins text-[20px] text-red-500 ">{text}!</h2>
    </div>
  );
};

export default Error;
