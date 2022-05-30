/*
import React from 'react'
import Head from 'next/head'
import { loadStripe } from '@stripe/stripe-js';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

const payment = () => {

    <Head>
        <title>Payment</title>
        <meta name="description" content="Ariadne Maps GmbH" />
        <link rel="icon" href="/ariadneicon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        
       
      </Head>
    
	const router = useRouter();
	const { success, canceled } = router.query;

	useEffect(() => {
		if (success !== undefined || canceled !== undefined) {
			if (success) {
				console.log(
					'Order placed! You will receive an email confirmation.'
				);
			}

			if (canceled) {
				console.log(
					'Order canceled -- continue to shop around and checkout when you’re ready.'
				);
			}
		}
	}, [success, canceled]);

	return (
        <div>
		<form className='w-screen' action='/api/checkout_sessions' method='POST'>
			<section>
				<div>

					<div className='description'>
						<h3 className='heading'>Ariadne Advanced Analytics</h3>
						<h5 className='price'>€100/Month</h5>
					</div>
				</div>
				<button type='submit' role='link'>
					Checkout
				</button>
			</section>
			<style jsx>
				{`
					
                    
                    .description {
					}

					.heading {
						font-size: 28px;
						font-weight: 200;
					}
					.price {
						font-size: 18px;
						font-weight: bold;
                        display:flex;
                        justify-content: center;
                        margin-top:5px;
                    }
					section {
						background: #ffffff;
						display: flex;
						flex-direction: column;
						border-radius: 6px;
						justify-content: center;
                        align-items: center;
                        align-text:center;
                        margin: 20em 0;
					}
					button {
                        margin-top:10px;
						height: 45px;
						padding: 10px;
						background: #d11c21;
						border-radius: 4px;
						color: white;
						border: 0;
						font-size: 18px;
						font-weight: 600;
						cursor: pointer;
						transition: all 0.2s ease;
						box-shadow: 0px 4px 5.5px 0px rgba(0, 0, 0, 0.07);
					}
					button:hover {
						opacity: 0.8;
					}
				`}
			</style>
		</form>
        </div>
	);
};

export default payment

*/