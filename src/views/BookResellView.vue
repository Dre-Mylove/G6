<template>
  <BookListingsFilter />
  <BookListings />
  <NavBar /></template>

<script>
import BookListings from "@/components/Resell/BookListings.vue";
import BookListingsFilter from "@/components/Resell/BookListingsFilter.vue";
import NavBar from "@/components/NavBar.vue";

export default {
  name: "BookResellView",
  components: {
    BookListings,
    BookListingsFilter,
    NavBar
  },
};
</script>


