import Box from "@mui/material/Box";
import { Container, Typography } from "@mui/material";
import { MainNavigation } from "./main-navigation";

export const ShellContainer = (props) => {
  const { children, title, subtitle } = props;

  return (
    <Container maxWidth="xl">
      <Box sx={{ flexGrow: 1 }}>
        <MainNavigation />
        <Typography variant="h4" marginY={2}>
          {title}
        </Typography>

        <Typography variant="subtitle1">
          {subtitle}
        </Typography>

        {children}
      </Box>
    </Container>
  );
};
