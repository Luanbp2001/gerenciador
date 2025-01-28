import styled from "styled-components";

export const Button = styled.button`
  width: 80%;
  background: black;
  color: white;
  font-weight: 500;
  font-size: 1rem;
  letter-spacing: 0.6px;
  padding: 0.5rem;
  transition: 0.01s linear;
  &:hover {
    background: rgb(15, 15, 15);
  }
  cursor: pointer;
  border-radius: 2px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: start;
  border: none;
  outiline: none;
`;

export const ButtonDetails = styled(Button)`
  width: 10%;
  margin-left: 1%;
  background: rgb(0, 0, 0);
  text-align: center;
  border: none;
`;

export const DeletTask = styled(Button)`
  width: 10%;
  margin-left: 1%;
  background: rgb(0, 0, 0);
  color: white;
  text-align: center;
  border: none;
`;
export const ButtonAdd = styled(Button)`
  width: 10%;
  margin-left: 1%;
  background: rgb(78, 75, 75);
  text-align: center;
  border: none;
`;
export const ButtonBack = styled(Button)`
  border-radius: 50%;
  width: 80px;
  height: 80px;
  margin-top: 1rem;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
`;
