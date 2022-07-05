import React from 'react';
import { getPosts } from '../services';
 




  import React from "react";
  import * as fs from "fs";
  
  const Sitemap = () => {
    return null;
  };
  
  export const getServerSideProps = async ({ res }) => {
  
    const BASE_URL = 'https://www.ariadnemaps.com/'; //This is where you will define your base url. You can also use the default dev url http://localhost:3000
  
    const staticPaths = fs
      .readdirSync("pages")
      .filter((staticPage) => {
        return ![
          "sitemap.xml.js",
          "404.js",
          "_app.js",
          "_document.js",
          "api"
        ].includes(staticPage);
      })
    .map((staticPagePath) => {
      return `${BASE_URL}/${staticPagePath.replace('.js', '')}`;
    });
  
    
    const posts = (await getPosts()) || [];
  
    const dynamicPaths = posts.map( singleBlog => {
  
        return `${BASE_URL}/blog/post/${singleBlog.node.slug}`
        
      })
    const allPaths = [...staticPaths, ...dynamicPaths];
  
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        // This is where we would be putting in our URLs
        ${allPaths
          .map((url) => {
            return `
              <url>
                <loc>${url}</loc>
              </url>
            `;
          })
        .join("")}
      </urlset>
    `;
  
    res.setHeader("Content-Type", "text/xml");
    res.write(sitemap);
    res.end();
  
    return {
      props: {},
    };
  };
  
  export default Sitemap;