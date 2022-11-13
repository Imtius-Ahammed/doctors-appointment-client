import React from 'react';
import fluride from '../../../assets/images/fluoride.png';
import cavity  from '../../../assets/images/cavity.png';
import whitening from '../../../assets/images/whitening.png';
import Service from './Service';

const Services = () => {
  const serviceData = [
    {
      id:1,
      name: 'Fluride Treatment',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto, voluptatum dignissimos eaque nostrum perferendis nisi in magnam eos maxime exercitationem.',
      
      img: fluride
    },
    {
      id:2,
      name: 'Cavity Filling',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto, voluptatum dignissimos eaque nostrum perferendis nisi in magnam eos maxime exercitationem.',
      
      img: cavity
    },
    {
      id:3,
      name: 'Teeth Whitening',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto, voluptatum dignissimos eaque nostrum perferendis nisi in magnam eos maxime exercitationem.',
      
      img: whitening
    },
  ]
  return (
    <div className='mt-16'>
      <div className='text-center'>
        <h3 className='text-xl font-bold text-primary uppercase'>Our Services</h3>
        <h2 className='text-3xl'>Services we Provide</h2>

      </div>
      <div className='grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        {
          serviceData.map(service=><Service key={service.id} service={service}></Service>)
        }

      </div>

    </div>
  );
};

export default Services;