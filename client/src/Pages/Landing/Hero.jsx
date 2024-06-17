import React from "react";
import HeroImage from "./Assets/HeroImage.svg";
import { PrimaryBtn } from "../../UI/PrimaryBtn";
import laptop from "./Assets/laptop.svg";
import { CategoriesCard } from "../../Components/LandingComponents/CategoriesCard";
import { ProductCard } from "../../Components/LandingComponents/ProductCard";
import { ShopBanner } from "../../Components/LandingComponents/ShopBanner";
import { useState, useEffect } from "react";
import { Audio } from "react-loader-spinner";
import category1 from './Assets/category1.svg';
import category2 from './Assets/category2.svg';
import category3 from './Assets/category3.svg';
import bottomImage from './Assets/bottomImage.svg'


export const Hero = ({}) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          "https://fakestoreapi.com/products?limit=4"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
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
    return (
      <div className="flex h-[85vh] justify-center items-center">
        <Audio
          height="80"
          width="80"
          radius="40"
          color="orange"
          ariaLabel="loading"
          wrapperStyle
          wrapperClass
        />
      </div>
    );
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
      image: category1,
      categoryLabel: "Tech",
    },
    {
      image: laptop,
      categoryLabel: "Tech",
    },
    {
      image: category2,
      categoryLabel: "Tech",
    },
    {
      image: category3,
      categoryLabel: "Tech",
    },
    
   

  ];
  const shopBannerData = [
    {
      shopName: "Nike Factory",
      products: "12 Products",
    }, {
      shopName: "Nike Factory",
      products: "12 Products",
    }, {
      shopName: "Nike Factory",
      products: "12 Products",
    }, {
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
        className="hidden lg:block hero p-36 mt-10 rounded-2xl"
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
     
     
      
    </>
  );
};
