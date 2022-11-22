import { useState } from 'react';
import { Order } from '../../types/Order';
import { OrderModal } from '../OrderModal';
import { Board, OrdersContainer } from './styles';

interface Props {
  icon: string;
  title: string;
  orders: Order[];
}

export function OrdersBoard({icon, title, orders}: Props) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);

  function handleOpenOrderModal(order: Order) {
    setIsModalVisible(true);
    setSelectedOrder(order);
  }

  function handleCloseModal() {
    setIsModalVisible(false);
    setSelectedOrder(null);
  }

  return (
    <Board>
      <OrderModal visible={isModalVisible} order={selectedOrder} onClose={handleCloseModal} />

      <header>
        <span>{icon}</span>
        <strong>{title}</strong>
        <span>{orders.length}</span>
      </header>

      {orders.length > 0 && (
        <OrdersContainer>
          {orders.map(((order, index) => (
            <button type='button' key={index} onClick={() => handleOpenOrderModal(order)}>
              <strong>Mesa 2</strong>
              <span>2 itens</span>
            </button>
          )))}
        </OrdersContainer>
      )}
    </Board>
  );
}
