import CategoryCard from "./CategoryCard";
import { categories } from "../../data/categories";

function Categories() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <h2 className="mb-12 text-4xl font-bold text-white md:text-5xl">
        Browse by Category
      </h2>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((category) => (
          <CategoryCard
            key={category.id}
            icon={category.icon}
            title={category.title}
            count={category.count}
          />
        ))}
      </div>
    </section>
  );
}

export default Categories;