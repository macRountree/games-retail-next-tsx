'use client';
import Image from 'next/image';
import Link from 'next/link';
import {Category} from '@prisma/client';
import {useParams} from 'next/navigation';

interface CategoryIconProps {
  category: Category;
}

export default function CategoryIcon({category}: CategoryIconProps) {
  const params = useParams<{category: string}>();
  // console.log(params.category);
  return (
    <div
      className={`${
        category.slug === params.category ? 'bg-purple-400' : ''
      } bg-purple-100 flex items-center gap-4 w-full border-t border-purple-400 p-3 last-of-type:border-b`}
    >
      <div className="w-14 h-14 relative ">
        <Image
          fill
          src={`/icon_${category.slug}.png `}
          alt={`Categories -${category.name}`}
        />
      </div>

      <Link href={`/order/${category.slug}`} className="font-bold text-sm">
        {category.name}{' '}
      </Link>
    </div>
  );
}
