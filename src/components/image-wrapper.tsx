import { ImageWrapperProps } from "../types/types";

const ImageWrapper: React.FC<ImageWrapperProps> = ({ children, ...props }) => {
  return <div {...props}>{children}</div>;
};

export default ImageWrapper;
