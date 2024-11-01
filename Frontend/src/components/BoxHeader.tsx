import FlexBetween from "./FlexBetween";
import { useTheme, Box, Typography } from "@mui/material";

type Props = {
  icon?: React.ReactNode;
  title?: string; // Optional property
  subtitle?: string; // Optional property
  sideText?: string; // Optional property
};
const BoxHeader = ({ icon, title, subtitle, sideText }: Props) => {
  const { palette } = useTheme();
  return (
    <FlexBetween color={palette.grey[400]} margin="1.5rem 0 1rem 0">
      <FlexBetween>
        {icon}
        <Box width="100%" display="flex">
          <Typography variant="h4" mb="-0.1rem">
            {title}
            <Typography variant="h6">{subtitle}</Typography>
          </Typography>
          <Typography
            variant="h5"
            fontWeight="700"
            color={palette.secondary.light}
          >
            {sideText}
          </Typography>
        </Box>
      </FlexBetween>
    </FlexBetween>
  );
};

export default BoxHeader;
