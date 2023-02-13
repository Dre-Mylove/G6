<template>
  <v-container>
    <v-textarea
      clearable
      clear-icon="mdi-close-circle"
      label="Post to your wall"
      variant="outlined"
      no-resize=""
    ></v-textarea>
  </v-container>
</template>

<script>
export default {
  name: "WallPost",
};
</script>

<style scoped>
.v-container {
  width: 40%;
  position: fixed;
  left: 33%;
  
}
</style>
