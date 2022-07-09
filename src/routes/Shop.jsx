import { Routes, Route } from 'react-router-dom';
import CategriesPreview from './CategoriesPreview';
import Category from './Category';

import './Shop.scss';

const Shop = () => {
  return (
    <Routes>
      <Route index element={<CategriesPreview />} />
      <Route path=':category' element={<Category />} />
    </Routes>
  );
};

export default Shop;
