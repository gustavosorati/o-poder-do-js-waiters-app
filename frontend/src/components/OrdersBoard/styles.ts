import styled from 'styled-components';


export const Board = styled.div`
  flex: 1;
  padding: 1rem;
  border: 1px solid rgba(204,204,204, .4);
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;

  > header {
    padding: 8px;
    font-size: .875rem;
    display: flex;
    align-items: center;
    gap: 8px;
  }
`;

export const OrdersContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 24px;

  button {
    background-color: #fff;
    border: 1px solid rgba(204,204,204, .4);
    height: 128px;
    border-radius: 8px;
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 4px;

    & + button {
      margin-top: 24px;
    }

    strong {
      font-weight: 500;
    }

    span {
      font-size: 0.875rem;
      color: #666;
    }
  }
`;
