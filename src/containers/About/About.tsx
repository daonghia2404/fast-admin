import React from 'react';

import ImageAbout from '@/assets/images/image-about.png';
import Button from '@/components/Button';
import Icon, { EIconColor, EIconName } from '@/components/Icon';

import './About.scss';

const About: React.FC = () => {
  return (
    <div className="About">
      <div className="container">
        <div className="About-wrapper flex flex-wrap justify-between">
          <div className="About-wrapper-item">
            <div className="About-title">Lorem Ipsum is simply dummy</div>
            <div className="About-description">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type
            </div>

            <div className="About-description">
              and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
              into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the
              release
            </div>

            <div className="About-description">
              of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software
              like Aldus PageMaker including versions of Lorem Ipsum.
            </div>
            <div className="About-description">
              and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
              into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the
              release
            </div>
            <div className="About-btns flex">
              <Button
                title="View More"
                uppercase
                size="large"
                type="primary"
                icon={<Icon name={EIconName.AngleRight} color={EIconColor.WHITE} />}
              />
            </div>
          </div>
          <div className="About-wrapper-item">
            <div className="About-image">
              <img src={ImageAbout} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
