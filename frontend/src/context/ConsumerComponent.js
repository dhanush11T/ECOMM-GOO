import React, { useContext } from 'react';
import Context from './context';

const ConsumerComponent = () => {
  const { fetchUserDetails } = useContext(Context);

  // Example usage of fetchUserDetails or other context values
  return (
    <div>
      {/* Display context values */}
    </div>
  );
};

export default ConsumerComponent;