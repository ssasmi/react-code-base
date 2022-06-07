import { Box, Stack } from "@mui/material";
import Content from "../components/Content";

const Homepage = () => {
  
  return (
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <Content />
        </Stack>
      </Box>
  );
};

export default Homepage;
