import React, { FC, useState } from "react";
import { Card, Title, Text, Checkbox, Modal, Button } from "@mantine/core";
import { Attendant, useUpdateBadgeMutation } from "../generated/graphql";
import { useToggle } from "@mantine/hooks";
import { useForm } from "@mantine/form";
import toast from "react-hot-toast";

interface Props {
  attendant: Attendant;
}

const AttendantCard: FC<Props> = ({ attendant }) => {
  const { firstName, lastName, badgeIsCheckedIn } = attendant;

  const [opened, setOpened] = useState(false);
  const [value, toggle] = useToggle(badgeIsCheckedIn, [true, false]);

  const [updateBadgeResult, updateBadge] = useUpdateBadgeMutation();
  const form = useForm({
    initialValues: {
      badgeisCheckedIn: badgeIsCheckedIn,
    },
  });

  return (
    <>
      <Card onClick={() => setOpened(true)} color="red" shadow="sm" my="sm">
        <Title mb="sm" order={5}>
          {firstName} {lastName}
        </Title>
        <Checkbox
          checked={badgeIsCheckedIn as boolean}
          label="Badge Assigned"
        />
      </Card>
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="Change Badge Status"
      >
        <form
          onSubmit={form.onSubmit(async (values) => {
            await toast.promise(
              updateBadge({
                where: {
                  id: attendant.id,
                },
                data: {
                  badgeIsCheckedIn: values.badgeisCheckedIn,
                },
              }),
              {
                error: "Error",
                loading: "Loading..",
                success: "Success",
              }
            );
            setOpened(false);
          })}
        >
          <Title>
            {firstName} {lastName}
          </Title>
          <Checkbox
            mt="md"
            checked={value as boolean}
            onClick={() => toggle()}
            label="Badge Assigned"
            {...form.getInputProps("badgeisCheckedIn")}
          />
          <Button type="submit" color="green" mt="lg">
            Save
          </Button>
        </form>
      </Modal>
    </>
  );
};

export default AttendantCard;
