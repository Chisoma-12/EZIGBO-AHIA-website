/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Product, Vendor, Category } from './types.ts';

export const COLORS = {
  primary: '#2D5A27', // Forest Green
  accent: '#F2AF29',  // Vibrant Gold
  background: '#FAF3E0', // Geometric Cream
  text: '#1A1A1A',     // Deep Black
  olive: '#5A5A40',    // Secondary Olive
  border: '#E6DCC3',   // Border Tan
  white: '#FFFFFF',
};

export const CATEGORIES: Category[] = [
  { id: '1', name: 'Foodstuffs', slug: 'foodstuff', icon: 'Warehouse' },
  { id: '2', name: 'Cooked Meals', slug: 'meals', icon: 'CookingPot' },
  { id: '3', name: 'Vegetables', slug: 'fresh-produce', icon: 'Leaf' },
  { id: '4', name: 'Drinks', slug: 'drinks', icon: 'CupSoda' },
  { id: '5', name: 'Essentials', slug: 'essentials', icon: 'ShoppingBag' },
];

export const VENDORS: Vendor[] = [
  {
    id: 'v1',
    name: 'Mama Joy\'s Kitchen',
    logo: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=100&h=100&fit=crop',
    rating: 4.8,
    isVerified: true,
    category: 'restaurant',
    location: 'Aba, Abia State',
    joinedDate: '2023-01-15',
    description: 'Authentic homemade African meals prepared with love.',
  },
  {
    id: 'v2',
    name: 'Central Market Grains',
    logo: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=100&h=100&fit=crop',
    rating: 4.5,
    isVerified: true,
    category: 'market-seller',
    location: 'Lagos Island, Lagos',
    joinedDate: '2022-11-20',
    description: 'Bulk grains, flours, and oils at competitive prices.',
  }
];

export const PRODUCTS: Product[] = [
  {
    id: 'p1',
    name: 'Ofada Rice (Premium)',
    price: 18000,
    image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=500&h=500&fit=crop',
    category: 'foodstuff',
    vendorId: 'v2',
    rating: 4.9,
    reviews: 124,
    description: 'Stone-free premium local brown rice. Rich in fiber and flavor.',
    unit: '5kg',
    isAvailable: true,
  },
  {
    id: 'p2',
    name: 'Red Palm Oil',
    price: 4500,
    image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=500&h=500&fit=crop',
    category: 'foodstuff',
    vendorId: 'v2',
    rating: 4.7,
    reviews: 89,
    description: 'Pure, undiluted palm oil directly from the mill.',
    unit: '1L',
    isAvailable: true,
  },
  {
    id: 'p3',
    name: 'Jollof Rice & Grilled Chicken',
    price: 3500,
    image: 'https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=500&h=500&fit=crop',
    category: 'meals',
    vendorId: 'v1',
    rating: 4.8,
    reviews: 256,
    description: 'Classic smoky party jollof served with a large grilled chicken lap and fried plantains.',
    unit: 'Per Plate',
    isAvailable: true,
  },
  {
    id: 'p4',
    name: 'Fresh Tomatoes (Grid)',
    price: 2500,
    image: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=500&h=500&fit=crop',
    category: 'fresh-produce',
    vendorId: 'v2',
    rating: 4.5,
    reviews: 42,
    description: 'Freshly harvested large tomatoes from northern farms.',
    unit: '1kg Paint Bucket',
    isAvailable: true,
  },
  {
    id: 'p5',
    name: 'White Garri (Premium)',
    price: 1500,
    image: 'https://images.unsplash.com/photo-1621501170791-381467bd170a?w=500&h=500&fit=crop',
    category: 'foodstuff',
    vendorId: 'v2',
    rating: 4.6,
    reviews: 67,
    description: 'Finely processed, dry and crunchy white garri.',
    unit: '1kg',
    isAvailable: true,
  },
  {
    id: 'p6',
    name: 'Crayfish (Dry)',
    price: 7000,
    image: 'https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?w=500&h=500&fit=crop',
    category: 'foodstuff',
    vendorId: 'v2',
    rating: 4.9,
    reviews: 112,
    description: 'Clean, large-sized dry crayfish from Oron.',
    unit: '500g',
    isAvailable: true,
  }
];
