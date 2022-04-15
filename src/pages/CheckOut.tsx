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
import Authorize from "../components/Authorize";
import { useGetAttendantsQuery } from "../generated/graphql";

const CheckOut: FC = () => {
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
    <Authorize>
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
    </Authorize>
  );
};

export default CheckOut;
