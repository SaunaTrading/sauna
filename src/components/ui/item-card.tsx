'use client'
import React from 'react';
import { cn } from '@/lib/utils';

interface Item {
    id: string;
    title: string;
    image: string;
    price: number;
}

interface ItemCardProps {
    item: Item;
    className?: string;
}

const ItemCard: React.FC<ItemCardProps> = ({ item, className }) => {
    return (
        <div className={cn(className) + "bg-white shadow-lg rounded-lg p-4"} style={{width: '64px', height:'148px'}}>
            <img src={item.image} alt={item.title} className="object-cover mb-4" />
            <h2 className="text-xl font-bold mb-2">{item.title}</h2>
            <p className="text-gray-600 mb-2">${item.price}</p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                Add to Cart
            </button>
        </div>
    );
};

export default ItemCard;
