import { motion } from "framer-motion";

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
  baseLabel?: string | null;
  handleCardClick: (item: Item) => void;
}

const ItemCard = ({ item, baseLabel, handleCardClick }: Props) => {
  const handleOnClick = () => {
    if (!item.disabled) {
      handleCardClick(item);
    }
  };

  return (
    <Card sx={{ maxWidth: 345, opacity: item.disabled ? 0.5 : 1 }}>
      <CardActionArea
        onClick={handleOnClick}
        style={{ cursor: item.disabled ? "default" : "pointer" }}
      >
        <motion.div
          whileHover={{ scale: item.disabled ? 1 : 1.1 }}
          style={{ overflow: "hidden" }}
        >
          <CardMedia
            sx={{ height: 140 }}
            image={`https://source.unsplash.com/random?pizza?sig=${item.id}`}
            title="green iguana"
          />
        </motion.div>

        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {baseLabel ? `${baseLabel}(${item.label})` : item.label}
          </Typography>

          <Typography variant="body2" color="text.secondary">
            {item.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{ padding: "1rem", justifyContent: "space-between" }}>
        <Typography variant="body2" color="text.secondary">
          {item.price}
        </Typography>

        <Button variant="contained" size="small" disabled={item.disabled}>
          {item.disabled ? "Sold Out" : "Add"}
        </Button>
      </CardActions>
    </Card>
  );
};

export default ItemCard;
