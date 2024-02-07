// ------------------------------ UI LIBRARY COMPONENTS ------------------------------
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

// ------------------------------ Types ------------------------------
import type { Item } from "../__generated__/graphql";

interface Props {
  item: Item;
  handleCardClick: (item: Item) => void;
}

const ItemCard = ({ item, handleCardClick }: Props) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea onClick={() => handleCardClick(item)}>
        <CardMedia
          sx={{ height: 140 }}
          image="https://source.unsplash.com/random?pizza"
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {item.label}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {item.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Typography variant="body2" color="text.secondary">
          {item.price}
        </Typography>

        <Button variant="contained" size="small">
          Add
        </Button>
      </CardActions>
    </Card>
  );
};

export default ItemCard;
