import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Checkbox,
  Grid,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import App from "next/app";
import Tempalte from "../../../components/Template";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Link from "next/link";
import AppBar from "../../../components/AppBar";


const CustomAppBar = () => {
  const router = useRouter();
  const { data } = router.query;

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  const [organizer, setOrganizer] = useState("");
  const [titleColor, setTitleColor] = useState("");
  const [descriptionColor, setDescriptionColor] = useState("");
  const [dateColor, setDateColor] = useState("");
  const [locationColor, setLocationColor] = useState("");
  const [organizerColor, setOrganizerColor] = useState("");

  const [telegram, setTelegram] = useState(false);
  const [tiktok, setTiktok] = useState(false);
  const [instagram, setInstagram] = useState(false);
  const [linkedin, setLinkedin] = useState(false);
  const [youtube, setYoutube] = useState(false);
  const [snapchat, setSnapchat] = useState(false);

  const [modal, setModal] = useState(false);

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
      } = JSON.parse(data);
      setTitle(title);
      setDescription(description);
      setImage(image);
      setDate(date);
      setLocation(location);
      setOrganizer(organizer);
      setTitleColor(titleColor);
      setDescriptionColor(descriptionColor);
      setDateColor(dateColor);
      setLocationColor(locationColor);
      setOrganizerColor(organizerColor);
    }
  }, [data]);

  const handleSubmit = () => {
    const data = {
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
      postedTo:{
        telegram,
        tiktok,
        instagram,
        linkedin,
        youtube,
        snapchat
      }
    };
    router.push(
      {
        pathname: "/create-event/manage-event",
        query: { data: JSON.stringify(data) },
      }
    );
  };
  return (
    <>
      <AppBar />
      <Box
        sx={{
          width: "95vw",
          height: "90vh",
          display: "flex",
          flexDirection: "row",
          margin: 0,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            width: "60%",
            height: "100%",
          }}
        >
          <Tempalte
            title={title}
            image={image}
            date={date}
            description={description}
            dateColor={dateColor}
            descriptionColor={descriptionColor}
            location={location}
            locationColor={locationColor}
            organizer={organizer}
            organizerColor={organizerColor}
            titleColor={titleColor}
          />
        </Box>
        <Box sx={{ width: "40%", height: "100%" }}>
          <Card
            sx={{ width: "100%", height: "100%", padding: "20px 10px" }}
            elevation={8}
          >
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  id="outlined-basic"
                  label="Event Name"
                  variant="outlined"
                  placeholder="Event Name"
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  id="outlined-basic"
                  label="Event Title"
                  variant="outlined"
                  placeholder="Event Title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </Grid>
              <Grid item xs={6}>
                <InputLabel id="demo-simple-select-label">Color</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  //   value={}
                  label="title Color"
                  value={titleColor}
                  onChange={(e) => setTitleColor(e.target.value)}
                  placeholder="Color"
                  defaultValue={undefined}
                  fullWidth
                  //   onChange={handleChange}
                >
                  <MenuItem value={"red"}>Red</MenuItem>
                  <MenuItem value={"blue"}>Blue</MenuItem>
                  <MenuItem value={"yellow"}>Yellow</MenuItem>
                  <MenuItem value={"white"}>White</MenuItem>
                  <MenuItem value={"black"}>Black</MenuItem>
                </Select>
              </Grid>
              <Grid item xs={6}></Grid>
              <Grid item xs={12}>
                <TextField
                  id="outlined-basic"
                  label="Event Description"
                  variant="outlined"
                  placeholder="Event Description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  fullWidth
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  id="outlined-basic"
                  label="Footer 1"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  variant="outlined"
                  placeholder="Footer 1"
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  id="outlined-basic"
                  label="Footer 2"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  variant="outlined"
                  placeholder="Footer 2"
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  id="outlined-basic"
                  label="Footer 3"
                  variant="outlined"
                  value={organizer}
                  onChange={(e) => setOrganizer(e.target.value)}
                  placeholder="Footer 3"
                />
              </Grid>
              <Grid item xs={4}>
                <InputLabel id="demo-simple-select-label">Color</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  //   value={}
                  label="footer1 Color"
                  value={dateColor}
                  onChange={(e) => setDateColor(e.target.value)}
                  placeholder="Color"
                  fullWidth
                  //   onChange={handleChange}
                >
                  <MenuItem value={"red"}>Red</MenuItem>
                  <MenuItem value={"blue"}>Blue</MenuItem>
                  <MenuItem value={"yellow"}>Yellow</MenuItem>
                  <MenuItem value={"white"}>White</MenuItem>
                  <MenuItem value={"black"}>Black</MenuItem>
                </Select>
              </Grid>
              <Grid item xs={4}>
                <InputLabel id="demo-simple-select-label">Color</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  //   value={}
                  label="footer2 Color"
                  value={locationColor}
                  onChange={(e) => setLocationColor(e.target.value)}
                  placeholder="Color"
                  fullWidth
                  //   onChange={handleChange}
                >
                  <MenuItem value={"red"}>Red</MenuItem>
                  <MenuItem value={"yellow"}>Yellow</MenuItem>
                  <MenuItem value={"blue"}>Blue</MenuItem>
                  <MenuItem value={"white"}>White</MenuItem>
                  <MenuItem value={"black"}>Black</MenuItem>
                </Select>
              </Grid>
              <Grid item xs={4}>
                <InputLabel id="demo-simple-select-label">Color</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  //   value={}
                  label="footer3 Color"
                  placeholder="Color"
                  value={organizerColor}
                  onChange={(e) => setOrganizerColor(e.target.value)}
                  fullWidth
                  //   onChange={handleChange}
                >
                  <MenuItem value={"red"}>Red</MenuItem>
                  <MenuItem value={"yellow"}>Yellow</MenuItem>
                  <MenuItem value={"blue"}>Blue</MenuItem>
                  <MenuItem value={"white"}>White</MenuItem>
                  <MenuItem value={"black"}>Black</MenuItem>
                </Select>
              </Grid>
              <Grid item xs={12}>
                <InputLabel id="demo-simple-select-label">Color</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                  label="Age"
                  placeholder="Image"
                  fullWidth
                  //   onChange={handleChange}
                >
                  <MenuItem value={"/images/0.jpg"}>image-0</MenuItem>
                  <MenuItem value={"/images/1.jpg"}>image-1</MenuItem>
                  <MenuItem value={"/images/2.jpg"}>image-2</MenuItem>
                  <MenuItem value={"/images/3.jpg"}>image-3</MenuItem>
                  <MenuItem value={"/images/4.jpg"}>image-4</MenuItem>
                  <MenuItem value={"/images/5.jpg"}>image-5</MenuItem>
                  <MenuItem value={"/images/6.jpg"}>image-6</MenuItem>
                  <MenuItem value={"/images/7.jpg"}>image-7</MenuItem>
                  <MenuItem value={"/images/8.jpg"}>image-8</MenuItem>
                  <MenuItem value={"/images/9.jpg"}>image-9</MenuItem>
                </Select>
              </Grid>
              <Grid item xs={12}>
                <Button
                  variant="contained"
                  fullWidth
                  onClick={() => {
                    setModal(true);
                  }}
                >
                  Confirm Design and Submit
                </Button>
              </Grid>
            </Grid>
          </Card>
        </Box>
      </Box>
      <Modal
        open={modal}
        onClose={() => {
          setModal(false);
        }}
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <Box
          sx={{
            width: "75vw",
            height: "90vh",
            display: "flex",
            flexDirection: "column",
            backgroundColor: "white",
          }}
        >
          <Typography
            sx={{
              backgroundColor: "blue",
              height: "10%",
              alignItems: "center",
              justifyContent: "start",
              display: "flex",
              color: "white",
              fontSize: "20px",
              paddingLeft: "20px",
            }}
          >
            Select Solcial Media Platform for submission
          </Typography>
          <Box
            sx={{
              height: "90%",
              width: "100%",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                width: "70%",
                height: "100%",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Tempalte
                title={title}
                image={image}
                date={date}
                description={description}
                dateColor={dateColor}
                descriptionColor={descriptionColor}
                location={location}
                locationColor={locationColor}
                organizer={organizer}
                organizerColor={organizerColor}
                titleColor={titleColor}
              />
            </Box>
            <Card sx={{ width: "30%", height: "100%" }}>
              <CardContent>
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <Image
                      src="/images/s7.png"
                      width={50}
                      height={50}
                      alt="Picture of the author"
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <Checkbox
                      value={telegram}
                      onChange={(e) => {
                        setTelegram((prevValue) => !prevValue);
                      }}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <Image
                      src="/images/s2.png"
                      width={50}
                      height={50}
                      alt="Picture of the author"
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <Checkbox
                      value={tiktok}
                      onChange={(e) => {
                        setTiktok((prevValue) => !prevValue);
                      }}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <Image
                      src="/images/s3.png"
                      width={50}
                      height={50}
                      alt="Picture of the author"
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <Checkbox
                      value={instagram}
                      onChange={(e) => {
                        setInstagram((prevValue) => !prevValue);
                      }}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <Image
                      src="/images/s4.png"
                      width={50}
                      height={50}
                      alt="Picture of the author"
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <Checkbox
                      value={linkedin}
                      onChange={(e) => {
                        setLinkedin((prevValue) => !prevValue);
                      }}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <Image
                      src="/images/s5.png"
                      width={50}
                      height={50}
                      alt="Picture of the author"
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <Checkbox
                      value={youtube}
                      onChange={(e) => {
                        setYoutube((prevValue) => !prevValue);
                      }}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <Image
                      src="/images/s6.png"
                      width={50}
                      height={50}
                      alt="Picture of the author"
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <Checkbox
                      value={snapchat}
                      onChange={(e) => {
                        setSnapchat((prevValue) => !prevValue);
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button variant="contained" fullWidth onClick={()=>{
                      console.log("submit");
                      handleSubmit()
                    }}>
                      Share
                    </Button>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default CustomAppBar;
