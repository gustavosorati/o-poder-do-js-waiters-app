import { useState } from 'react';
import { toast } from 'react-toastify';
import { Order } from '../../types/Order';
import { api } from '../../utils/api';
import { OrderModal } from '../OrderModal';
import { Board, OrdersContainer } from './styles';


interface Props {
  icon: string;
  title: string;
  orders: Order[];
  onCancelOrder: (orderId: string) => void;
  onChangeOrderStatus: (orderId: string, status: Order['status']) => void;
}

export function OrdersBoard({icon, title, orders, onCancelOrder, onChangeOrderStatus}: Props) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
  const [isLoading, setIsLoading] = useState(false);


  function handleOpenOrderModal(order: Order) {
    setIsModalVisible(true);
    setSelectedOrder(order);
  }

  function handleCloseModal() {
    setIsModalVisible(false);
    setSelectedOrder(null);
  }

  async function handleChangeOrderStatus() {
    if(!selectedOrder) return;
    setIsLoading(true);

    const newStatus = selectedOrder.status === 'WAITING'
      ? 'IN_PRODUCTION'
      : 'DONE';

    await api.patch(`/orders/${selectedOrder._id}`, { status: newStatus});
    onChangeOrderStatus(selectedOrder._id, newStatus);
    toast.success(`O pedido da mesa ${selectedOrder.table} teve o status alterado`);
    setIsLoading(false);
    setIsModalVisible(false);
  }

  async function handleCancelOrder() {
    if(!selectedOrder) return;

    setIsLoading(true);

    await api.delete(`/orders/${selectedOrder._id}`);

    toast.success(`O pedido da mesa ${selectedOrder.table} foi cancelado`);
    onCancelOrder(selectedOrder._id);
    setIsLoading(false);
    setIsModalVisible(false);
  }

  return (
    <Board>
      <OrderModal
        visible={isModalVisible}
        order={selectedOrder}
        onClose={handleCloseModal}
        onCancelOrder={handleCancelOrder}
        onOrderChangeStatus={handleChangeOrderStatus}
        isLoading={isLoading}

      />

      <header>
        <span>{icon}</span>
        <strong>{title}</strong>
        <span>{orders.length}</span>
      </header>

      {orders.length > 0 && (
        <OrdersContainer>
          {orders.map(((order, index) => (
            <button type='button' key={index} onClick={() => handleOpenOrderModal(order)}>
              <strong>Mesa {order.table}</strong>
              <span>{order.products.length} itens</span>
            </button>
          )))}
        </OrdersContainer>
      )}
    </Board>
  );
}
