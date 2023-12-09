import {
  AppBar,
  Box,
  Button,
  Card,
  CardContent,
  Checkbox,
  Grid,
  InputLabel,
  Link,
  Menu,
  MenuItem,
  Modal,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import App from "next/app";
import MyButton from "../../components/MyButton";
import Tempalte from "../../components/Template";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Image from "next/image";
import Chips from "../../components/Chips";

const CustomAppBar = () => {
  const [jsonData, setJsonData] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const [modal, setModal] = useState(false);
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

  const [message, setMessage] = useState("");

  const [username, setUsername] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/data/events.json");
        const data = await response.json();
        console.log(data);
        setJsonData(data);
      } catch (error) {
        console.error("Error fetching JSON data:", error);
      }
    };

    fetchData();
  }, []);

  if (!jsonData) return null;

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
    setModal(true);
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
        <Button variant="contained" color="secondary">
            Home
        </Button>
        </Link>
      </AppBar>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "20px 40px",
        }}
      >
        <TextField
          id="outlined-basic"
          label="Outlined"
          variant="outlined"
          sx={{ width: "500px" }}
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
          }}
        />
        <Button variant="contained" sx={{ marginLeft: "20px" }}>
          Search
        </Button>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "20px 40px",
        }}
      >
        <Chips/>
      </Box>
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
        {jsonData
          .filter((item) => {
            if (
              item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
              item.description.toLowerCase().includes(searchQuery.toLowerCase())
            ) {
              return true;
            }
          })
          .map((item, i) => {
            return (
              <Tempalte
                key={i}
                image={`/images/${Math.floor(Math.random() * 10)}.jpg`}
                title={item.title}
                description={item.description}
                onClick={clickHandler}
              />
            );
          })}
      </Box>
      <Modal
        open={modal}
        onClose={() => {
          setMessage("");
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
            Pay for you selection
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
                  <Grid item xs={12}>
                    <Typography variant="h3">{message}</Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      id="outlined-basic"
                      label="Full Name"
                      variant="outlined"
                      fullWidth
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      id="outlined-basic"
                      label="Address"
                      variant="outlined"
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <InputLabel id="demo-simple-select-label">
                      Payment Method
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      //   value={}
                      value={paymentMethod}
                      label="Payment Method"
                      placeholder="Color"
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      fullWidth
                      //   onChange={handleChange}
                    >
                      <MenuItem value={"visa"}>Visa</MenuItem>
                      <MenuItem value={"mobPay"}>Mobile Pay</MenuItem>
                      <MenuItem value={"Pay at event"}>Pay at event</MenuItem>
                    </Select>
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      variant="contained"
                      fullWidth
                      onClick={() => {
                        if (username && paymentMethod) {
                          setMessage("Payment Successful");
                        } else {
                          setMessage("Please fill all fields");
                        }
                      }}
                    >
                      Register
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
