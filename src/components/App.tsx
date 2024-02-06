import { useState } from "react";
import { useQuery } from "@apollo/client";

// ------------------------------ UI LIBRARY COMPONENTS ------------------------------
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Modal from "@mui/material/Modal";

// ------------------------------ CUSTOM COMPONENTS ------------------------------
import Section from "./Section";

// ------------------------------ GRAPHQL ------------------------------
import { GET_MENU } from "../queries/getMenu";

// ------------------------------ STYLES ------------------------------
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../styles/theme";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function App() {
  const { loading, error, data } = useQuery(GET_MENU);
  const [value, setValue] = useState(0);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [selectedItem, setSelectedItem] = useState(undefined);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  const { menu } = data;

  const handleCardClick = (item) => {
    setSelectedItem(item);
    handleOpen();
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel-${index}`}
        aria-labelledby={`vertical-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ px: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Container maxWidth="lg">
        <Box sx={{ height: "100vh", display: "flex" }}>
          <Tabs orientation="vertical" value={value} onChange={handleChange}>
            {menu.sections.map((section) => {
              return <Tab label={section.label} key={section.id} />;
            })}
          </Tabs>

          {menu.sections.map((section, index) => {
            return (
              <TabPanel value={value} index={index} key={section.id}>
                <Section section={section} handleCardClick={handleCardClick} />
              </TabPanel>
            );
          })}
        </Box>

        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            {selectedItem && (
              <>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  {selectedItem.label}
                </Typography>

                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  {selectedItem.description}
                </Typography>
              </>
            )}
          </Box>
        </Modal>
      </Container>
    </ThemeProvider>
  );
}

export default App;
