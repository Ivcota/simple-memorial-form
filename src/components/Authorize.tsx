import {
  Button,
  Container,
  Input,
  InputWrapper,
  Stack,
  Title,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import React, { FC, useState } from "react";

const Authorize: FC = ({ children }) => {
  const [auth, setAuth] = useState(false);

  const form = useForm({
    initialValues: {
      passcode: "",
    },
  });

  if (auth == false) {
    return (
      <Container>
        <form
          onSubmit={form.onSubmit((values) => {
            if (values.passcode === "987123") {
              setAuth(true);
            } else {
              alert("Incorrect");
            }
          })}
        >
          <Stack>
            <Title align="center">Passcode Required</Title>
            <InputWrapper label="Numeric Passcode" mt="lg">
              <Input type="text" {...form.getInputProps("passcode")} />
              <Button type="submit" mt="md">
                Submit
              </Button>
            </InputWrapper>
          </Stack>
        </form>
      </Container>
    );
  }

  return <>{children}</>;
};

export default Authorize;
