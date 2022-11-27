import { ReactNode } from 'react';
import { Container } from './styles';
import { Text } from '../Text';
import { ActivityIndicator } from 'react-native';

interface Props {
  children: ReactNode;
  onPress: () => void;
  disabled?: boolean;
  loading?: boolean;
}

export function Button({children, onPress, disabled, loading}: Props) {


  return (
    <Container onPress={onPress} disabled={disabled || loading}>
      {!loading && (
        <Text size={16} weight="600" color="#fff">{children}</Text>
      )}

      {loading && (
        <ActivityIndicator color="fff" />
      )}
    </Container>
  );
}
