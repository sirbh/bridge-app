import Head from "next/head";
import styles from "../styles/Home.module.css";
import { AppBar, Box, Button, TextField, Typography } from "@mui/material";
import App from "next/app";
import Link from "next/link";

export default function Home() {
  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "row",
      }}
    >
      <Box
        sx={{
          width: "50%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundImage: "url(/images/plan.jpg)",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <Typography
          variant="h2"
          textAlign={"center"}
          color={"#3498DB "}
          fontWeight={"700"}
        >
          I want to organize event
        </Typography>
        <Link href="/create-event">
          <Button variant="contained">Create Event</Button>
        </Link>
      </Box>
      <Box
        sx={{
          width: "50%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundImage: "url(/images/event.jpg)",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <Typography
          variant="h2"
          textAlign={"center"}
          color={"#3498DB "}
          fontWeight={"700"}
        >
          I want to find event
        </Typography>
        <Link href="/events">
          <Button variant="contained">Search Event</Button>
        </Link>
      </Box>
    </Box>
  );
}
