<template>
  <div class="mb-3">
    <div class="row w-100">
      <div class="mb-3 col-12 col-md-4">
        <label for="name" class="form-label mb-0 fs-6 fw-bold d-flex"
          >Name</label
        >
        <input v-model="name" id="name" class="form-control" />
      </div>

      <div class="mb-3 col-12 col-md-4">
        <label for="price" class="form-label mb-0 fs-6 fw-bold d-flex"
          >Show Price</label
        >
        <select v-model="price" class="form-control">
          <option value="no">no</option>
          <option value="yes">yes</option>
        </select>
      </div>

      <div class="mb-3 col-12 col-md-4">
        <label for="seller_count" class="form-label mb-0 fs-6 fw-bold d-flex"
          >Show Seller</label
        >
        <select v-model="seller_count" class="form-control">
          <option value="no">no</option>
          <option value="yes">yes</option>
        </select>
      </div>
    </div>

    <div class="">
      <label class="form-label mb-0 fs-6 fw-bold d-flex"> </label>
      <button v-on:click="search" class="btn btn-small btn-primary">
        Search
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["applyFilter"],
  name: "SearchHeader",
  data: function () {
    return {
      name: "",
      price: "no",
      seller_count: "no",
    };
  },
  methods: {
    search() {
      this.applyFilter({
        q: this.name,
        price: this.price,
        seller_count: this.seller_count,
      });
    },
  },
};
</script>