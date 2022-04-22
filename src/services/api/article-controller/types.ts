import { TCommonResponse } from '@/common/types';
import { TSelectOption } from '@/components/Select';

export type TGetHomeContentResponse = TCommonResponse & {
  data: {
    ListArticle: TArticleResponse[];
  };
};
export type TGetServiceResponse = TCommonResponse & {
  data: {
    ListArticle: TArticleResponse[];
  };
};
export type TGetPolicyResponse = TCommonResponse & {
  data: {
    ListArticle: TArticleResponse[];
  };
};
export type TGetRuleResponse = TCommonResponse & {
  data: {
    ListArticle: TArticleResponse[];
  };
};
export type TGetContactResponse = TCommonResponse & {
  data: {
    ListArticle: TArticleResponse[];
  };
};
export type TGetAboutUsResponse = TCommonResponse & {
  data: {
    ListArticle: TArticleResponse[];
  };
};
export type TGetMiddleBandResponse = TCommonResponse & {
  data: {
    ListArticle: TArticleResponse[];
  };
};
export type TGetFooterResponse = TCommonResponse & {
  data: {
    ListArticle: TArticleResponse[];
  };
};

export type TGetServiceDetailResponse = TCommonResponse & {
  data: TArticleResponse;
};

export type TArticleResponse = {
  articleId: number;
  imageId: number;
  categoryId: number;
  categoryName: string;
  content: string;
  createdDate: string;
  description: string;
  modifiedDate: string;
  status: boolean;
  thumbnail: string;
  title: string;
};

export type TGetArticleCategoryResponse = TCommonResponse & {
  data: {
    categoryId: number;
    categoryName: string;
    identityType: string;
    typeId: number;
  }[];
};
export type TCreateUpdateArticleBody = {
  articleId?: number;
  title?: string;
  description?: string;
  content?: string;
  thumbnail?: string;
  categoryId?: number;
  createdDate?: string;
  modifiedDate?: string;
  status?: boolean;
  categoryName?: string;
};
export type TCreateUpdateArticleResponse = unknown;
export type TGetArticlesParams = {
  pageIndex: number;
  pageSize: number;
  skip?: number;
  getCount: boolean;
  search?: string;
  categoryId?: TSelectOption;
  status?: TSelectOption;
  identity?: string;
};
export type TGetArticlesResponse = TCommonResponse & {
  data: {
    ListArticle: TArticleResponse[];
    Total: number;
  };
};
export type TDeleteArticlesResponse = unknown;

export type TGetArticleResponse = TCommonResponse & {
  data: TArticleResponse;
};
