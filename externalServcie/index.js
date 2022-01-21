const http = require("http");
const express = require("express");
const app = express();

const productsList = [
  {
    id: 1,
    name: "product 1",
    manufactureres: 1,
    image:
      "https://cdn.pixabay.com/photo/2020/02/05/18/38/jungle-4822003_960_720.jpg",
    trademark: "car",
  },
  {
    id: 2,
    name: "product 2",
    manufactureres: 2,
    image:
      "https://cdn.pixabay.com/photo/2020/02/05/18/38/jungle-4822003_960_720.jpg",
    trademark: "apple",
  },
  {
    id: 3,
    name: "product 3",
    manufactureres: 2,
    image:
      "https://cdn.pixabay.com/photo/2020/02/05/18/38/jungle-4822003_960_720.jpg",
    trademark: "phone",
  },
  {
    id: 4,
    name: "product 4",
    manufactureres: 3,
    image:
      "https://cdn.pixabay.com/photo/2020/02/05/18/38/jungle-4822003_960_720.jpg",
    trademark: "phone",
  },
  {
    id: 5,
    name: "product 5",
    manufactureres: 4,
    image:
      "https://cdn.pixabay.com/photo/2020/02/05/18/38/jungle-4822003_960_720.jpg",
    trademark: "car",
  },
  {
    id: 6,
    name: "product 6",
    manufactureres: 3,
    image:
      "https://cdn.pixabay.com/photo/2020/02/05/18/38/jungle-4822003_960_720.jpg",
    trademark: "car",
  },
  {
    id: 7,
    name: "product 7",
    manufactureres: 1,
    image:
      "https://cdn.pixabay.com/photo/2020/02/05/18/38/jungle-4822003_960_720.jpg",
    trademark: "hand",
  },
  {
    id: 8,
    name: "product 8",
    manufactureres: 1,
    image:
      "https://cdn.pixabay.com/photo/2020/02/05/18/38/jungle-4822003_960_720.jpg",
    trademark: "leg",
  },
];

app.get("/products", (req, res) => {
  const { query } = req;
  console.log("query", query);
  const filters = {
    name: query.q || "",
    page: parseInt(query.page, 10) || 1,
    per_page: parseInt(query.per_page, 10) || 9999999,
  };

  const list = productsList.filter((p) => p.name.includes(filters.name));
  const skip = (filters.page - 1) * filters.per_page;
  const take = skip + filters.per_page;
  const paginatedList = list.splice(skip, take);

  return res.send({
    data: paginatedList,
    meta: {
      next: filters.page + 1,
      perv: filters.page - 1,
    },
  });
});

const server = http.createServer(app);
server.listen(5100, () => {
  console.log("server is working on 5100");
});
