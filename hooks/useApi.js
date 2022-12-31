import { useState } from 'react';

export default useApi = (apiFunc) => {
  const [data, setData] = useState([]);
  const [listingError, setListingError] = useState(false);
  const [loading, isLoading] = useState(true);


  const request = async () => {
    isLoading(true);
    const response = await apiFunc();
    isLoading(false);
    if (!response.ok) {
      return setListingError(true);
    }

    setListingError(false);
    setData(response.data);
  };

  return { request, data, listingError, loading };
};
