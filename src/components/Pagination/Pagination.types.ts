export type TPaginationProps = {
  className?: string;
  page: number;
  pageSize: number;
  total: number;
  hideOnSinglePage?: boolean;
  onChange?: (page: number, pageSize?: number) => void;
};
