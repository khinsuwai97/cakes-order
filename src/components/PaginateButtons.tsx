import { handlePaginatepage } from '../store';
import { useAppDispatch, useAppSelector } from '../types/types';

type Props = {
  index: number;
};

const PaginateButtons = ({ index }: Props) => {
  const { page } = useAppSelector((state) => state.paginate);
  const dispatch = useAppDispatch();
  return (
    <button
      className={`${
        index === page ? 'bg-secondary' : 'bg-secondaryShade'
      } w-[30px] h-[30px] rounded-full 
        text-center  font-semibold  text-normal`}
      onClick={() => dispatch(handlePaginatepage(index))}
    >
      {index + 1}
    </button>
  );
};

export default PaginateButtons;
