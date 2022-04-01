import { Center, Container, Mark, Space, Text, Title } from "@mantine/core";
import React from "react";

const ThankYou = () => {
  return (
    <div className="full-screen">
      <Container>
        <Center>
          <Title> Thank You! </Title>
        </Center>
        <Space h={"md"} />
        <Text>
          We appreciate your willingness to help during this special event.
          <Mark>
            You'll be receiving correspondence through the email and phone
            number you provided.
          </Mark>
        </Text>
      </Container>
    </div>
  );
};

export default ThankYou;
