import { View, Text } from "react-native";
import React from "react";
import { styled } from "styled-components";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const StyledText = styled.Text`
  font-size: 30px;
`;

export const Home = () => {
  return (
    <Container>
      <StyledText>Home</StyledText>
    </Container>
  );
};

export const Commuity = () => {
  return (
    <Container>
      <StyledText>Commuity</StyledText>
    </Container>
  );
};

export const Chat = () => {
  return (
    <Container>
      <StyledText>Chat</StyledText>
    </Container>
  );
};

export const Setting = () => {
  return (
    <Container>
      <StyledText>Setting</StyledText>
    </Container>
  );
};
