import { useState } from 'react';

interface Params<TItem> {
  items: TItem[];
  limit: number;
}

const usePaginate = <TItem>({ items, limit }: Params<TItem>) => {
  const [page, setPage] = useState<number>(1);

  const disablePrev = page === 1;
  const disableNext = page * limit >= items.length;

  const renderItems = () => {
    const end = page * limit;
    const start = end - limit;

    return items.slice(start, end);
  };

  const moveToPrevPage = () => {
    if (!disablePrev) setPage(page - 1);
  };

  const moveToNextPage = () => {
    if (!disableNext) setPage(page + 1);
  };

  return {
    disablePrev,
    disableNext,
    moveToPrevPage,
    moveToNextPage,
    renderItems,
  };
};

export default usePaginate;
