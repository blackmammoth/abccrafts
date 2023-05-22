import React from "react";
import Link from "next/link";
import Image from "next/image";

import { urlFor } from "../lib/client";

const Product = ({ product: { image, name, slug } }) => {
  const src = urlFor(image && image[0]).url();

  return (
    <div>
      <Link href={`/product/${slug.current}`}>
        <div className="product-card">
          <Image
            // loader={() => src}
            src={src}
            width={250}
            height={250}
            className="product-image"
            alt="product-image"
          />
          <p className="product-name">{name}</p>
        </div>
      </Link>
    </div>
  );
};

export default Product;
