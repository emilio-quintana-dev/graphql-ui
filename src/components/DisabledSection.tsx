// ------------------------------ UI LIBRARY COMPONENTS ------------------------------
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

// ------------------------------ Types ------------------------------
import type { Section } from "../__generated__/graphql";

interface Props {
  section: Section;
}

const DisabledSection = ({ section }: Props) => {
  const sampleItem = section.items[0];

  return (
    <Box sx={{ marginBottom: "2.5rem", opacity: "0.5" }}>
      <Typography variant="h4">{section.label}</Typography>

      <Typography sx={{ marginBottom: "1rem" }}>
        Only available on Fri, Sat and Sun.
      </Typography>

      <Card
        sx={{
          display: "flex",
          bgcolor: "background.paper",
          height: 300,
        }}
      >
        <CardMedia
          component="img"
          sx={{ width: 400 }}
          image="https://source.unsplash.com/random?pizza"
          alt="Live from space album cover"
        />

        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography component="div" variant="h5">
              {sampleItem.label}
            </Typography>

            <Typography>{sampleItem.description}</Typography>
          </CardContent>

          <CardActions
            sx={{
              padding: "1rem",
              justifyContent: "space-between",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Typography>{sampleItem.price}</Typography>
            </Box>

            <Button
              variant="contained"
              size="small"
              sx={{ width: "75%", height: "100%" }}
            >
              Not available
            </Button>
          </CardActions>
        </Box>
      </Card>
    </Box>
  );
};

export default DisabledSection;
