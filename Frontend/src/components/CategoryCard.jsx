import React from "react";

/**
 * CategoryCard
 * Props:
 *  - title: string
 *  - image: string (URL)

 */
export default function CategoryCard({ title, image }) {
  return (
    <div
      /* group + basic focus/hover behavior */
      data-category-card
      className="group relative flex-shrink-0 w-44 sm:w-auto"
    >
      <div className="bg-white rounded-lg p-4 text-center shadow-sm hover:shadow-md transition w-full">
        <img src={image} alt={title} className="w-20 h-20 rounded-full shadow-md object-cover mx-auto" />
        <div className="mt-3 text-sm font-medium text-gray-800">{title}</div>
      </div>
    </div>
  );
}
