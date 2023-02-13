<template>
  <v-container class="dropdowncontainer" fluid>
    <VToolbar class="toolbar">
      <VAutocomplete
        :items="['HIST 310', 'CS 135', 'BIOL 191', 'CPE 301']"
        label="Classes"
        class="dropdown"
        clearable="true"
      ></VAutocomplete>

      <VAutocomplete
        :items="[
          'History of the World Map by Map',
          'The C++ Programming Language',
          'Campbell Biology 12th Edition',
          'Mega 2560 Complete Starter Kit',
        ]"
        filled
        label="Books"
        class="dropdown"
        clearable="true"
      ></VAutocomplete
    ></VToolbar>
  </v-container>
</template>

<script>
export default {
  name: "BookListingsFilter",
};
</script>

<style scoped>
.dropdowncontainer {
  background-color: steelblue;
}

.dropdown {
  margin: 5%;
  background-color: whitesmoke;
}

.toolbar {
  width: 50%;
  margin: auto;
  background-color: steelblue;
}
</style>
