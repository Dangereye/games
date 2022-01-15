const filters = {
  order_by: {
    name: "Order by",
    value: "ordering",
    values: [
      { title: "Relevance", value: "" },
      { title: "Name", value: "name" },
      { title: "Release Date", value: "-released" },
      { title: "Top Rated", value: "-metacritic" },
    ],
  },
};

export default filters;
