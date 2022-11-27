import { StatusBar } from 'expo-status-bar';
import { Modal } from 'react-native';
import { CheckCircle } from '../Icons/CheckCircle';
import { Text } from '../Text';
import { Container, OkButton } from './styles';

interface Props {
  visible: boolean;
  onClose: () => void;
}

export function OrderConfirmedModal({visible, onClose}: Props) {

  return (
    <Modal
      visible={visible}
      animationType="fade"
    >
      <StatusBar style='light' />

      <Container>
        <CheckCircle />
        <Text size={20} weight="600" color="#fff" style={{ marginTop: 12, marginBottom: 4}}>Pedido confirmado</Text>
        <Text color='#fff' opacity={0.9}>O pedido já entá na fila em produção!</Text>

        <OkButton onPress={onClose}>
          <Text color='#d73035' weight='600'>OK</Text>
        </OkButton>
      </Container>

    </Modal>

  );
}
