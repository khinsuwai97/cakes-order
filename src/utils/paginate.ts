import { MenuItem } from '../types/types';

export const paginate = (cakes: MenuItem[]) => {
  const itemsPerPage = 8;
  const numberOfPages = Math.ceil(cakes.length / itemsPerPage);
  const updatedItemPages = Array.from({ length: numberOfPages }, (_, index) => {
    const start = index * itemsPerPage;
    return cakes.slice(start, start + itemsPerPage);
  });

  return updatedItemPages;
};
