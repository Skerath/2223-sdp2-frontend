import React, {
  useCallback, useContext, useEffect, useState,
} from 'react';

import {
  List, Col, Row, Grid, Empty, Button,
} from 'antd';
import { NavLink } from 'react-router-dom';
import { ProductsForShoppingCartContext } from '../../Contexts/ProductsForShoppingCartContext';
import Error from '../Error';
import Loader from '../Loader';
import ShoppingCartContent from './ShoppingCartContent';
import ShoppingCartOverview from './ShoppingCartOverview';
import useProducts from '../../api/productService';

const { useBreakpoint } = Grid;

export default function ShoppingCart() {
  const {
    productsFromContext,
  } = useContext(ProductsForShoppingCartContext);
  const { lg } = useBreakpoint();

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const [myCart, setCart] = useState(null);
  const productApi = useProducts();

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        setLoading(true);
        setError(null);
        if (productsFromContext.length === 0) {
          setCart([]);
        } else {
          const data = await productApi.getByIds(productsFromContext);
          setCart(data);
        }
      } catch (error2) {
        setError(error2);
      } finally {
        setLoading(false);
      }
    };
    fetchCartItems();
  }, [productsFromContext]);

  const handleView = useCallback(async (nameToView) => {
    try {
      setError(null);
      await productApi.getByName(nameToView);
    } catch (err) {
      setError(err);
    }
  }, []);
  if (!myCart || myCart.length === 0) {
    return (
      <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description="There are no items in your shopping cart">
        <NavLink to="/products"><Button type="primary">Continue shopping</Button></NavLink>
      </Empty>
    );
  }

  const phoneFormatItemList = lg ? '18' : '24';
  const phoneFormatOverView = lg ? '6' : '24';
  const phoneFormatPaddingItemList = lg ? '40px 20px 40px 40px' : '20px';
  const phoneFormatPaddingOverView = lg ? '40px 40px 40px 20px' : '20px';

  return (
    <Row>
      <Col span={phoneFormatItemList} style={{ padding: phoneFormatPaddingItemList }}>
        <Loader loading={loading} />
        <Error error={error} />
        <div>
          <List
            bordered
            style={{ backgroundColor: 'white' }}
            dataSource={myCart}
            data-cy="shoppingCart"
            pagination={{
              align: 'center',
              pageSize: 10,
            }}
            renderItem={(item) => (

              <List.Item key={item.productId} style={{ display: 'block' }}>
                {!loading && !error ? <ShoppingCartContent cart={item} onView={handleView} context={ProductsForShoppingCartContext} />
                  : null}
              </List.Item>
            )}
          />
        </div>
      </Col>
      <Col span={phoneFormatOverView} style={{ padding: phoneFormatPaddingOverView }}>
        <ShoppingCartOverview cart={myCart} context={ProductsForShoppingCartContext} />
      </Col>
    </Row>
  );
}
