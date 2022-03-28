import { useForm } from "@mantine/form";
import { useNotifications } from "@mantine/notifications";
import React from "react";
import { useMutation } from "react-query";
import {
  ArrowNarrowRight,
  Check,
  Home,
  Mail,
  Phone,
  User,
} from "tabler-icons-react";
import {
  Button,
  Container,
  Group,
  Select,
  TextInput,
  Title,
  Text,
} from "@mantine/core";
import "./form-page.css";
import { useNavigate } from "react-router-dom";
import { IForm, Wrapper, inputStyles } from "./Wrapper";

const FormPage = () => {
  const navigate = useNavigate();
  const mutation = useMutation(
    async ({ name, email, congregation, phone, privilege }: IForm) => {
      const formData = { name, email, congregation, phone, privilege };

      const res = await fetch(
        "https://hooks.zapier.com/hooks/catch/4153138/b8beywe/",
        {
          method: "POST",
          body: JSON.stringify(formData),
        }
      );

      const final = await res.json();
      return final;
    }
  );

  const notifications = useNotifications();

  const form = useForm({
    initialValues: {
      name: "",
      email: "",
      phone: typeof Number,
      congregation: "",
      privilege: "",
    },
    validate: {
      phone: (value) => (value.length > 11 ? "Number is too long" : null),
    },
  });

  return (
    <Wrapper>
      <Container>
        <form
          onSubmit={form.onSubmit(async (values) => {
            const id = notifications.showNotification({
              loading: true,
              title: "Hold on...",
              message: "We're getting your submission...",
              disallowClose: true,
            });

            const res = await mutation.mutateAsync({
              name: values.name,
              email: values.email,
              // @ts-ignore
              phone: values.phone,
              congregation: values.congregation,
              privilege: values.privilege,
            });

            notifications.updateNotification(id, {
              id,
              loading: false,
              title: "We got it!",
              message: "Thank you!",
              icon: <Check />,
            });
            navigate("/thank-you");
          })}
        >
          <Group direction={"column"} align={"center"} grow>
            <Group position="center" direction="column">
              <Title>Attendant Form</Title>
              <Text>
                Please confirm your availability to be used as an attendant at
                the 2022 memorial.
              </Text>
            </Group>

            <TextInput
              styles={inputStyles}
              label="First & Last Name"
              rightSection={<User />}
              size="md"
              autoComplete="off"
              required
              {...form.getInputProps("name")}
            />

            <TextInput
              styles={inputStyles}
              label="Email"
              type="email"
              size="md"
              autoComplete="off"
              rightSection={<Mail />}
              required
              {...form.getInputProps("email")}
            />

            <TextInput
              styles={inputStyles}
              required
              label="Phone"
              type="number"
              size="md"
              autoComplete="off"
              rightSection={<Phone />}
              {...form.getInputProps("phone")}
            />

            <TextInput
              styles={inputStyles}
              label="Congregation"
              size="md"
              autoComplete="off"
              rightSection={<Home />}
              required
              {...form.getInputProps("congregation")}
            />

            <Select
              styles={inputStyles}
              required
              label="Privilage"
              placeholder="Select"
              size="md"
              data={[
                {
                  label: "Elder",
                  value: "elder",
                },
                {
                  label: "Ministerial Servant",
                  value: "ms",
                },
                {
                  label: "Publisher",
                  value: "publisher",
                },
              ]}
              {...form.getInputProps("privilege")}
            />

            <Button type="submit" size="md" rightIcon={<ArrowNarrowRight />}>
              Submit
            </Button>
          </Group>
        </form>
      </Container>
    </Wrapper>
  );
};

export default FormPage;
