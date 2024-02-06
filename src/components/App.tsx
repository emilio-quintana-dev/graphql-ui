import { useQuery } from "@apollo/client";

// ------------------------------ UI LIBRARY COMPONENTS ------------------------------
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

// ------------------------------ CUSTOM COMPONENTS ------------------------------
import Menu from "./Menu";

// ------------------------------ GRAPHQL ------------------------------
import { GET_MENUS } from "../queries/getMenus";

// ------------------------------ STYLES ------------------------------
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../styles/theme";

function App() {
  const { loading, error, data } = useQuery(GET_MENUS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  console.log("DATA:", data.menus);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Container maxWidth="lg">
        <Box sx={{ height: "100vh" }}>
          {data.menus.map((menu) => (
            <Menu key={menu.id} menu={menu} />
          ))}
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default App;
