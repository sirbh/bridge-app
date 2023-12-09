import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { AppBar, Button } from "@mui/material";
import Link from "next/link";

export default function MediaCard({
    title="Title",
    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit.",
    image,
    date="21st Dec 2021 6:00 PM",
    location="A233",
    organizer="TRES",
    titleColor="white",
    descriptionColor="white",
    dateColor="white",
    locationColor="white",
    organizerColor="white",
    onClick=()=>{console.log("clicked")}
}) {
  return (
    <AppBar
    position="static"
    sx={{
      height: "50px",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "flex-end",
      padding: "0px 20px",
    }}
  >
    <Link href="/">
      <Button variant="contained" color="secondary" sx={{marginLeft:"10px"}}>
        Home
      </Button>
    </Link>
    <Link href="/create-event">
      <Button variant="contained" color="secondary" sx={{marginLeft:"10px"}}>
        Catalogue
      </Button>
    </Link>
  </AppBar>
  );
}
