import {prisma} from '@/src/lib/prisma';
import CategoryIcon from '../ui/CategoryIcon';
import {categories} from '../../prisma/data/categories';

//*Server Component , fetch with prisma client

async function getCategories() {
  return await prisma.category.findMany(); //*fetching all categories
}

export default async function OrderSidebar() {
  const categories = await getCategories();
  console.log(categories);
  return (
    <div className="md:w-72 md:h-screen bg-white">
      <nav className="mt-10">
        {categories.map(category => (
          <CategoryIcon key={category.id} category={category} />
        ))}
      </nav>
    </div>
  );
}
