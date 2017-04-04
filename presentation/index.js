// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Layout,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text
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
  markdown: require("../assets/markdown.png")
};

preloader(images);

const theme = createTheme({
  primary: "#262828",
  secondary: "#f9fff9",
  tertiary: "#949e94",
  quartenary: "#CECECE"
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
            The Finner Application
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={5} bold>
            the fitness meal planner
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" align="flex-start flex-start">
          <Heading fit textColor="secondary" >MEET THE TEAM</Heading>
            <Layout fit align="flex-start">
              <Text size={6} textColor="tertiary">Rachel Engle</Text>
              <Text size={9} textColor="secondary">Star CSS programmer</Text>
            </Layout>
            <Layout fill>
              <Text size={6} textColor="tertiary">Jared Nalwalker</Text>
              <Text size={9} textColor="secondary">JS Wizz that does it all</Text>
            </Layout>
            <Layout>
              <Text size={6} textColor="tertiary">Eugene Kim</Text>
              <Text size={9} textColor="secondary">That one guy that helped</Text>
            </Layout>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>Standard List</Heading>
          <List>
            <ListItem>Item 1</ListItem>
            <ListItem>Item 2</ListItem>
            <ListItem>Item 3</ListItem>
            <ListItem>Item 4</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>Example Quote</Quote>
            <Cite>Author</Cite>
          </BlockQuote>
        </Slide>
      </Deck>
    );
  }
}
