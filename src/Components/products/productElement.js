import React, { useContext } from 'react';
import { ShoppingCartOutlined, PlusOutlined } from '@ant-design/icons';
import {
  Row, Col, Grid, Button,
} from 'antd';
import { ProductsForShoppingCartContext } from '../../Contexts/ProductsForShoppingCartContext';

const { useBreakpoint } = Grid;

export default function ProductElement({
  product,
}) {
  const {
    addProductToShoppingCartContext,
  } = useContext(ProductsForShoppingCartContext);

  const { lg } = useBreakpoint();
  const fontSizeName = lg ? '24px' : '16px';
  const fontSizeDesc = lg ? '18px' : '14px';
  const fontSizeIcon = lg ? '130%' : '80%';
  const fontSizeIco2 = lg ? '80%' : '60%';
  const buttonHeight = lg ? '40px' : '35px';

  return (
    <Row gutter={{
      xs: 8, sm: 16, md: 24, lg: 32,
    }}
    >
      <Col>
        <img src={product.photo} alt="product" width="150px" />
      </Col>
      <Col style={{ flex: '1 0 50%' }}>
        <div style={{ fontSize: fontSizeName }}><b>{product.name}</b></div>
        <div style={{ fontSize: fontSizeDesc }}>{product.description}</div>
      </Col>
      <Col style={{ textAlign: 'right', justifyContent: 'right', flex: '1 0 25%' }}>
        <div style={{ fontSize: fontSizeName }}>
          €
          {' '}
          {product.price}
        </div>
        <Button
          type="primary"
          danger
          data-cy="btnAddToCart"
          onClick={() => addProductToShoppingCartContext(product)}
          style={{
            fontSize: '20px', height: buttonHeight, verticalAlign: '3px',
          }}
        >
          <PlusOutlined style={{ fontSize: fontSizeIco2, verticalAlign: '3px' }} />
          <ShoppingCartOutlined style={{ fontSize: fontSizeIcon, verticalAlign: '3px' }} />
        </Button>
      </Col>
    </Row>
  );
}
