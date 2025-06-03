import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { getCamper } from '@store/campers/campers-actions.js';
import MainInfo from '@pages/CamperDetailsPage/components/MainInfo';
import Tabs from '@components/ui/Tabs';
import BookingForm from '@components/BookingForm';
import Features from '@pages/CamperDetailsPage/components/Features';
import { catalogRoutesPath } from '@router/routes/catalog/catalog-routes-path.js';
import Reviews from '@pages/CamperDetailsPage/components/Reviews';
import css from './CamperDetailsPage.module.css';

const tabList = [
  { key: 'features', label: 'Features' },
  { key: 'reviews', label: 'Reviews' },
];

const CamperDetailsPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [camper, setCamper] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('features');

  useEffect(() => {
    if (id) {
      setIsLoading(true);
      dispatch(getCamper(id))
        .then((result) => {
          if (getCamper.fulfilled.match(result)) {
            setCamper(result.payload);
            setIsLoading(false);
          } else {
            toast.error('Something went wrong. Try again!', {
              position: 'top-center',
            });
            navigate(catalogRoutesPath.catalog);
          }
        })
        .catch(() => {
          toast.error('Something went wrong. Try again!', {
            position: 'top-center',
          });
          navigate(catalogRoutesPath.catalog);
        });
    }
  }, [dispatch, id, navigate]);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (!camper) {
    return null;
  }

  return (
    <div className={css.container}>
      <MainInfo
        rating={camper.rating}
        reviews={camper.reviews}
        price={camper.price}
        location={camper.location}
        name={camper.name}
        description={camper.description}
        gallery={camper.gallery}
      />
      <div className={css.moreInfo}>
        <Tabs onTabChange={setActiveTab} activeTab={activeTab} tabList={tabList} />
        <div className={css.subContainer}>
          {activeTab === 'features' && <Features camper={camper} />}
          {activeTab === 'reviews' && <Reviews reviews={camper.reviews} />}

          <BookingForm />
        </div>
      </div>
    </div>
  );
};

export default CamperDetailsPage;
