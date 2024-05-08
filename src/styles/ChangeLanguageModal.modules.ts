import styled from "styled-components";
import Button, { ButtonProps } from "react-bootstrap/Button";
import { Form } from "react-bootstrap";

type ApplyButtonProps = ButtonProps;

export const ApplyButton = styled(Button)<ApplyButtonProps>`
  font-size: 15px;
`;

export const FormCheck = styled(Form.Check)`
  display: flex;
  align-items: center;
  .form-check-input {
    width: 25px;
    height: 25px;
    margin-bottom: 4px;
    &:checked {
      background-color: green;
    }
  }
  .form-check-label {
    margin-left: 10px;
    font-size: 20px;
  }
`;
