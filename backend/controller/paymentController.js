const asyncWrapper = require("../middleWare/asyncWrapper");

// process the payment
exports.processPayment = asyncWrapper(async (req, res, next) => {
  const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY); // asigning key as well

  const myPayment = await stripe.paymentIntents.create({
    amount: req.body.amount,
    currency: "inr",
    metadata: {
      company: "Ecommerce", // not mandatory
    },
  });

  res
    .status(200)
    .json({ sucess: true, client_secret: myPayment.client_secret });
});

// send STRIPE_API_KEY to user =>

exports.sendStripeApiKey = asyncWrapper(async (req, res, next) => {
  console.log("sk_test_51PFCQLSESLLilDPXU0KjbDJ2PJBAlCw2mHJQtbxUPRJRn6fZwaGtW2W3xhxqolOJMBo7nIYs7zFMZz95gm4GdY9a00wF1oiqgK")
  res.status(200).json({ stripeApiKey: process.env.STRIPE_API_KEY });
});
