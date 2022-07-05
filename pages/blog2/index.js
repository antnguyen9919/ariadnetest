import React from 'react'
import Head from 'next/head'
import {PostCard, PostWidget, Categories} from '../../components'
import BlogStyle from '../../styles/Blog.module.scss'
import { getPosts } from '../../services'
import {FeaturedPosts} from '../../sections';
import { BlogHeader } from '../../components'
import ReactPaginate from 'react-paginate';

export async function getStaticProps() {
    const posts = (await getPosts()) || [];
    return {
      props: {posts},
    };
  }

  

 
export default function Home({ posts }) {
   

return (
  <div  >
    <BlogHeader/>
  <div className={BlogStyle.blogBody}>
        <div className='container mx-auto px-10 mb-8'>
        <Head>
        <title>Ariadne Maps Blog</title>
        <meta name="description" content="Get your latest news and updates" />
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="icon" href="/ariadneicon.png" />
       </Head>
       <FeaturedPosts/>
       
    <div className='grid grid-cols-1 lg:grid-cols-12 gap-12 scroll-smooth'>
    <div className="lg:col-span-8 col-span-1">
            {
              
              posts.map((post, index) => (
              <PostCard key={index} post={post.node} />
            ))}
          </div>
          <div className="lg:col-span-4 col-span-1">
            <div className="lg:sticky relative top-2">
              <PostWidget />
              <Categories />
            </div>
          </div>
        
        </div>  


        </div>
    </div>
  </div>
    
  )
}



