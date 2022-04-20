/* eslint-disable react/no-danger */
import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { TRootState } from '@/redux/reducers';
import { EArticleControllerAction } from '@/redux/actions/article-controller/constants';
import { getAboutUsAction } from '@/redux/actions';
import { getFullPathFile } from '@/utils/functions';
import Loading from '@/containers/Loading';

import './About.scss';

const About: React.FC = () => {
  const dispatch = useDispatch();
  const aboutUsData = useSelector((state: TRootState) => state.articleReducer.aboutUs);
  const getContentLoading = useSelector(
    (state: TRootState) => state.loadingReducer[EArticleControllerAction.GET_ABOUT_US],
  );

  const article = aboutUsData?.data?.ListArticle?.[0];

  const getContentData = useCallback(() => {
    dispatch(getAboutUsAction.request());
  }, [dispatch]);

  useEffect(() => {
    getContentData();
  }, [getContentData]);

  return (
    <div className="About">
      <div className="container">
        {getContentLoading ? (
          <Loading />
        ) : (
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
