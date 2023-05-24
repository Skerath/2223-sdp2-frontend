import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ConfigProvider, Layout, theme } from 'antd';
import {
  NotFoundPage, ProductOverviewPage, ProductsPage, TrackingPage, FinishingOrderPage, Notifications,
} from './pages';
import ScrollToTop from './Contexts/ScrollToTop';
import Navbar from './Components/navbar/navbar';
import ShoppingCart from './Components/ShoppingCart/ShoppingCart';
import OrdersOverview from './features/OrderOverview';
import AuthLanding from './Components/authentication/AuthLanding';
import SingleOrderOverview from './features/SingleOrderOverview/SingleOrderOverview';
import ProfileOverview from './Components/profile/ProfileOverview';
import FooterElement from './Components/Footer';
import './App.css';

function App() {
  return (
    <Layout>
      <Navbar />
      <ConfigProvider theme={{ algorithm: theme.defaultAlgorithm, token: { colorPrimary: '#EC4242' } }}>
        <Routes>
          <Route index element={<ProductsPage />} />
          <Route path="/home" element={<ProductsPage />} />
          <Route path="/track/:tCode?/:vCode?" element={<TrackingPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/product/:productId" element={<ProductOverviewPage />} />
          <Route path="/profile" element={<ProfileOverview />} />
          <Route path="/shoppingCart" element={<ShoppingCart />} />
          <Route path="/finishingOrder" element={<FinishingOrderPage />} />
          <Route path="/orders" element={<OrdersOverview />} />
          <Route path="/login" element={<AuthLanding />} />
          <Route path="/orders/:orderId" element={<SingleOrderOverview />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </ConfigProvider>
      <FooterElement />
      <ScrollToTop />
    </Layout>
  );
}

export default App;
