import {
  Button,
  Container,
  Group,
  Select,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import { useForm, zodResolver } from "@mantine/form";
import { useNotifications } from "@mantine/notifications";
import React from "react";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import {
  ArrowNarrowRight,
  Check,
  Home,
  Mail,
  Phone,
  User,
} from "tabler-icons-react";
import "./form-page.css";
import { formSchema, IForm, inputStyles } from "./Wrapper";

const FormPage = () => {
  const navigate = useNavigate();
  const notifications = useNotifications();

  const formMutation = useMutation(
    async ({
      name,
      email,
      congregation,
      phone,
      privilege,
      referred,
    }: IForm) => {
      const formData = {
        name,
        email,
        congregation,
        phone,
        privilege,
        referred,
      };

      const res = await fetch(
        "https://hooks.zapier.com/hooks/catch/7732174/b8i1icf/",
        {
          method: "POST",
          body: JSON.stringify(formData),
        }
      );

      const final = await res.json();
      return final;
    }
  );

  const form = useForm({
    initialValues: {
      name: "",
      email: "",
      phone: typeof Number,
      congregation: "",
      privilege: "",
      referred: "",
    },
    schema: zodResolver(formSchema),
  });

  return (
    <div className="full-screen">
      <Container>
        <form
          onSubmit={form.onSubmit(async (values) => {
            const id = notifications.showNotification({
              loading: true,
              title: "Form Submitting…",
              message:
                "We're receiving your information right now. Please hold.",
              disallowClose: true,
            });

            const res = await formMutation.mutateAsync({
              name: values.name,
              email: values.email,
              // @ts-ignore
              phone: values.phone,
              congregation: values.congregation,
              privilege: values.privilege,
              referred: values.referred,
            });

            notifications.updateNotification(id, {
              id,
              loading: false,
              title: "Form Submitted",
              message: "Thank you, we got your information.",
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
              {...form.getInputProps("name")}
            />

            <TextInput
              styles={inputStyles}
              label="Email"
              type="email"
              size="md"
              autoComplete="off"
              rightSection={<Mail />}
              {...form.getInputProps("email")}
            />

            <TextInput
              styles={inputStyles}
              label="Phone"
              type="number"
              size="md"
              autoComplete="off"
              rightSection={<Phone />}
              {...form.getInputProps("phone")}
            />

            <Select
              styles={inputStyles}
              label="Congregation"
              size="md"
              autoComplete="off"
              rightSection={<Home />}
              placeholder="Select"
              data={[
                {
                  label: "North Casa Grande",
                  value: "north_casa_grande",
                },
                {
                  label: "West Casa Grande",
                  value: "west_casa_grande",
                },
                {
                  label: "East Casa Grande",
                  value: "east_casa_grande",
                },
                {
                  label: "Coolidge",
                  value: "coolidge",
                },
                {
                  label: "Maricopa",
                  value: "maricopa",
                },
                {
                  label: "Eloy",
                  value: "eloy",
                },
              ]}
              {...form.getInputProps("congregation")}
            />
            <TextInput
              styles={inputStyles}
              label="Who Referred You?"
              size="md"
              autoComplete="off"
              rightSection={<User />}
              {...form.getInputProps("referred")}
            />

            <Select
              styles={inputStyles}
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
    </div>
  );
};

export default FormPage;
