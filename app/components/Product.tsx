'use client';
import { Product } from '@/types/Product';
import { formatUsdPrice } from '@/util/PriceFormat';
import Image from 'next/image';
import Link from 'next/link';

const Product = ({
  name,
  image,
  unit_amount,
  id,
  description,
  metadata
}: Product) => {
  return (
    <Link
      href={{
        pathname: `/product/${id}`,
        query: { name, image, unit_amount, id, description, metadata }
      }}
    >
      <div className="text-gray-700 cursor-pointer">
        <Image
          src={image}
          alt={name}
          width={800}
          height={800}
          className="object-cover w-60 h-96"
        />
        <div className="font-medium py-4">
          <h1 className="font-semibold">{name}</h1>
          <p className="text-teal-400">
            {unit_amount === null ? 'No price' : formatUsdPrice(unit_amount)}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Product;
