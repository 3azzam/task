<template>
  <div class="d-flex justify-content-between align-items-end">
    <div class="mb-3">
      <label for="name" class="form-label mb-0 fs-6 fw-bold d-flex">Name</label>
      <input id="name" class="form-control" />
    </div>

    <div class="mb-3">
      <label for="price" class="form-label mb-0 fs-6 fw-bold d-flex">Price</label>
      <input id="price" class="form-control" />
    </div>

    <div class="mb-3">
      <label for="seller_count" class="form-label mb-0 fs-6 fw-bold d-flex">Seller Count</label>
      <input id="seller_count" class="form-control" />
    </div>

    <div class="mb-3">
      <label class="form-label mb-0 fs-6 fw-bold d-flex"> </label>
      <button class="btn btn-small btn-primary">Search</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchHeader",
};
</script>