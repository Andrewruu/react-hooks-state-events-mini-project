import React from "react";

function CategoryFilter({category,selectedCat,onSelectCat}) {
  const catBtn = category?.map((cat)=>{
    const className = cat === selectedCat ? "selected" : null
    return(
      <button
        key={cat}
        className={className}
        onClick={() => onSelectCat(cat)}
      >
        {cat}
      </button>
    )
  })

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {catBtn}
    </div>
  );
}

export default CategoryFilter;
