import React from "react";

interface itemCardProps {
    title: string;
    subtitle: string;
    tags: string[];
    image: string;
}

const ItemCard = ({title, subtitle, tags, image}: itemCardProps) => {
  return (
    <div className="item-card component">
      <img src={image} alt={`${title}.jpg`}/>
      <p className="card-title">{title}</p>
      <p className="card-subtitle">{subtitle}</p>
      <div className="button-group">
        {tags.map((label, index) => (
          <button key={index} onClick={() => alert(`${label} clicked!`)}>
            {label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ItemCard;
