import Image from 'next/image';
import React from 'react';
import Logo from '../../assets/img/Rectangle 999.png';

const Index = () => {
  return (
    <div className="testimonial ">
      <img
        src={Logo.src}
        width={1080}
        height={214}
        style={{ objectFit: 'cover' }}
      />
    </div>
  );
};

export default Index;
