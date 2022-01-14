const filters = {
  order_by: {
    name: "Order by",
    value: "ordering",
    values: [
      { title: "Name A-Z", value: "-name" },
      { title: "Name Z-A", value: "name" },
      { title: "Newest", value: "-released" },
      { title: "Oldest", value: "released" },
      { title: "Highest Rated", value: "-metacritic" },
      { title: "Lowest Rated", value: "metacritic" },
    ],
  },
};

export default filters;
