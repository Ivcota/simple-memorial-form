import {
  Button,
  Container,
  createStyles,
  Group,
  Space,
  Text,
  Title,
} from "@mantine/core";
import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowNarrowRight } from "tabler-icons-react";

const Home = () => {
  const navigate = useNavigate();

  const { classes } = useStyles();

  return (
    <Container>
      <div className={classes.base}>
        <Group position={"center"} direction={"column"}>
          <Title
            style={{
              fontSize: "2rem",
            }}
          >
            Memorial Attendants
          </Title>
          <Text> You can now check-out and check-in your badge. </Text>
          <Button
            color="blue"
            size="md"
            rightIcon={<ArrowNarrowRight />}
            onClick={() => navigate("/badges/check-out")}
          >
            Start
          </Button>
        </Group>

        <Space h={80} />
      </div>
    </Container>
  );
};

const useStyles = createStyles((theme) => ({
  base: {
    padding: theme.spacing.md,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    minHeight: "100vh",
    justifyContent: "center",
  },
}));

export default Home;
