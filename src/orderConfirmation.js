import React from 'react';

const OrderConfirmationPage = () => {
  return (
    <div className="order-confirmation-page" style={{ backgroundColor: '#f5f5f5', height: '100vh', display: 'flex', alignItems: 'flex-start', justifyContent: 'center', flexDirection: 'column'}}>
      <div className="card" style={{height: '150px', width: '300px', textAlign: 'center', boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.3)', borderRadius: '30px', backgroundColor: '#57C5B6', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px'}}>
        <div className="card-body">
          <h2 className="card-title" style={{ color: '#000000' }}>Thank you, we have received your order</h2>
        </div>
      </div>
      <h2 style={{ color: '#333', marginBottom: '10px' }}>Recommended for you</h2>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div className="horizontal-card" style={{ width: '150px', height: '150px', backgroundColor: '#fefefe', borderRadius: '10px', textAlign: 'center' }}>
          <img src="https://www.thespruce.com/thmb/i428zoKWoFbwAXPB6KkZyQ-6cWU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/roundhillbestaccentchairsforsmallspaces-1bfebd7d87bf42bea3b8445f39236eac.jpg" alt="Product 1" style={{ width: '100%', height: '105px', objectFit: 'cover', borderRadius: '10px 10px 0 0' }} />
          <div className="card-body">
            <h3 className="card-title" style={{ color: '#333', marginBottom: '5px', fontSize:'15px'}}>Chair</h3>
          </div>
        </div>
        <div className="horizontal-card" style={{ width: '150px', height: '150px', backgroundColor: '#fefefe', borderRadius: '10px', textAlign: 'center', marginLeft: '20px' }}>
          <img src="https://rb.gy/n6duy" alt="Product 2" style={{ width: '100%', height: '105px', objectFit: 'cover', borderRadius: '10px 10px 0 0' }} />
          <div className="card-body">
            <h3 className="card-title" style={{ color: '#333', marginBottom: '5px', fontSize:'15px' }}>Yello Sofa</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmationPage;
