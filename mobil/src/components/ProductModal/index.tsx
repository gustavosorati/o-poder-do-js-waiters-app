import { FlatList, Modal } from 'react-native';
import { products } from '../../mocks/products';
import { Product } from '../../types/Product';
import { formatCurrency } from '../../utils/formatCurrency';
import { Button } from '../Button';
import { Close } from '../Icons/Close';
import { Text } from '../Text';
import { ImageBackground, CloseButton, ModalBody, Header, IngredientsContainer, Ingredient, Footer, FooterContainer, PriceContainer } from './styles';

interface Props {
  visible: boolean;
  onClose: () => void;
  product: Product | null;
  onAddToCart: (product: Product) => void;
}

export function ProductModal({visible, onClose, product, onAddToCart}: Props){

  if(!product) {
    return null;
  }

  function handleAddToCart(){
    onAddToCart(product!);
    onClose();
  }

  return (
    <Modal
      visible={visible}
      animationType="slide"
      // apenas no ios
      presentationStyle="pageSheet"
      onRequestClose={onClose}
    >
      <ImageBackground
        source={{
          uri: `http://localhost:5000/uploads/${product.imagePath}`
        }}
      >
        <CloseButton onPress={onClose}>
          <Close />
        </CloseButton>
      </ImageBackground>

      <ModalBody>
        <Header>
          <Text weight='600' size={24} style={{  marginBottom: 8 }}>{product.name}</Text>
          <Text size={16} color="#666">{product.description}</Text>
        </Header>

        {product.ingredients.length > 0 && (
          <IngredientsContainer>
            <Text weight='600' color="#666">Ingredientes</Text>

            <FlatList
              data={product.ingredients}
              keyExtractor={(ingredient) => ingredient._id}
              showsVerticalScrollIndicator={false}
              style={{marginTop: 16}}
              renderItem={({item: ingredient}) => (
                <Ingredient>
                  <Text>{ingredient.icon}</Text>
                  <Text size={14} color="#666" style={{ marginLeft: 20 }}>{ingredient.name}</Text>
                </Ingredient>
              )}
            />
          </IngredientsContainer>
        )}
      </ModalBody>

      <Footer>
        <FooterContainer>
          <PriceContainer>
            <Text color='#666'>Preço</Text>
            <Text size={20} weight="600">{formatCurrency(product.price)}</Text>
          </PriceContainer>

          <Button onPress={handleAddToCart}>
            Adicionar ao pedido
          </Button>
        </FooterContainer>
      </Footer>
    </Modal>
  );
}
