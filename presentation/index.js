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
  stretch: require('../assets/stretching.jpg'),
  signup: require('../assets/signup.png'),
  calgraph: require('../assets/calorie-graph.png'),
  mealform: require('../assets/meals-form.png'),
  finnerlogo: require('../assets/logo-finner@2x.png')
};

preloader(images);

const theme = createTheme({
  primary: "white",
  secondary: "#000000",
  tertiary: "#f15b2a",
  quartenary: "#26a69a"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={6} textColor="tertiary" caps>The Team</Heading>
          <Text>
            Eugene, Jared, and Rachel
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary">
          <Image src={images.finnerlogo} style={{ width:'200px'}}></Image>
          <Heading>FINNER</Heading>
          <Text margin="10px 0 0" textColor="primary" size={1} bold>
            a better meal planner
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgImage={images.stretch} bgDarken={0.55} textColor="primary" align="flex-start">
          <Heading size={6} textColor="primary" caps>The Problem</Heading>
          <Appear><Text size={5} textColor="primary" style={{textDecoration:'1px solid #f15b2a' }} >Diets suck.</Text></Appear>
          <List style={{padding: '0 6em'}} listStylePosition="inside">
            <Appear><ListItem>The food sucks</ListItem></Appear>
            <Appear><ListItem>The amount sucks</ListItem></Appear>
            <Appear><ListItem>The result sucks</ListItem></Appear>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>The Problem Cont...</Heading>
          <Appear><Text size={9} text color="tertiary">Why does everything suck?</Text></Appear>
          <List listStylePosition="inside" style={{padding: '0 4em'}}>
            <Appear><ListItem>Eating too little</ListItem></Appear>
            <Appear><ListItem>Not tracking progress</ListItem></Appear>
            <Appear><ListItem>Choosing the wrong food</ListItem></Appear>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>Find Your Daily Calories</Heading>
          <List>
            <Image style={{ width: '80%', margin:'0 auto', display: 'block'}} src={images.signup}></Image>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>Track your progress</Heading>
          <List>
            <Image style={{ width: '80%', margin:'0 auto', display: 'block'}} src={images.calgraph}></Image>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>Get the Right Food</Heading>
          <List>
            <Image style={{ width: '80%', margin:'0 auto', display: 'block'}} src={images.mealform}></Image>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>The future</Heading>
          <List style={{padding: '0 6em'}}>
            <Appear><ListItem>Dietary Feedback</ListItem></Appear>
            <Appear><ListItem>Increased Accuracy</ListItem></Appear>
            <Appear><ListItem>Workout Tracking</ListItem></Appear>
            <Appear><ListItem>Individual Expertise</ListItem></Appear>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary">
          
          <Image src={images.finnerlogo} style={{ width:'200px'}}></Image>
          <Heading>FINNER</Heading>
          <Text margin="10px 0 0" textColor="primary" size={1} bold>
            a better meal planner
          </Text>
          <Text textColor="primary" size={5}>
            Eugene, Jared, and Rachel
          </Text>
        </Slide>
      </Deck>
    );
  }
}
