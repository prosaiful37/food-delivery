import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";

const CheckoutForm = ({ orders }) => {
  const [cardError, setCardError] = useState("");
  const [success, setSuccess] = useState("");
  const [transctionId, setTransctionId] = useState("");
  const [processing, setProcessing] = useState(false);
  const stripe = useStripe();
  const elements = useElements();
  const [clientSecret, setClientSecret] = useState("");

  const { _id, price, userEmail, name } = orders;

  useEffect(() => {
    fetch("https://food-delivery-20mn.onrender.com/create-payment-intent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify({ price }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.clientSecret) {
          setClientSecret(data.clientSecret);
        }
      });
  }, [price]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card === null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    setCardError(error?.message || "");
    setSuccess("");
    setProcessing(true);

    // confirm card payment
    const { paymentIntent, error: intentError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: name,
            email: userEmail,
          },
        },
      });

    if (intentError) {
      setCardError(intentError?.message);
      setProcessing(false);
    } else {
      setCardError("");
      setTransctionId(paymentIntent.id);
      setSuccess("Congrats ! Your Payment is completed");

      // store payments on database
      const payments = {
        orders: _id,
        transctionId: paymentIntent.id,
      };
      fetch(`https://food-delivery-20mn.onrender.com/orders/${_id}`, {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify(payments),
      })
        .then((res) => res.json())
        .then((data) => {
          setProcessing(false);
          console.log(data);
        });
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="btn btn-success btn-sm text-white mt-2"
          type="submit"
          disabled={!stripe || !clientSecret}
        >
          Pay
        </button>
      </form>

      {cardError && <p className="text-error font-sans">{cardError}</p>}
      {success && (
        <div className="text-success font-sans">
          <p>{success}</p>
          <p>
            Your Transction Id:{" "}
            <span className="text-orange-500 font-bold">{transctionId}</span>
          </p>
        </div>
      )}
    </>
  );
};

export default CheckoutForm;
