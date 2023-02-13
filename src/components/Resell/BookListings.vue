<template>
  <v-row align="stretch">
    <v-col v-for="book in books" :key="book" class="d-flex child-flex" cols="3">
      <VCard class="bookcards">
        <a href="profile">
          <v-img :src="book.bookimage" cover class="bimage">
            <template v-slot:placeholder>
              <v-row class="fill-height ma-0" align="center" justify="center">
                <v-progress-circular
                  indeterminate
                  color="grey-lighten-5"
                ></v-progress-circular>
              </v-row>
            </template> </v-img
        ></a>
        <VDivider thickness="2"></VDivider>
        <p>{{ book.bookname }}</p>
        <VDivider class="dividers"></VDivider>
        <p>{{ book.bookclass }}</p>
        <VDivider class="dividers"></VDivider>
        <p>{{ book.price }}</p>
        <VDivider class="dividers"></VDivider>
        <p>{{ book.date }}</p>
      </VCard>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "BookListings",
  data() {
    return {
      books: [
        {
          id: 1,
          bookname: "History of the World Map by Map",
          bookclass: "HIST 310",
          bookimage: "https://m.media-amazon.com/images/I/81VTod4MpkL.jpg",
          price: "Price",
          edition: "NA",
          date: "2023-01-05",
        },
        {
          id: 2,
          bookname: "The C++ Programming Language",
          bookclass: "CS 135",
          bookimage: "https://m.media-amazon.com/images/I/51iQMFmLFtL.jpg",
          price: "Price",
          edition: "4",
          date: "2023-01-02",
        },
        {
          id: 3,
          bookname: "Campbell Biology 12th Edition",
          bookclass: "BIOL 191",
          bookimage: "https://m.media-amazon.com/images/I/41mqPR4WuCL.jpg",
          price: "Price",
          edition: "NA",
          date: "2023-01-02",
        },
        {
          id: 4,
          bookname: "Mega 2560 Complete Starter Kit",
          bookclass: "CPE 301",
          bookimage:
            "https://m.media-amazon.com/images/I/51K67ltZWdL._AC_SL1000_.jpg",
          price: "Price",
          edition: "NA",
          date: "2023-01-01",
        },
        {
          id: 5,
          bookname: "History of the World Map by Map",
          bookclass: "HIST 310",
          bookimage: "https://m.media-amazon.com/images/I/51iQMFmLFtL.jpg",
          price: "Price",
          edition: "NA",
          date: "2023-01-02",
        },
        {
          id: 6,
          bookname: "History of the World Map by Map",
          bookclass: "HIST 310",
          bookimage: "https://m.media-amazon.com/images/I/51iQMFmLFtL.jpg",
          price: "Price",
          edition: "NA",
          date: "2023-01-02",
        },
        {
          id: 7,
          bookname: "History of the World Map by Map",
          bookclass: "HIST 310",
          bookimage: "https://m.media-amazon.com/images/I/51iQMFmLFtL.jpg",
          price: "Price",
          edition: "NA",
          date: "2023-01-02",
        },
        {
          id: 8,
          bookname: "History of the World Map by Map",
          bookclass: "HIST 310",
          bookimage: "https://m.media-amazon.com/images/I/51iQMFmLFtL.jpg",
          price: "Price",
          edition: "NA",
          date: "2023-01-02",
        },
        {
          id: 9,
          bookname: "History of the World Map by Map",
          bookclass: "HIST 310",
          bookimage: "https://m.media-amazon.com/images/I/51iQMFmLFtL.jpg",
          price: "Price",
          edition: "NA",
          date: "2023-01-02",
        },
        {
          id: 10,
          bookname: "History of the World Map by Map",
          bookclass: "HIST 310",
          bookimage: "https://m.media-amazon.com/images/I/51iQMFmLFtL.jpg",
          price: "Price",
          edition: "NA",
          date: "2023-01-02",
        },
        {
          id: 10,
          bookname: "History of the World Map by Map",
          bookclass: "HIST 310",
          bookimage: "https://m.media-amazon.com/images/I/51iQMFmLFtL.jpg",
          price: "Price",
          edition: "NA",
          date: "2023-01-02",
        },
        {
          id: 11,
          bookname: "History of the World Map by Map",
          bookclass: "HIST 310",
          bookimage: "https://m.media-amazon.com/images/I/51iQMFmLFtL.jpg",
          price: "Price",
          edition: "NA",
          date: "2023-01-01",
        },
      ],
    };
  },
};
</script>

<style scoped>
.bimage {
  height: 75%;
  width: 100%;
}

.bookcards {
  background-color: whitesmoke;
  margin: 10%;
  border-color: steelblue;
  border-width: 3px;
}

p {
  text-align: center;
  color: black;
}

.dividers {
  border-color: #05668d;
  border-width: 1px;
}
</style>
