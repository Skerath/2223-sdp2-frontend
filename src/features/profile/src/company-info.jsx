import {
  Col, Row, Card, Grid,
} from 'antd';

const { useBreakpoint } = Grid;

export default function CompanyInfo({ companyInformation }) {
  const { lg } = useBreakpoint();

  const imgFormat = lg ? '180px' : '90px';

  return (
    <Card title="Company information" data-cy="companyInfo">
      <Row>
        <Col span={6} xs={15} lg={6}>
          <p data-cy="companyInfoSupplierName">
            {companyInformation.supplier_name}
            <div data-cy="companyInfoSupplierEmail">{companyInformation.supplier_email}</div>
            {companyInformation.supplier_phone_number}
          </p>
        </Col>
        <Col span={6} xs={15} lg={6}>
          <p>
            {companyInformation.delivery_street}
            &nbsp;
            {companyInformation.delivery_house_number}
            &nbsp;
            {companyInformation.delivery_box}
            <br />
            {companyInformation.delivery_postal_code}
            &nbsp;
            {companyInformation.delivery_city}
            <br />
            {companyInformation.delivery_country}
          </p>
        </Col>
        <Col
          span={6}
          xs={9}
          lg={6}
          style={{
            display: 'flex',
            alignItems: 'center',
            marginTop: '15px',
            marginBottom: '15px',
            marginLeft: lg ? '22%' : '',
            textAlign: 'right',
            justifyContent: 'right',
            flex: '1 0 25%',
          }}
        >
          <img src={companyInformation.logo_URL} alt="" style={{ maxWidth: imgFormat, maxHeight: imgFormat, paddingRight: lg ? '50px' : '' }} />
        </Col>
      </Row>
    </Card>
  );
}
