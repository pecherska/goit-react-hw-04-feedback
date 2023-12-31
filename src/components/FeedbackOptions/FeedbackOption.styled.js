import styled from 'styled-components';
export const ListFeedbackOption = styled.ul`
  display: flex;
  gap: 10px;
  padding: 15px;
  justify-content: flex-start;
  text-align: center;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  background: rgba(95, 158, 160, 0.308);
`;
export const ButtonFeedback = styled.button`
  align-items: center;
  text-transform: capitalize;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  min-width: 60px;
  background-color: rgb(194, 139, 240);
  padding: 5px;
  &:hover {
    background-color: white;
  }
`;
