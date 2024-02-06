import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

import ItemCard from "./ItemCard";
import { Typography } from "@mui/material";

const Section = ({ section, handleCardClick }) => {
  return (
    <Box>
      <Typography variant="h3">{section.label}</Typography>
      <Typography>{section.description}</Typography>

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
