import Image from 'next/image';
import Stripe from 'stripe';
import Product from './components/Product';

const getProducts = async () => {
  const stripe = new Stripe(process.env.STRIPE_TEST_SECRET_KEY as string, {
    apiVersion: '2022-11-15'
  });
  const products = await stripe.products.list();

  const productsWithPrices = await Promise.all(
    products.data.map(async (product) => {
      const prices = await stripe.prices.list({ product: product.id });
      return {
        id: product.id,
        name: product.name,
        unit_amount: prices.data[0].unit_amount,
        image: product.images[0],
        currency: prices.data[0].currency,
        description: product.description,
        metadata: product.metadata.features
      };
    })
  );
  return productsWithPrices;
};

export default async function Home() {
  const products = await getProducts();

  return (
    <main>
      <div className="grid grid-cols-fluid gap-16">
        {products.map((product) => (
          <Product key={product.id} {...product} />
        ))}
      </div>
    </main>
  );
}
