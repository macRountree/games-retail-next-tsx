import {formatCurrency} from '@/src/utils';
import {Product} from '@prisma/client';
import Image from 'next/image';

interface ProductCardProps {
  product: Product;
}
export default function ProductCard({product}: ProductCardProps) {
  return (
    <div className="border bg-white  shadow-md rounded-md">
      <Image
        width={500}
        height={500}
        src={`/products/${product.image}.jpg`}
        alt={`${product.name} image`}
        quality={50}
      />
      <div className="p-5">
        <h3 className="text-2xl font-bold">{product.name}</h3>

        <p className="mt-5 font-black text-4xl text-purple-500">
          {formatCurrency(product.price)}
        </p>
        <button
          type="button"
          className="bg-purple-500 hover:bg-violet-600 w-full p-3 rounded-md text-white font-black uppercase"
        >
          Add to Order
        </button>
      </div>
    </div>
  );
}
