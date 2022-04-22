import React from 'react';
import Slider from 'react-slick';
import classNames from 'classnames';

import Button from '@/components/Button';

import { TCarouselsProps } from './Carousels.types';
import './Carousels.scss';

export const Carousels: React.FC<TCarouselsProps> = ({
  dots = true,
  arrows = true,
  infinite = true,
  slidesToShow = 1,
  slidesToScroll = 1,
  slidesPerRow = 1,
  autoplay,
  children,
}) => {
  const renderPrevArrow = (): React.ReactElement => {
    return <Button type="primary" className="Carousels-arrow prev" />;
  };

  const renderNextArrow = (): React.ReactElement => {
    return <Button type="primary" className="Carousels-arrow next" />;
  };
  const settings = {
    speed: 500,
    dots,
    arrows,
    infinite,
    autoplay,
    slidesPerRow,
    autoplaySpeed: 4000,
    slidesToShow,
    slidesToScroll,
    pauseOnHover: false,
    nextArrow: renderNextArrow(),
    prevArrow: renderPrevArrow(),
  };
  return (
    <div className={classNames('Carousels')}>
      <Slider {...settings}>{children}</Slider>
    </div>
  );
};

export default Carousels;
