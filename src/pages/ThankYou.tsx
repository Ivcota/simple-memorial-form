import {
  Container,
  Title,
  Text,
  Center,
  Space,
  Mark,
  createStyles,
} from "@mantine/core";
import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  min-height: 100vh;
`;

const ThankYou = () => {
  return (
    <Wrapper>
      <Container>
        <Center>
          <Title> Thank You! </Title>
        </Center>
        <Space h={"md"} />
        <Text>
          We appreciate your willingness to help during this special event.{" "}
          <Mark>
            You'll be receiving correspondence through the email and phone
            number you provided.
          </Mark>
        </Text>
      </Container>
    </Wrapper>
  );
};

export default ThankYou;
