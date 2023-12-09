import { useRouter } from "next/router";
import AppBar from "../../../components/AppBar";
import {
  Box,
  Button,
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  Input,
  Paper,
  Typography,
} from "@mui/material";
import Template from "../../../components/Template";
import { useEffect, useState } from "react";

export default function ManageEvent() {
  const router = useRouter();
  const [eventDetails, setEventDetails] = useState({}); // [1
  const [dialogOpen, setDialogOpen] = useState(false); // [1
  const [categories, setCategories] = useState([
    "Locations",
    "Food",
    "Drinks",
    "Entertainment",
    "Decorations",
    "Security",
  ]); // [1
  const { data } = router.query;
  useEffect(() => {
    if (data) {
      const {
        title,
        description,
        image,
        date,
        location,
        organizer,
        titleColor,
        descriptionColor,
        dateColor,
        locationColor,
        organizerColor,
        postedTo,
      } = JSON.parse(data);
      setEventDetails({
        title,
        description,
        image,
        date,
        location,
        organizer,
        titleColor,
        descriptionColor,
        dateColor,
        locationColor,
        organizerColor,
        postedTo,
      }); // [2
      console.log(postedTo);
    }
  }, [data]);
  return (
    <>
      <AppBar />
      <Typography variant="h3" component="h1" gutterBottom textAlign={"center"}>
        Manage Event
      </Typography>
      <Grid container spacing={2} padding={"15px"}>
        <Grid
          item
          xs={5}
          sx={{
            display: "grid",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Template
            image={eventDetails.image}
            title={eventDetails.title}
            date={eventDetails.date}
            description={eventDetails.description}
            location={eventDetails.location}
            organizer={eventDetails.organizer}
            titleColor={eventDetails.titleColor}
            descriptionColor={eventDetails.descriptionColor}
            dateColor={eventDetails.dateColor}
            locationColor={eventDetails.locationColor}
            organizerColor={eventDetails.organizerColor}
          />
        </Grid>
        <Grid item xs={3}>
          <Typography variant="h4" component="h2" gutterBottom>
            Event Posted to
          </Typography>
          {Object.entries(eventDetails.postedTo || {}).map(([key, value]) => (
            <Typography variant="h5" component="p" gutterBottom>
              {key} : {value ? "Yes" : "No"}
            </Typography>
          ))}
        </Grid>
        <Grid item xs={4}>
          <Paper sx={{ padding: 2 }} elevation={4}>
            <Typography variant="h4" component="h2" gutterBottom>
              I need help with
            </Typography>
            {categories.map((item, i) => (
              <Box>
                <Typography
                  variant="body1"
                  component="p"
                  sx={{ display: "inline" }}
                  gutterBottom
                >
                  {item}
                </Typography>
                <Checkbox />
              </Box>
            ))}
            <Input placeholder="My Issue Is not listed" fullWidth multiline />
            <Button variant="contained" sx={{ marginTop: "5px" }} onClick={()=>{
                setDialogOpen(true)
            }}>
              Send Request
            </Button>
          </Paper>
        </Grid>
      </Grid>
      <Dialog
        open={dialogOpen}
        onClose={()=>{setDialogOpen(false)}}
      >
        <DialogTitle id="alert-dialog-title">
          {"We Have received your request. Thank you for using our service."}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            You will be contacted by our sales team shortly wiht our prices for arrangements.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={()=>{setDialogOpen(false)}} autoFocus>
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
