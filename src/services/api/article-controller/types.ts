import { TCommonResponse } from '@/common/types';

export type TGetHomeContentResponse = unknown;
export type TGetServiceResponse = unknown;
export type TGetPolicyResponse = TCommonResponse & {
  data: {
    ListArticle: TArticleResponse[];
  };
};
export type TGetRuleResponse = unknown;
export type TGetContactResponse = unknown;
export type TGetAboutUsResponse = unknown;

export type TArticleResponse = {
  articleId: number;
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
