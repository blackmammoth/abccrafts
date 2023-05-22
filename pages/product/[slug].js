import React, { useState } from "react";
import { client, urlFor } from "../../lib/client";
import { Product } from "@/components";
import { useRouter } from "next/router";

const ProductDetails = ({ product, products }) => {
  const MAX_CHARS = 100; // Maximum number of characters to display initially

  const { image, name, canvasSize, threadLength, nails, distanceNails, story } =
    product;
  const [index, setIndex] = useState(0);
  const router = useRouter();
  const [showFullStory, setShowFullStory] = useState(false);

  const truncatedStory = story.slice(0, MAX_CHARS);
  const isTruncated = story.length > MAX_CHARS;

  const handleToggleStory = () => {
    setShowFullStory(!showFullStory);
  };

  const handleClick = () => {
    router.push(
      {
        pathname: "/BuyNow",
        query: { name },
      },
      "/BuyNow"
    );
  };

  return (
    <div>
      <div className="product-detail-container">
        <div>
          <div className="image-container">
            <img
              src={urlFor(image && image[index])}
              className="product-detail-image"
            />
          </div>
          <div className="small-images-container">
            {image?.map((item, i) => (
              <img
                key={i}
                src={urlFor(item)}
                className={
                  i === index ? "small-image selected-image" : "small-image"
                }
                onMouseEnter={() => setIndex(i)}
              />
            ))}
          </div>
        </div>

        <div className="product-detail-desc">
          <h1 className="product-detail-text-h1">{name}</h1>
          <h2 className="product-detail-text-p">Brief Story</h2>
          <h3 className="brief-story">
            <span className="text-span">
              {showFullStory ? story : truncatedStory}
              {isTruncated && (
                <a href="#read-more" onClick={handleToggleStory} className="read-more">
                  {showFullStory ? "Read Less" : "Read More"}
                </a>
              )}
            </span>
          </h3>

          <h2 className="product-detail-text-p">Compositional Details</h2>
          {/* canvasSize, threadLength, nails, distanceNails, steps, story */}
          <h3 className="margin-increase">
            <span className="compositional-details">Canvas Size: </span>
            <span>{canvasSize}</span>
          </h3>
          <h3 className="margin-increase">
            <span className="compositional-details">Thread Length: </span>
            <span>{threadLength}</span>
          </h3>
          <h3 className="margin-increase">
            <span className="compositional-details">Number of Nails: </span>
            <span>{nails}</span>
          </h3>
          <h3 className="margin-increase">
            <span className="compositional-details">
              Distance between Nails:{" "}
            </span>
            <span>{distanceNails}</span>
          </h3>
          <div className="buttons">
            <button type="button" className="buy-now" onClick={handleClick}>
              Buy Now
            </button>
          </div>
        </div>
      </div>
      <div>
      <div className="maylike-products-wrapper">
    <h2>You may also like</h2>
    <div className="marquee">
      <div className="maylike-products-container track">
        {products.map((item) => (
          <Product key={item._id} product={item} />
        ))}
      </div>
    </div>
  </div>
    </div>
    </div>
  );
};

export const getStaticPaths = async () => {
  const query = `*[_type == "product"] {
      slug {
        current
      }
    }
    `;

  const products = await client.fetch(query);

  const paths = products.map((product) => ({
    params: {
      slug: product.slug.current,
    },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
  const productsQuery = '*[_type == "product"]';

  const product = await client.fetch(query);
  const products = await client.fetch(productsQuery);

  return {
    props: { products, product },
  };
};

export default ProductDetails;
