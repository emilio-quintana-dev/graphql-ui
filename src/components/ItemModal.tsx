import { useState } from "react";

// ------------------------------ UI LIBRARY COMPONENTS ------------------------------
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

// ------------------------------ Types ------------------------------
import type { Item } from "../__generated__/graphql";

// ------------------------------ STYLES ------------------------------
const style = {
  display: "flex",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  height: 500,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  // p: 4,
};

interface Props {
  openModal: boolean;
  handleClose: () => void;
  item: Item;
}

const ItemModal = ({ openModal, handleClose, item }: Props) => {
  const [count, setCount] = useState(0); // Counter state

  const incrementCount = () => setCount(count + 1);
  const decrementCount = () => setCount(Math.max(count - 1, 0));

  return (
    <Modal
      open={openModal}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Card sx={style}>
        <CardMedia
          component="img"
          sx={{ width: 400 }}
          image="https://source.unsplash.com/random?pizza"
          alt="Live from space album cover"
        />

        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography component="div" variant="h5">
              {item.label}
            </Typography>

            <Typography>{item.description}</Typography>
          </CardContent>

          <CardActions
            sx={{
              padding: "1rem",
              justifyContent: "space-between",
              backgroundColor: "lightgray",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                backgroundColor: "#fff",
                border: "1px solid #000",
              }}
            >
              <IconButton onClick={decrementCount}>
                <RemoveIcon />
              </IconButton>

              <Typography>{count}</Typography>

              <IconButton onClick={incrementCount}>
                <AddIcon />
              </IconButton>
            </Box>

            <Button
              variant="contained"
              size="small"
              sx={{ width: "75%", height: "100%" }}
            >
              Add (${item.price})
            </Button>
          </CardActions>
        </Box>
      </Card>
    </Modal>
  );
};

export default ItemModal;
