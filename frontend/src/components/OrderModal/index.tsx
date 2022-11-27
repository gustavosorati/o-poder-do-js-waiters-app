import { Overlay, ModalBody, OrderDetails, Actions } from './styles';
import closeIcon from '../../assets/images/close-icon.svg';
import { Order } from '../../types/Order';
import { formatCurrency } from '../../utils/formatCurrency';
import { useEffect, useRef } from 'react';

interface Props {
  visible: boolean;
  isLoading: boolean;
  order: Order | null;
  onClose: () => void;
  onCancelOrder: () => Promise<void>;
  onOrderChangeStatus: () => Promise<void>;
}

export function OrderModal({visible, isLoading, order, onClose, onCancelOrder, onOrderChangeStatus}: Props) {
  const ref = useRef<HTMLDivElement>(null);

  function handleClick(event: MouseEvent) {
    if(ref?.current && !ref.current.contains(event.target as Node)) {
      onClose();
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleClick, true);
    return () => {
      document.removeEventListener('click', handleClick, true);
    };
  }, []);

  if(!visible || !order) {
    return null;
  }

  const total = order.products.reduce((total, {product, quantity}) => {
    return total + (product.price * quantity);
  }, 0);

  return (
    <Overlay>
      <ModalBody ref={ref}>
        <header>
          <strong>Mesa {order.table}</strong>
          <button onClick={onClose}>
            <img src={closeIcon} alt="" />
          </button>
        </header>

        <div className="status-container">
          <small>Status do Pedido</small>
          <div>
            <span>
              {order.status === 'WAITING' && '🧭' }
              {order.status === 'IN_PRODUCTION' && '👩‍🍳' }
              {order.status === 'DONE' && '✔' }
            </span>

            <strong>
              <span>
                {order.status === 'WAITING' && 'Fila de espera' }
                {order.status === 'IN_PRODUCTION' && 'Em preparação' }
                {order.status === 'DONE' && 'Pronto!' }
              </span>
            </strong>
          </div>
        </div>

        <OrderDetails>
          <strong>Itens</strong>

          {order.products.map(({_id, product, quantity}) => (
            <div className="item" key={_id}>
              <img src={`http://localhost:5000/uploads/${product.imagePath}`} alt="" width={70} height={45} />

              <span className="quantity">{quantity}x</span>

              <div className='product-details'>
                <strong>{product.name}</strong>
                <span>{formatCurrency(product.price)}</span>
              </div>
            </div>
          ))}

          <div className="total">
            <span>Total</span>
            <strong>{formatCurrency(total)}</strong>
          </div>


        </OrderDetails>

        <Actions>
          {order.status !== 'DONE' && (
            <button
              className="primary"
              disabled={isLoading}
              onClick={onOrderChangeStatus}
            >
              <span>
                {order.status === 'WAITING' && '👩‍🍳'}
                {order.status === 'IN_PRODUCTION' && '✔'}
              </span>
              <span>
                {order.status === 'WAITING' && 'Iniciar Produção'}
                {order.status === 'IN_PRODUCTION' && 'Concluir pedido'}
              </span>
            </button>
          )

          }

          <button
            className="secondary"
            onClick={onCancelOrder}
            disabled={isLoading}
          >
            <span>Cancelar Pedido</span>
          </button>
        </Actions>
      </ModalBody>
    </Overlay>
  );
}
