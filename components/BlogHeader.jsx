import React, { useState, useEffect } from 'react';

import Link from 'next/link';
import { getCategories } from '../services';

const BlogHeader = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => {
      setCategories(newCategories);
    });
  }, []);

  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="border-b w-full inline-block border-blue-400 py-8">
        <div className="md:float-left block">
          <Link href="/blog">
            <span className="transition-colors hover:text-red-500 ease-in-out delay-75 cursor-pointer font-bold text-4xl text-white">Ariadne Blog</span>
          </Link>
        </div>
        <div className="hidden md:float-left md:contents">
          {categories.map((category, index) => (
            <Link key={index} href={`/blog/category/${category.slug}`}><span className="transition-colors ease-in-out delay-75 md:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer hover:text-red-500">{category.name}</span></Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogHeader;