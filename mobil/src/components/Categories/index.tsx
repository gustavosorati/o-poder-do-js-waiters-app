import { FlatList } from 'react-native';
import { Category, Icon } from './styles';
import { Text } from '../Text';
import { useState } from 'react';
import { Category  as ICategory } from '../../types/Category';

interface Props {
  categories: ICategory[]
  onSelectCategory: (categoryId: string) => Promise<void>;
}


export function Categories({categories, onSelectCategory}: Props) {
  const [selectedCategory, setSelectedCategory] = useState('');

  async function handleSelectCategory(categoryId: string) {
    const category = selectedCategory === categoryId ? '' : categoryId;

    onSelectCategory(category);
    setSelectedCategory(category);
  }

  return (
    <>
      <FlatList
        data={categories}
        keyExtractor={(category) => category._id}
        renderItem={({item: category}) => {
          const isSelected = selectedCategory === category._id;

          return (
            <Category onPress={() => handleSelectCategory(category._id)}>
              <Icon>
                <Text opacity={isSelected ? 1 : 0.5}>{category.icon}</Text>
              </Icon>
              <Text size={14} weight="600" opacity={isSelected ? 1 : 0.5}>{category.name}</Text>
            </Category>
          );
        }}
        horizontal
        contentContainerStyle={{paddingRight: 24}}
        showsHorizontalScrollIndicator
      />
    </>
  );
}
