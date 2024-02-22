import doorClosed from "../assets/doorClosed.jpg";
import doorOpen from "../assets/doorOpen.jpg";

const ImageBox = ({
  position,
  activeDoorIndex,
}: {
  position: number;
  activeDoorIndex: number | null;
}) => {
  return (
    <img
      src={position === activeDoorIndex ? doorOpen : doorClosed}
      style={{ width: "120px" }}
    />
  );
};

export default ImageBox;
