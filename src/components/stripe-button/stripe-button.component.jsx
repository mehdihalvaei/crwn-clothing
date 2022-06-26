import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishablekey = 'pk_test_51LEu7OK7BxyX1Ct4Ii9iySEF1YiLiZyftTLTEXAuPVZc6GZgZeMaRA2blmmJu0LxRIwtQINB4I025RcKK4w8h1RF00IHMJ1Bvj';

    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    }

    return(
        <StripeCheckout
            label="pay Now"
            name="CRWN Clothing Ltd."
            billingAddress
            shippingAddress
            image="https://svgshare.com/i/CUz.svg"
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishablekey}
        />
    )
};

export default StripeCheckoutButton;