import styled from 'styled-components';

export const Overlay = styled.div`
  left: 0px;
  top: 0px;
  background-color: rgba(0,0,0,.8);
  backdrop-filter: blur(4.5px);
  width: 100%;
  height: 100%;
  position: fixed;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalBody = styled.div`
  background-color: #fff;
  width: 480px;
  border-radius: 8px;
  padding: 2rem;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    strong {
      font-size: 1.5rem;
    }

    button {
      border: 0;
      background-color: transparent;
      display: flex;
    }
  }

  .status-container {
    margin-top: 2rem;

    small {
      opacity: .8;
      font-size: .875rem;
    }

    div {
      display: flex;
      align-items: center;
      gap: 8px;
      margin-top: 8px;
    }
  }
`;

export const OrderDetails = styled.div`
  margin-top: 2rem;

  > strong {
    font-weight: 500;
    font-size: .875rem;
    opacity: .8;
  }

  .order-items {
    margin-top: 1rem;

    .item {
      display: flex;

      & + item {
        margin-top: 1rem;
      }

      img {
        border-radius: 6px;
      }

      .quantity {
        font-size: .875rem;
        color: #666;
        display: block;
        min-width: 20px;
        margin-left: 12px;
      }

      .product-details {
        margin-left: 4px;

        strong {
          display: block;
          margin-bottom: 4px;
        }

        span {
          font-size: .875rem;
          color: #666;
        }
      }
    }

    .total {
      display: flex;
      align-items: center;
      justify-content: space-between;

      margin-top: 24px;

      span {
        font-weight: 500;
        font-size: .875rem;
        opacity: 0.8;
        color: #666;
      }
    }
  }

`;

export const Actions = styled.footer`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 8px;

  .primary {
    border: 0;
    background-color: #333;
    color: #fff;
    border-radius: 48px;
    padding: 12px 24px;

    display: flex;
    align-items: center;
    gap: 8px;
  }

  .secondary {
    padding: 14px 24px;
    color: #d73035;
    font-weight: bold;
    border: 0;
    background-color: transparent;
  }
`;
