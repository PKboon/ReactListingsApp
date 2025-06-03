import { Search } from 'lucide-react';
import { memo, useState } from 'react';

import { Button, DateRangePicker, Input, Stepper } from '@/components/ui';

const ListingFilters = ({ onClick }) => {
  const today = new Date();
  const [dates, setDates] = useState();
  const [guests, setGuests] = useState(2);
  const [search, setSearch] = useState('');

  const handleClick = () => {
    onClick({ dates, guests, search });
  };

  return (
    <div
      className='flex flex-col items-center justify-center gap-2 md:flex-row'
      data-testid='ListingFilters'
    >
      <Input
        name='search'
        placeholder='Search destinations'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <DateRangePicker
        className='w-full md:w-[500px]'
        minDate={today}
        placeholder='Add dates'
        value={dates}
        onChange={setDates}
      />
      <div className='flex w-full gap-2 md:w-auto'>
        <Stepper
          className='w-full md:w-[200px]'
          label='guest'
          value={guests}
          onChange={setGuests}
        />
        <Button onClick={handleClick} data-testid='ListingFilters_Button'>
          <Search className='h-4 w-4' />
        </Button>
      </div>
    </div>
  );
};

export default memo(ListingFilters);
