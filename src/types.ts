/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: 'foodstuff' | 'meals' | 'fresh-produce' | 'drinks' | 'essentials';
  vendorId: string;
  rating: number;
  reviews: number;
  description: string;
  unit: string;
  isAvailable: boolean;
}

export interface Vendor {
  id: string;
  name: string;
  logo: string;
  rating: number;
  isVerified: boolean;
  category: 'restaurant' | 'market-seller' | 'home-chef';
  location: string;
  joinedDate: string;
  description: string;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  slug: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'buyer' | 'vendor' | 'rider' | 'admin';
  avatar?: string;
}
