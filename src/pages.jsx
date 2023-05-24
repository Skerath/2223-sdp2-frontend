import { useParams } from 'react-router';
import React from 'react';
import PageNotFoundAlert from './Components/PageNotFoundAlert';
import ProductsList from './Components/products/ProductsList';
import SingleProduct from './Components/products/SingleProduct';
import NotificationsOverview from './features/notifications';

export function NotFoundPage() {
  return (
    <main>
      <PageNotFoundAlert />
    </main>
  );
}

export function ProductsPage() {
  return (
    <main>
      <ProductsList />
    </main>
  );
}

export function ProductOverviewPage() {
  const { productId } = useParams();

  return (
    <main>
      <SingleProduct productId={productId} />
    </main>
  );
}

export function Notifications() {
  return (
    <div>
      <NotificationsOverview />
    </div>
  );
}
