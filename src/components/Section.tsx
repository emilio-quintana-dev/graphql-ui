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
    <Box sx={{ marginBottom: "2.5rem" }}>
      <Typography variant="h4" component="div">
        {section.label}
      </Typography>

      <Typography sx={{ marginBottom: "1rem" }}>
        {section.description}
      </Typography>
      <Grid container spacing={2}>
        {section.items.map((item) => {
          if (item.items?.length) {
            return item.items.map((subItem) => {
              return (
                <Grid item xs={12} md={4} key={subItem.id}>
                  <ItemCard
                    key={subItem.id}
                    baseLabel={item.label}
                    item={subItem}
                    handleCardClick={handleCardClick}
                  />
                </Grid>
              );
            });
          } else {
            return (
              <Grid item xs={12} md={4} key={item.id}>
                <ItemCard
                  key={item.id}
                  item={item}
                  handleCardClick={handleCardClick}
                />
              </Grid>
            );
          }
        })}
      </Grid>
    </Box>
  );
};

export default Section;
