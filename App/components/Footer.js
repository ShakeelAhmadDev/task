import React, { Component } from 'react';
import { Container, Header, Content, Footer, FooterTab, Button, Icon } from 'native-base';
export default class FooterTabs extends Component {
  render() {
    return (
      <Container>
        <Footer>
          <FooterTab style={{backgroundColor:"#FFF"}}>
            <Button active>
              <Icon name="menu" />
            </Button>
            <Button>
              <Icon name="search" />
            </Button>
            <Button>
              <Icon active name="camera" />
            </Button>
            <Button>
              <Icon name="plus" />
            </Button>
            <Button>
              <Icon name="person" />
            </Button>
          </FooterTab>
        </Footer>
        </Container>
    );
  }
}