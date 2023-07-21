import React, { useState } from 'react';
import dogwalkicon from '../../public/SVG/dogwalkicon.svg';
import { LuFlower2 } from 'react-icons/lu';
import SelectedServiceCard from '@components/SelectedServiceCard';

const BookingPlans = ({ service, BookingFormChange }) => {
  const plans = [
    {
      logo: <LuFlower2 />,
      serviceType: 'Dog walk',
      task: 'We’ll take your pup for a walk and make sure he or she has fresh food and water.',
      price: '$15',
      time: 'per 30 min walk',
    },
    {
      logo: <LuFlower2 />,
      serviceType: 'Drop-in-visit',
      task: ' We’ll stop by to snuggle, feed, and play with your pets in the comfort of home.',
      price: '$15',
      time: 'per 30 min walk',
    },
    {
      logo: <LuFlower2 />,
      serviceType: 'House sitting',
      task: ' We’ll stay overnight with your pet to make sure he or she has round-the-clock love.',
      price: '$45',
      time: 'per night 30 mins',
    },
  ];
  const [selected, setSelected] = useState(null);

  const handleChange = (selected) => {
    setSelected(selected);
  };

  return (
    <section className="w-[100%] text-center">
      <h2 className="title">We can't wait to see your pet! How can we help?</h2>
      <div className="text-left w-[50%] mx-auto mb-4">
        {plans.map((plan, i) => (
          <SelectedServiceCard
            {...plan}
            key={i}
            index={i}
            handleChange={handleChange}
            data={{ service: plan.serviceType }}
            BookingFormChange={BookingFormChange}
          />
        ))}
      </div>
    </section>
  );
};

export default BookingPlans;
