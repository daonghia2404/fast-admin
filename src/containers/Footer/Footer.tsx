/* eslint-disable react/no-danger */
import React, { useCallback, useEffect } from 'react';
import { Link } from '@reach/router';
import { useDispatch, useSelector } from 'react-redux';

import Logo from '@/assets/images/logo_ft.png';
import { dataMenuFooter } from '@/containers/Footer/Footer.data';
import Icon, { EIconColor, EIconName } from '@/components/Icon';
import { getFooterAction } from '@/redux/actions';
import { TRootState } from '@/redux/reducers';

import './Footer.scss';

const Footer: React.FC = () => {
  const dispatch = useDispatch();

  const footerState = useSelector((state: TRootState) => state.articleReducer.middleBand);
  const article = footerState?.data?.ListArticle?.[0];

  const getFooterData = useCallback(() => {
    dispatch(getFooterAction.request());
  }, [dispatch]);

  useEffect(() => {
    getFooterData();
  }, [getFooterData]);

  return (
    <div className="Footer flex items-center flex-wrap">
      <div className="Footer-item">
        <div className="Footer-logo">
          <img src={Logo} alt="" />
        </div>
      </div>
      <div className="Footer-item flex items-end justify-between">
        <div className="Footer-info">
          <div className="Footer-nav flex items-center">
            {dataMenuFooter.map((item) => (
              <div className="Footer-nav-item">
                <Link to={item.link}>{item.title}</Link>
              </div>
            ))}
          </div>

          <div
            className="Footer-content ck-content style-content-editable"
            dangerouslySetInnerHTML={{ __html: article?.content || '' }}
          />

          {/* <div className="Footer-description">+66 2 056 8777 | admin@admin.com</div>
          <div className="Footer-description">
            20A Truong Dinh Street, Vo Thi Sau Ward, District 3, Ho Chi Minh City, Vietnam
          </div> */}
        </div>
        <div className="Footer-socials flex items-center">
          <Link to="/" className="Footer-socials-item">
            <Icon name={EIconName.ZaloCircle} color={EIconColor.WHITE} />
          </Link>
          <Link to="/" className="Footer-socials-item">
            <Icon name={EIconName.LinkedInCircle} color={EIconColor.WHITE} />
          </Link>
          <Link to="/" className="Footer-socials-item">
            <Icon name={EIconName.FacebookCircle} color={EIconColor.WHITE} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
