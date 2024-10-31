import { useState } from "react";
import ProductList from "./Product";
import Product_Add from "./Product_Add";
import Product_Detail from './Product_Detail';
import Product_Search from "./Product_Search";
import { BottomNavigation, Text, Title } from "react-native-paper";
import { SafeAreaProvider } from 'react-native-safe-area-context';

const App = () => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'ProductList', title: 'Products', focusedIcon: 'folder' },
    { key: 'Product_Add', title: 'Add', focusedIcon: 'folder' },
    { key: 'Product_Search', title: 'Search', focusedIcon: 'find' },
    { key: 'Product_Detail', title: 'Detail', focusedIcon: 'calendar' },
  ])
  const renderScene = BottomNavigation.SceneMap({
    ProductList: ProductList,
    Product_Add: Product_Add,
    Product_Search: Product_Search,
    Product_Detail: Product_Detail,
  });
  return (
    <SafeAreaProvider>
      <BottomNavigation
        navigationState={{ index, routes }}
        onIndexChange={setIndex}
        renderScene={renderScene}
      />
    </SafeAreaProvider>


  )
};

export default App



