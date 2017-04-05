// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  listStylePosition,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  Appear,
  Image
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  city: require("../assets/city.jpg"),
  kat: require("../assets/kat.png"),
  logo: require("../assets/formidable-logo.svg"),
  markdown: require("../assets/markdown.png"),
  pinkybrain: require("../assets/pink-n-brain-todolist.jpg"),
  stretch: require('../assets/stretching.jpg')
};

preloader(images);

const theme = createTheme({
  primary: "white",
  secondary: "#000000",
  tertiary: "#ef6c00",
  quartenary: "#26a69a",
  lightgray: "#999"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
        <Slide transition={["fade"]} bgColor="secondary">
          <Heading>Finner</Heading>
          <Text margin="10px 0 0" textColor="primary" size={1} bold>
            a better fitness planner
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="lightgray">
          <Heading size={6} textColor="primary" caps>The Team</Heading>
          <Text>
            Eugene, Jared, and Rachel
          </Text>
          <Text>&nbsp;</Text>
          <Heading size={6} textColor="primary" caps>The Vision</Heading>
          <Text>
            Take over the world
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgImage={images.stretch} bgDarken={0.55} textColor="primary" align="flex-start">
          <Heading size={6} textColor="tertiary" caps>The Problem</Heading>
          <Appear><Text size={9} textColor="tertiary">Diets Suck</Text></Appear>
          <List>
            <Appear><ListItem>The food sucks</ListItem></Appear>
            <Appear><ListItem>The amount sucks</ListItem></Appear>
            <Appear><ListItem>The result sucks</ListItem></Appear>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>The Problem Cont...</Heading>
          <Appear><Text size={9} text color="tertiary">Why does everything suck?</Text></Appear>
          <List listStylePosition="inside">
            <Appear><ListItem>Eating too little</ListItem></Appear>
            <Appear><ListItem>Not tracking progress</ListItem></Appear>
            <Appear><ListItem>Choosing the wrong food</ListItem></Appear>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>Find Your Daily Calories</Heading>
          <List>
            {/*Add in a video of what it looks like to signup*/}
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>Track your progress</Heading>
          <List>
            {/*Add video or screen shot of what the dashboard looks like when updating*/}
            <Appear><ListItem>Track your Progress</ListItem></Appear>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>Get the Right Food</Heading>
          <List>
            {/*Meal plan and how it works*/}
            <Appear><ListItem>Track your Progress</ListItem></Appear>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>The future</Heading>
          <List>
            <Appear><ListItem>Dietary Feedback</ListItem></Appear>
            <Appear><ListItem>Increased Accuracy</ListItem></Appear>
            <Appear><ListItem>Workout Tracking</ListItem></Appear>
            <Appear><ListItem>Individual Expertise</ListItem></Appear>
          </List>
          <Appear>
            <Image src={images.pinkybrain}></Image>
          </Appear>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>Any Questions?</Quote>
            <Cite>Finner</Cite>
          </BlockQuote>
        </Slide>
      </Deck>
    );
  }
}
