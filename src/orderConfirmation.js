import React from 'react';

const OrderConfirmationPage = () => {
  return (
    <div className="order-confirmation-page" style={{ backgroundColor: '#f5f5f5', height: '100vh', display: 'flex', alignItems: 'flex-start', justifyContent: 'center'}}>
      <div className="card" style={{height: '200px', width: '350px', textAlign: 'center', boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.3)', borderRadius: '30px', backgroundColor: '#57C5B6', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 'auto', marginTop: '20px'}}>
        <div className="card-body">
          <h2 className="card-title" style={{ color: '#000000' }}>Thank you, we have received your order</h2>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmationPage;
