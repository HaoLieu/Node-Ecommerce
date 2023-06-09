import express from "express";
import data from "./data.js";

const app = express();

app.get("/api/products", (req, res) => {
  res.send(data.product);
});

app.get("/api/products/slug/:slug", (req, res) => {
  const product = data.product.find((x) => x.slug === req.params.slug);
  if (product) {
    res.send(product);
  } else {
    res.send.status(404).send({ message: "Product not exist!" });
  }
});

app.get("/api/products/:id", (req, res) => {
  const product = data.product.find((x) => x._id === req.params.id);
  if (product) {
    res.send(product);
  } else {
    res.send.status(404).send({ message: "Product not exist!" });
  }
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`server is up and running at http://localhost:${port}`);
});
