import { OrdersBoard } from '../OrdersBoard';
import { Container } from './styles';

const orders = [
  {
    '_id': 'string',
    'table': 'string',
    'status': 'WAITING',
    'products': [
      {
        '_id': 'string',
        'quantity': 'string',
        'product': {
          'name': 'string',
          'imagePath': 'string',
          'price': 4,
        }
      },
    ]
  },
  {
    '_id': 'string',
    'table': 'string',
    'status': 'string',
    'products': [
      {
        '_id': 'string',
        'quantity': 'string',
        'product': {
          'name': 'string',
          'imagePath': 'string',
          'price': 4,
        }
      },
    ]
  },
];

export function Orders(){
  return (
    <Container>

      <OrdersBoard icon='🧭' title="Fila de Espera" orders={orders} />
      <OrdersBoard icon='👩‍🍳' title="Em preparação" orders={[]} />
      <OrdersBoard icon='✔' title="Concluído" orders={[]} />

    </Container>
  );
}
