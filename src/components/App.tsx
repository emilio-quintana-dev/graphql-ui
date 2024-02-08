import { useState } from "react";
import { useQuery } from "@apollo/client";

// ------------------------------ UI LIBRARY COMPONENTS ------------------------------
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import Container from "@mui/material/Container";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Typography from "@mui/material/Typography";

// ------------------------------ CUSTOM COMPONENTS ------------------------------
import Section from "./Section";
import DisabledSection from "./DisabledSection";
import ItemModal from "./ItemModal";

// ------------------------------ GRAPHQL ------------------------------
import { GET_MENU } from "../queries/getMenu";

// ------------------------------ STYLES ------------------------------
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../styles/theme";
const tabsStyle = {
  minWidth: "15%",
  textAlign: "left",
  ".Mui-selected": {
    borderLeft: "2px solid #fa5553",
    borderColor: "primary.main",
  },
  "& .MuiTabs-indicator": {
    right: "100%",
    left: "auto",
  },
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
  const [currentTabIndex, setCurrentTabIndex] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState<Item | undefined>(undefined);

  const { loading, error, data } = useQuery(GET_MENU);

  const handleOpen = () => setOpenModal(true);
  const handleClose = () => setOpenModal(false);

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
    _event: React.SyntheticEvent,
    newValue: number,
  ): void => {
    setCurrentTabIndex(newValue);
  };

  function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;
    const isAllTab = index === 0;

    if (isAllTab && value === 0) {
      return (
        <div
          role="tabpanel"
          hidden={false}
          id={`vertical-tabpanel-all`}
          aria-labelledby={`vertical-tab-all`}
          {...other}
        >
          <Box sx={{ px: 3 }}>
            {menu.sections.map((section: SectionType) =>
              section.disabled ? (
                <DisabledSection section={section} key={section.id} />
              ) : (
                <Section
                  section={section}
                  handleCardClick={handleCardClick}
                  key={section.id}
                />
              ),
            )}
          </Box>
        </div>
      );
    }

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

      <Container maxWidth="xl">
        <Box
          sx={{
            display: "flex",
            paddingTop: "2.5rem",
          }}
        >
          <Tabs
            orientation="vertical"
            value={currentTabIndex}
            onChange={handleTabClick}
            sx={tabsStyle}
          >
            <Tab label="All" />
            {menu.sections.map((section: SectionType) => {
              return <Tab label={section.label} key={section.id} />;
            })}
          </Tabs>

          <TabPanel value={currentTabIndex} index={0}></TabPanel>

          {menu.sections.map((section: SectionType, index: number) => {
            return (
              <TabPanel
                value={currentTabIndex}
                index={index + 1}
                key={section.id}
              >
                {section.disabled ? (
                  <DisabledSection section={section} />
                ) : (
                  <Section
                    section={section}
                    handleCardClick={handleCardClick}
                  />
                )}
              </TabPanel>
            );
          })}
        </Box>

        {selectedItem && (
          <ItemModal
            openModal={openModal}
            handleClose={handleClose}
            item={selectedItem}
          />
        )}
      </Container>
    </ThemeProvider>
  );
}

export default App;
