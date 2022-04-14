import { Center, Container, Mark, Space, Text, Title } from "@mantine/core";
import React from "react";

const ThankYou = () => {
  return (
    <Container size="sm">
      <Center>
        <Title> Thank You! </Title>
      </Center>
      <Space h={"md"} />
      <Text align="center">
        We appreciate your willingness to help during this special event.
        <Mark>
          You'll be receiving correspondence through the email and phone number
          you provided.
        </Mark>
      </Text>
    </Container>
  );
};

export default ThankYou;
