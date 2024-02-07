// ------------------------------ UI LIBRARY COMPONENTS ------------------------------
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

// ------------------------------ CUSTOM COMPONENTS ------------------------------
import ItemCard from "./ItemCard";

// ------------------------------ Types ------------------------------
import type { Section } from "../__generated__/graphql";
import type { Item } from "../__generated__/graphql";

interface Props {
  section: Section;
  handleCardClick: (item: Item) => void;
}

const Section = ({ section, handleCardClick }: Props) => {
  return (
    <Box>
      <Typography variant="h3">{section.label}</Typography>

      <Typography sx={{ marginBottom: "1rem" }}>
        {section.description}
      </Typography>

      <Grid container spacing={2}>
        {section.items.map((item) => {
          return (
            <Grid item xs={12} md={6} key={item.id}>
              <ItemCard
                key={item.id}
                item={item}
                handleCardClick={handleCardClick}
              />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default Section;
