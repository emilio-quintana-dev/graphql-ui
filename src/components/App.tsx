import { useState } from "react";
import { useQuery } from "@apollo/client";

// ------------------------------ UI LIBRARY COMPONENTS ------------------------------
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Modal from "@mui/material/Modal";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Typography from "@mui/material/Typography";

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

// ------------------------------ Types ------------------------------
import type { Item } from "../__generated__/graphql";
import type { Section as SectionType } from "../__generated__/graphql";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function App() {
  const { loading, error, data } = useQuery(GET_MENU);
  const [currentTabIndex, setCurrentTabIndex] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const handleOpen = () => setOpenModal(true);
  const handleClose = () => setOpenModal(false);
  const [selectedItem, setSelectedItem] = useState<Item | undefined>(undefined);

  if (loading) {
    return (
      <Container maxWidth="lg">
        <Box
          sx={{
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <CircularProgress sx={{ color: "#fa5553" }} />
        </Box>
      </Container>
    );
  }

  if (error) return <p>Error : {error.message}</p>;

  const { menu } = data;

  const handleCardClick = (item: Item) => {
    setSelectedItem(item);
    handleOpen();
  };

  const handleTabClick = (
    event: React.SyntheticEvent,
    newValue: number,
  ): void => {
    setCurrentTabIndex(newValue);
  };

  function TabPanel(props: TabPanelProps) {
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
        <Box sx={{ height: "100vh", display: "flex", paddingTop: "2.5rem" }}>
          <Tabs
            orientation="vertical"
            value={currentTabIndex}
            onChange={handleTabClick}
          >
            {menu.sections.map((section: SectionType) => {
              return <Tab label={section.label} key={section.id} />;
            })}
          </Tabs>

          {menu.sections.map((section: SectionType, index: number) => {
            return (
              <TabPanel value={currentTabIndex} index={index} key={section.id}>
                <Section section={section} handleCardClick={handleCardClick} />
              </TabPanel>
            );
          })}
        </Box>

        <Modal
          open={openModal}
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
