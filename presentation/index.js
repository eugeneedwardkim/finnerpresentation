// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
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
  pinkybrain: require("../assets/pink-n-brain-todolist.jpg")
};

preloader(images);

const theme = createTheme({
  primary: "white",
  secondary: "#000000",
  tertiary: "#ef6c00",
  quartenary: "#26a69a",
  mediumgray: "#666"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Finner
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            a health and wellness app that creates a custom menu and counts your calories
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="mediumgray">
          <Heading size={6} textColor="primary" caps>The Vision</Heading>
          <Text size={6} textColor="secondary">An app that can...</Text>
          <List>
            <Appear><ListItem>Count your calories</ListItem></Appear>
            <Appear><ListItem>Provide a meal plan based on dietary restrictions</ListItem></Appear>
            <Appear><ListItem>Rule the world</ListItem></Appear>
          </List>
          <Appear>
            <Image src={"../assets/pink-n-brain-todolist.jpg"}></Image>
          </Appear>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>The Features So far:</Heading>
          <List>
            <Appear><ListItem>Count your calories</ListItem></Appear>
            <Appear><ListItem>Provide a meal plan based on dietary restrictions</ListItem></Appear>
          </List>
          
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>Now we bow</Quote>
            <Cite>FINNER</Cite>
          </BlockQuote>
        </Slide>
      </Deck>
    );
  }
}
