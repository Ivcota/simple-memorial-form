import {
  Card,
  Container,
  Title,
  Text,
  InputWrapper,
  Input,
} from "@mantine/core";
import React, { FC, useState } from "react";
import { AttendantCard } from "../components";
import { useGetAttendantsQuery } from "../generated/graphql";

const CheckIn: FC = () => {
  const [lastName, setLastName] = useState("");
  useState;

  const [attendants] = useGetAttendantsQuery({
    variables: {
      where: {
        lastName: {
          contains: lastName,
        },
      },
    },
  });

  return (
    <Container>
      <Title>Memorial Badges</Title>

      <InputWrapper
        label="Enter Your Last Name"
        description="Input is case sensitive"
      >
        <Input
          onChange={(e: any) => {
            setLastName(e.target.value);
          }}
        />
      </InputWrapper>

      {attendants.data?.attendants?.map((attendant) => {
        return (
          <AttendantCard key={attendant.id} attendant={attendant as any} />
        );
      })}
    </Container>
  );
};

export default CheckIn;
