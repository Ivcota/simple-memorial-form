import { useMutation } from "react-query";
import styled from "styled-components";
import { z } from "zod";

export const inputStyles = {
  input: {
    width: "20rem",
  },
};
export interface IForm {
  name: string;
  email: string;
  phone: number;
  congregation: string;
  privilege: string;
  referred: string;
}

export const formSchema = z.object({
  name: z.string().nonempty({ message: "Your name is required." }),
  email: z.string().email({ message: "Please enter a valid email." }),
  congregation: z
    .string()
    .nonempty({ message: "Your congregation is required." }),
  phone: z
    .string()
    .min(1, { message: "Your phone number is required." })
    .max(11, { message: "This number is too long." }),

  privilege: z.string().nonempty({ message: "Please select one." }),
});
