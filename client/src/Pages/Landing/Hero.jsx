import React from "react";
import HeroImage from "./Assets/HeroImage.svg";
import { PrimaryBtn } from "../../UI/PrimaryBtn";
import laptop from "./Assets/laptop.svg";
import { CategoriesCard } from "../../Components/LandingComponents/CategoriesCard";
import { ProductCard } from "../../Components/LandingComponents/ProductCard";
import { ShopBanner } from "../../Components/LandingComponents/ShopBanner";
import { useState,useEffect } from "react";
import { Audio } from 'react-loader-spinner';

export const Hero = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch products from the API
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products?limit=5');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        const randomProducts = selectRandomItems(data, 5); // Select 5 random products
        setProducts(randomProducts);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []); // Empty dependency array means this effect runs once on mount
  const selectRandomItems = (items, num) => {
    const shuffled = items.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
  };


  if (loading) {
    return <div className="flex justify-center items-center"><Audio
    height="80"
    width="80"
    radius="40"
    color="orange"
    ariaLabel="loading"
    wrapperStyle
    wrapperClass
  /></div>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }


  const searchBtn = "Search";
  const categoryCardObject = [
    //{
    //   image:,
    //   categoryLabel:'Tech'
    // },
    // {
    //   image:,
    //   categoryLabel:'Electronics'
    // },
    // {
    //   image:,
    //   categoryLabel:'Health & Beauty'
    // },
    // {
    //   image:,
    //   categoryLabel:'Fashion'
    // },
    // {
    //   image:,
    //   categoryLabel:'Furniture'
    // },
    {
      image: laptop,
      categoryLabel: "Tech",
    },
    {
      image: laptop,
      categoryLabel: "Tech",
    },
    {
      image: laptop,
      categoryLabel: "Tech",
    },
    {
      image: laptop,
      categoryLabel: "Tech",
    },
    {
      image: laptop,
      categoryLabel: "Tech",
    },

    {
      image: laptop,
      categoryLabel: "Tech",
    },
  ];
  const shopBannerData = [
    {
      shopName: "Nike Factory",
      products: "12 Products",
    },
  ];

  const dealsForYouData = [
    {
      cardImage: laptop,
      productName: "Laptop",
      price: "2000",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi, quod.",
    },
  ];

  return (
    <>
      {/* Hero Image */}
      <section
        className="hidden hero p-36 mt-10 rounded-2xl"
        style={{
          backgroundImage: `url(${HeroImage})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="">
          <h1 className="text-4xl max-w-md font-normal mb-10">
            Find The Best Products With{" "}
            <span className="text-primary">Reliability</span>
          </h1>
          <div className="inline-flex gap-x-10 bg-black/20 p-2 rounded-3xl">
            <input
              type="text"
              placeholder="Search Here For A Shop Or Product"
              className="bg-transparent w-[300px] placeholder:text-white px-2 outline-none text-white"
            />
            <PrimaryBtn btnLabel={searchBtn} />
          </div>
        </div>
      </section>
      {/* Categories Section */}
      <section>
      <h1 className="text-2xl font-semibold text-center mt-5 lg:text-left">
          Shop Our Top Categories
        </h1>
        <div className="flex flex-col items-center justify-center gap-y-14 py-10 lg:grid md:grid-cols-2 lg:grid-cols-3 lg:gap-x-10 xl:flex xl:flex-row xl:gap-x-4 xl:gap-y-0">
          {categoryCardObject.map((props, index) => (
            <CategoriesCard key={index} categoryImage={props.image} />
          ))}
        </div>{" "}
      </section>
      {/* Deals For You! */}
      <section>
        <h1 className="text-2xl font-semibold text-center mt-5 lg:text-left">
          Best Deals For You
        </h1>
        <div className="flex flex-col items-center justify-center gap-y-14 py-10 lg:grid md:grid-cols-2 lg:grid-cols-3 lg:gap-x-10 xl:flex xl:flex-row xl:gap-x-4 xl:gap-y-0">
          {products.map((props,index) => (
            <ProductCard
              key={index}
              productImage={props.image}
              productName={props.title}
              productPrice={props.price}
              productDescription={props.description}
            />
          ))}
        </div>
      </section>
      {/* Choose By Shops Section */}
      <section>
        <h1 className="text-2xl font-semibold text-center mt-5 lg:text-left">
          Choose By Shops
        </h1>
        <div className="flex flex-col items-center mb-10">
          {shopBannerData.map((props, index) => (
            <ShopBanner
              key={index}
              shopName={props.shopName}
              products={props.products}
            />
          ))}
        </div>
      </section>
    </>
  );
};
