import Grid from "@mui/material/Grid";

import ItemCard from "./ItemCard";

const Section = ({ section }) => {
  return (
    <>
      <h1>{section.label}</h1>
      <p>{section.description}</p>

      <Grid container spacing={2}>
        {section.items.map((item) => {
          return (
            <Grid item xs={12} md={6} key={item.id}>
              <ItemCard key={item.id} item={item} />
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

export default Section;
