import styled from "styled-components";

export const Main = styled.main`
  width: 100%;
  padding: 0.3rem;

  border-radius: 5px;
  display: flex;
  flex-direction: column;
`;
export const MainTarefas = styled(Main)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const MainInput = styled(Main)`
  flex-direction: row;
  margin-bottom: 0.5rem;
  background: rgb(36, 35, 35);
`;
export const MainDetails = styled(Main)`
  gap: 1rem;
  align-items: center;
  background: rgb(36, 35, 35);
`;
