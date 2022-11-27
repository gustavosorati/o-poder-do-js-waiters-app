import { useState } from 'react';
import { FlatList } from 'react-native';
import { Product } from '../../types/Product';
import { formatCurrency } from '../../utils/formatCurrency';
import { PlusCircle } from '../Icons/PlusCircle';
import { ProductModal } from '../ProductModal';
import { Text } from '../Text';
import { ProductImage, Product as ProductContainer, ProductDetails, Separator, AddToCartButton } from './styles';

interface Props {
  onAddToCart: (product: Product) => void;
  products: Product[];
}

export function Menu({onAddToCart, products}: Props) {
  const [isModalVisible, setIsVisibleModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  function handleOpenModal(product: Product) {
    setIsVisibleModal(true);
    setSelectedProduct(product);
  }

  return (
    <>
      <FlatList
        style={{marginTop: 32}}
        contentContainerStyle={{paddingHorizontal: 24}}
        ItemSeparatorComponent={Separator}
        data={products}
        keyExtractor={(product) => product._id}
        renderItem={({item: product}) => (
          <ProductContainer onPress={() => handleOpenModal(product)}>
            <ProductImage
              source={{
                uri:`http://localhost:5000/uploads/${product.imagePath}`
              }}
            />

            <ProductDetails>
              <Text weight='600'>{product.name}</Text>
              <Text color='#666' size={14} style={{marginVertical: 8}}>{product.description}</Text>
              <Text color='#333' size={14} weight='600'>{formatCurrency(product.price)}</Text>
            </ProductDetails>

            <AddToCartButton onPress={() => onAddToCart(product)}>
              <PlusCircle  />
            </AddToCartButton>
          </ProductContainer>
        )}
      />

      <ProductModal
        visible={isModalVisible}
        onClose={() => setIsVisibleModal(false)}
        product={selectedProduct}
        onAddToCart={onAddToCart}
      />
    </>
  );
}
