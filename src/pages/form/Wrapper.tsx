import styled from "styled-components";

export const Wrapper = styled.div`
  min-height: 100vh;
`;
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
}
