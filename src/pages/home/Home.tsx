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
import "./home.css";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="full-screen full-screen--flex-column ">
      <Container>
        <Card>
          <Group position={"center"} direction={"column"}>
            <Center>
              <Title>Memorial Attendants</Title>
            </Center>

            <Center>
              <Text>Please complete the attendant registration form.</Text>
            </Center>

            <Center>
              <Button
                classNames={{ root: "bg-blue-400" }}
                size="md"
                rightIcon={<ArrowNarrowRight />}
                onClick={() => navigate("/form")}
              >
                Register
              </Button>
            </Center>
          </Group>
        </Card>
        <Space h={80} />
      </Container>
    </div>
  );
};

export default Home;
