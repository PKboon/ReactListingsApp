import { Heart } from 'lucide-react';
import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { cn } from '@/lib/utils/cn';
import {
  addFavoriteListing,
  removeFavoriteListing,
} from '@/state/listings/listingsSlice';

import { Button } from './ui';

const ListingFavoriteButton = ({ className, listing }) => {
  const { favoriteListingIds } = useSelector((state) => state.listings);
  const dispatch = useDispatch();

  const isFavorite = useMemo(
    () => favoriteListingIds.includes(listing.id),
    [favoriteListingIds, listing.id],
  );

  const handleToggleFavorite = (e) => {
    e.preventDefault();
    e.stopPropagation();

    isFavorite
      ? dispatch(removeFavoriteListing(listing.id))
      : dispatch(addFavoriteListing(listing.id));
  };

  return (
    <Button
      className={className}
      variant='outline'
      onClick={handleToggleFavorite}
    >
      <Heart
        className={cn('h-4 w-4', { 'fill-primary text-primary': isFavorite })}
      />
    </Button>
  );
};
export default ListingFavoriteButton;
