/* eslint-disable react/no-danger */
import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames';

import Icon, { EIconName } from '@/components/Icon';
import { getHomeContentAction } from '@/redux/actions';
import { TRootState } from '@/redux/reducers';
import { EArticleControllerAction } from '@/redux/actions/article-controller/constants';
import { getFullPathFile } from '@/utils/functions';

import './Services.scss';

const Services: React.FC = () => {
  const dispatch = useDispatch();
  const [activeSection, setActiveSection] = useState<number>(0);

  const getHomeContentLoading = useSelector(
    (state: TRootState) => state.loadingReducer[EArticleControllerAction.GET_HOME_CONTENT],
  );
  const homeContent = useSelector((state: TRootState) => state.articleReducer.homeContent);
  const activeArticle = homeContent?.data?.ListArticle?.[activeSection];

  const renderIcon = (index: number): EIconName => {
    switch (index % 4) {
      case 0:
        return EIconName.CloudDownload;
      case 1:
        return EIconName.Video;
      case 2:
        return EIconName.Calendar;
      case 3:
        return EIconName.UserLine;
      default:
        return EIconName.Dashboard;
    }
  };

  const getHomeContent = useCallback(() => {
    dispatch(getHomeContentAction.request());
  }, [dispatch]);

  useEffect(() => {
    getHomeContent();
  }, [getHomeContent]);

  return (
    <div className="Services">
      <div className="container">
        {!getHomeContentLoading && (
          <div className="Services-wrapper flex items-center flex-wrap">
            <div className="Services-wrapper-item">
              {activeArticle?.thumbnail && (
                <div className="Services-item-image">
                  <img src={getFullPathFile(activeArticle.thumbnail)} alt="" />
                </div>
              )}
            </div>
            <div className="Services-wrapper-item flex flex-wrap justify-between">
              {homeContent?.data?.ListArticle?.map((item, index) => (
                <div
                  key={item.articleId}
                  className={classNames('Services-card flex items-start', { active: activeSection === index })}
                  onClick={(): void => setActiveSection(index)}
                >
                  <div className="Services-card-icon">
                    <Icon name={renderIcon(index)} />
                  </div>
                  <div className="Services-card-info">
                    <div className="Services-card-info-title">{item.title}</div>
                    <div
                      className="Services-card-info-description ck-content style-content-editable"
                      dangerouslySetInnerHTML={{ __html: item.content || '' }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Services;
