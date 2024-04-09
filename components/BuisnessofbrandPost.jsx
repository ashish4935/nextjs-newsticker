"use client"
import Link from "next/link";
import { useEffect, useState } from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Loader from "./Loader";
const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    //   slidesToSlide: 4 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 3,
    //   slidesToSlide: 3 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 767, min: 464 },
      items: 2,
    //   slidesToSlide: 1 // optional, default to 1.
    }
  };

const BuisnessofbrandPost = () => {
    const [loading,setLoading] = useState(false);
    const [blogInfo,setBlogInfo] = useState([]);
    const businessofBrandBlog = async ()=>{
      const getPosts = await fetch("https://www.gcaffe.com//wp-json/wp/v2/posts?_embed");
      const data = await getPosts.json(); 
      setBlogInfo(data);
      setLoading(true);
    }
  useEffect(()=>{
    businessofBrandBlog();
},[]);
  return (
    <div className="">
      <div className="mx-auto max-w-2xl px-4 py-8 sm:px-6 sm:py-12 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-red-400 pl-3 pb-6">
          Business of Brands
        </h2>
        {loading ? <Carousel swipeable={false} draggable={false}responsive={responsive} arrows={false} infinite={true} autoPlay={true}autoPlaySpeed={2000}>
          {
            blogInfo.map((post,index)=>{
              return <Link href={post['link']} key={index}>
                <div className="group relative pl-4">
                  <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-60">
                  <img src={post['_embedded']['wp:featuredmedia'][0]['source_url']} alt="businessofbrand_post" className="h-full w-full object-cover object-center lg:h-full lg:w-full"/>
                  </div>
                  <div className="mt-4 flex justify-between">
                    <div>
                      <h3 className="text-sm text-gray-200">
                          {post['title']['rendered']}
                      </h3>
                    </div>
                  </div>
                </div>
                </Link>
            })
          }  
          </Carousel>:<Loader/>
        }
           
      </div>     
    </div>
  )
}

export default BuisnessofbrandPost