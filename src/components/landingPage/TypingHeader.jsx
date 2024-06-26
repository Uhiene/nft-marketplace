import React from 'react';
import Typical from 'react-typical';

const TypingHeader = () => {
  return (
    <h1 className="text-3xl lg:text-6xl">
      <Typical
        steps={[
          'Unlock the Future of Digital Artistry', 2000,
          'Unlock the Future of Digital Collectibles', 2000,
          'Unlock the Future of Digital Assets', 2000,
        ]}
        loop={1}
        wrapper="span"
      />
    </h1>
  );
};

export default TypingHeader;
