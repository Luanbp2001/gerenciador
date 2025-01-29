import styled from "styled-components";

export const Input = styled.input`
  margin: 0 auto;
  width: 100%;
  padding: 0.5rem;
  background: rgb(217, 217, 217);
  border: none;
  outline: none;
  color: black;
  font-size: 1rem;
  border-radius: 5px;
`;
export const Textarea = styled.textarea`
  background: rgb(217, 217, 217);
  border-radius: 5px;
  resize: none;
  outline: none;
  border: none;
  padding: 0.5rem;
  font-size: 1rem;
  word-spacing: -3px;
  &::placeholder {
    letter-spacing: -1px;
    font-size: 1rem;
    word-spacing: -3px;
  }
`;
