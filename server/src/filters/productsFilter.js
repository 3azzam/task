const searchProductFilter = (query) => {
  const filters = {
    q: "",
    page: 1,
    fields: [],
  };
  if (query.q) {
    filters.q = query.q || "";
  }

  if (query.page) {
    filters.page = query.page || 1;
  }

  if (query.fields) {
    filters.fields = query.fields.split(",") || [];
  }

  return filters;
};

module.exports = {
  searchProductFilter,
};
