import React, { useState } from 'react';
import './paymentPage.css';

const PaymentPage = () => {
    const [paymentMethod, setPaymentMethod] = useState('creditCard');
    const [cardNumber, setCardNumber] = useState('');
    const [cardHolder, setCardHolder] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [cvv, setCvv] = useState('');
    const [streetAddress, setStreetAddress] = useState('');
    const [zipCode, setZipCode] = useState('');

    const handlePaymentMethodChange = (event) => {
        setPaymentMethod(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
    };

    const renderCreditCardFields = () => {
        return (
            <>
                <div>
                    <input
                    placeholder='Card Number'
                        type="text"
                        id="cardNumber"
                        value={cardNumber}
                        onChange={(event) => setCardNumber(event.target.value)}
                        required
                    />
                </div>
                <div>
                    <input
                    placeholder='Card Holders Name'
                        type="text"
                        id="cardHolder"
                        value={cardHolder}
                        onChange={(event) => setCardHolder(event.target.value)}
                        required
                    />
                </div>
                <div>
                    <input
                    placeholder='Expiry Date'
                        type="text"
                        id="expiryDate"
                        value={expiryDate}
                        onChange={(event) => setExpiryDate(event.target.value)}
                        required
                    />
                </div>
                <div>
                    <input
                    placeholder='CVV'
                        type="text"
                        id="cvv"
                        value={cvv}
                        onChange={(event) => setCvv(event.target.value)}
                        required
                    />
                </div>
            </>
        );
    };

    const renderPaymentFields = () => {
        switch (paymentMethod) {
            case 'creditCard':
                return renderCreditCardFields();
            case 'paypal':
            case 'applePay':
            default:
                return null;
        }
    };

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Payment Method</label>
                    <div>
                        <label htmlFor="creditCard">
                            <input
                                type="radio"
                                id="creditCard"
                                name="paymentMethod"
                                value="creditCard"
                                checked={paymentMethod === 'creditCard'}
                                onChange={handlePaymentMethodChange}
                            />
                            Credit Card
                        </label>
                        <label htmlFor="paypal">
                            <input
                                type="radio"
                                id="paypal"
                                name="paymentMethod"
                                value="paypal"
                                checked={paymentMethod === 'paypal'}
                                onChange={handlePaymentMethodChange}
                            />
                            Paypal
                        </label>
                        <label htmlFor="applePay">
                            <input
                                type="radio"
                                id="applePay"
                                name="paymentMethod"
                                value="applePay"
                                checked={paymentMethod === 'applePay'}
                                onChange={handlePaymentMethodChange}
                            />
                            Apple Pay
                        </label>
                    </div>
                </div>
                <div>
                    {renderPaymentFields()}
                </div>
                <div>
                    <input
                    placeholder='Street Address'
                        type="text"
                        id="streetAddress"
                        value={streetAddress}
                        onChange={(event) => setStreetAddress(event.target.value)}
                        required
                    />
                </div>
                <div>
                    <input
                    placeholder='Zip Code'
                        type="text"
                        id="zipCode"
                        value={zipCode}
                        onChange={(event) => setZipCode(event.target.value)}
                        required
                    />
                </div>
                <button type="submit">Submit Payment</button>
            </form>
        </div>
    );
};

export default PaymentPage;
