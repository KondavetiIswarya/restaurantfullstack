import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { imageZoomEffect, TitleStyles } from "./ReusableStyles";

export default function Products() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:1702/api/dishes') // Ensure this URL is correct
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error("Error fetching products:", error);
      });
  }, []);

  return (
    <Section id="products">
      <div className="title">
      </div>
      <div className="products">
        {data.map((product) => (
          <div className="product" key={product._id}>
            <div className="image">
              <img src={product.image} alt={product.dishName} />
            </div>
            <h2>{product.dishName}</h2>
            <h3>{product.price}</h3>
            <button>Buy Now</button>
          </div>
        ))}
      </div>
    </Section>
  );
}

const Section = styled.section`
  .products {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 3rem;
    margin-top: 3rem;

    .product {
      display: flex;
      flex-direction: column;
      gap: 0.6rem;
      justify-content: center;
      align-items: center;

      h3 {
        color: #fc4958;
      }

      p {
        text-align: center;
        font-size: 1.1rem;
        line-height: 2rem;
        letter-spacing: 0.1rem;
      }

      ${imageZoomEffect};

      .image {
        max-height: 20rem;
        overflow: hidden;
        border-radius: 1rem;

        img {
          height: 20rem;
          width: 15rem;
          object-fit: cover;
        }
      }

      button {
        border: none;
        padding: 1rem 4rem;
        font-size: 1.4rem;
        color: white;
        border-radius: 4rem;
        transition: 0.5s ease-in-out;
        cursor: pointer;
        background: black;
        text-transform: uppercase;

        &:hover {
          background: white;
          color: black;
        }
      }
    }
  }

  @media screen and (min-width: 280px) and (max-width: 720px) {
    .products {
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    }
  }

  @media screen and (min-width: 720px) and (max-width: 1080px) {
    .products {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;
