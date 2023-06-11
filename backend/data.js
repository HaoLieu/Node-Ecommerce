import bcrypt from "bcryptjs";

const data = {
  users: [
    {
      name: "a",
      email: "a@gmail.com",
      password: bcrypt.hashSync("123456"),
      isAdmin: true,
    },
    {
      name: "b",
      email: "b@gmail.com",
      password: bcrypt.hashSync("123456"),
      isAdmin: false,
    },
  ],
  product: [
    {
      name: "Adidas shoe",
      slug: "adidas-shoe",
      category: "Shoes",
      image: "/images/adidas-shoe1.jpg",
      price: 120,
      countInStock: 10,
      brand: "Adidas",
      rating: 3.5,
      numReviews: 10,
      description: "an adidas shoe",
    },
    {
      name: "Puma shoe",
      slug: "puma-shoe",
      category: "Shoes",
      image: "/images/puma-shoe1.jpg",
      price: 100,
      countInStock: 10,
      brand: "Puma",
      rating: 3.0,
      numReviews: 9,
      description: "a puma shoe",
    },
    {
      name: "Nike short 1",
      slug: "nike-short-1",
      category: "Shorts",
      image: "/images/nike-short-black.jpg",
      price: 90,
      countInStock: 10,
      brand: "Nike",
      rating: 4.5,
      numReviews: 10,
      description: "a Nike short",
    },
    {
      name: "Nike short 2",
      slug: "nike-short-2",
      category: "Shorts",
      image: "/images/nike-short-black.jpg",
      price: 90,
      countInStock: 0,
      brand: "Nike",
      rating: 4.2,
      numReviews: 10,
      description: "a Nike short",
    },
  ],
};

export default data;
