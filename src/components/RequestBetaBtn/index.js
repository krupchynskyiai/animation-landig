import { Box } from "components/Box";
import { CircleText } from "./CircleText/CircleText";
import { RowSvgBox } from "./RowSvgBox/RowSvgBox";

export const RequestBetaBtn = ({ size }) => {
  return (
    <Box
      style={{
        position: "relative",
        width: `${size}px`,
        height: `${size}px`,
      }}
    >
      <CircleText size={size} />
      <RowSvgBox size={size} />
    </Box>
  );
};
