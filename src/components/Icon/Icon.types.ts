export type TIconProps = TColor & {
  name?: string;
  className?: string;
  onClick?: () => void;
};

export type TSvgProps = TColor;

export type TColor = {
  color?: string;
};
