import React from "react";
import {
  Button,
  Card,
  Center,
  Container,
  Group,
  Space,
  Text,
  Title,
} from "@mantine/core";
import { ArrowNarrowRight } from "tabler-icons-react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Home = () => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <Container>
        <Card>
          <Group position={"center"} direction={"column"}>
            <Center>
              <Title>AZ Attendant</Title>
            </Center>

            <Center>
              <Text>Attendant application form made simple...</Text>
            </Center>

            <Center>
              <Button
                size="md"
                rightIcon={<ArrowNarrowRight />}
                onClick={() => navigate("/form")}
              >
                Get Started
              </Button>
            </Center>
          </Group>
        </Card>
        <Space h={80} />
      </Container>
    </Wrapper>
  );
};

export default Home;
