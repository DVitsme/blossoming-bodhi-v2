import { SearchParamTypes } from '@/types/SearchParamTypes';
import { formatUsdPrice } from '@/util/PriceFormat';
import Image from 'next/image';
import AddToCart from './AddToCart';

const Product = async ({ searchParams }: SearchParamTypes) => {
  const { name, id, image, unit_amount, description, metadata } = searchParams;

  return (
    <div className="flex justify-between gap-24 p-12 text-gray-700 items-end">
      <Image
        src={image}
        alt={name}
        width={600}
        height={600}
        className="object-cover w-60 h-96"
      />
      <div>
        <h1 className="text-2xl font-medium py-2">{name}</h1>
        <p className="py-2">{description}</p>
        <p className="py-2">{metadata}</p>
        <div className="flex gap-2">
          <p className="font-bold text-teal-700">
            {unit_amount && formatUsdPrice(unit_amount)}
          </p>
        </div>
        <AddToCart {...searchParams} />
      </div>
    </div>
  );
};

export default Product;
