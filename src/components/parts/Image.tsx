import { CSSProperties, FC } from 'react';

interface ImageProps {
  src: string;
  alt: string;
  width?: string;
  height?: string;
  onClick?: () => void;
  className?: string;
  style?: CSSProperties;
}

const Image: FC<ImageProps> = ({
  src,
  alt,
  width,
  height,
  className,
  onClick,
  style
}) => (
  <img
    src={src}
    alt={alt} 
    style={{
      width,
      height,
      ...style
    }}
    className={className}
    onClick={onClick}
  />
);

export default Image;