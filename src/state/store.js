import { configureStore } from '@reduxjs/toolkit';

import listingsReducer from '@/state/listings/listingsSlice';
import usersReducer from '@/state/users/usersSlice';

export const store = configureStore({
  reducer: {
    listings: listingsReducer,
    users: usersReducer,
  },
});
