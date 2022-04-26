/* eslint-disable react/no-danger */
import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { TRootState } from '@/redux/reducers';
import { EArticleControllerAction } from '@/redux/actions/article-controller/constants';
import { getHomeIntroAction } from '@/redux/actions';
import { getFullPathFile } from '@/utils/functions';

import './About.scss';

const About: React.FC = () => {
  const dispatch = useDispatch();
  const homeIntroData = useSelector((state: TRootState) => state.articleReducer.homeIntro);
  const getContentLoading = useSelector(
    (state: TRootState) => state.loadingReducer[EArticleControllerAction.GET_HOME_INTRO],
  );

  const article = homeIntroData?.data?.ListArticle?.[0];

  const getContentData = useCallback(() => {
    dispatch(getHomeIntroAction.request());
  }, [dispatch]);

  useEffect(() => {
    getContentData();
  }, [getContentData]);

  return (
    <div className="About">
      <div className="container">
        {!getContentLoading && (
          <div className="About-wrapper flex flex-wrap justify-between">
            <div className="About-wrapper-item">
              <div
                className="About-content ck-content style-content-editable"
                dangerouslySetInnerHTML={{ __html: article?.content || '' }}
              />
              {/* <div className="About-btns flex">
              <Button
                title="View More"
                uppercase
                size="large"
                type="primary"
                icon={<Icon name={EIconName.AngleRight} color={EIconColor.WHITE} />}
              />
            </div> */}
            </div>
            <div className="About-wrapper-item">
              {article?.thumbnail && (
                <div className="About-image">
                  <img src={getFullPathFile(article?.thumbnail)} alt="" />
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default About;
