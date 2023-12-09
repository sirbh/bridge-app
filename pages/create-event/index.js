import { Box, Button, Link, TextField, Typography } from "@mui/material";
import App from "next/app";
import MyButton from "../../components/MyButton";
import Tempalte from "../../components/Template";
import { useRouter } from "next/router";
import AppBar from "../../components/AppBar";

const CustomAppBar = () => {
  const router = useRouter();
  const clickHandler = (
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
    organizerColor
  ) => {
    router.push({
      pathname: "/create-event/edit-tempelate",
      query: {
        data: JSON.stringify({
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
        }),
      },
    });
  };
  return (
    <>
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
          <Button variant="contained" color="secondary" sx={{marginLeft:10}}>
            Home
          </Button>
        </Link>
        <Link href="/create-event">
          <Button variant="contained" color="secondary" sx={{marginLeft:10}}>
            Catalogue
          </Button>
        </Link>
      </AppBar>
      <Typography variant="h4" textAlign={"center"} sx={{ padding: "50px 50px" }}>Select Tempalte From the Catalogue</Typography>
      <Box
        sx={{
          padding: "50px 50px",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "start",
          flexWrap: "wrap",
          alignItems: "center",
          gap: "30px",
        }}
      >
        {Array.from({ length: 10 }, (_, index) => index + 1).map((item, i) => {
          return (
            <Tempalte
              key={i}
              image={`/images/${i}.jpg`}
              onClick={clickHandler}
            />
          );
        })}
      </Box>
    </>
  );
};

export default CustomAppBar;
