<template>
  <section class="header">
    <h1>WolfCampus</h1>
  </section>

  <v-card class="mx-auto px-6 py-8" max-width="344" border>
    <v-form v-model="form" @submit.prevent="onSubmit">
      <v-text-field
        v-model="email"
        :readonly="loading"
        :rules="[required]"
        class="mb-2"
        clearable
        label="Email"
      ></v-text-field>

      <v-text-field
        v-model="password"
        :readonly="loading"
        :rules="[required]"
        clearable
        label="Password"
        placeholder="Enter your password"
      ></v-text-field>

      <br />

      <v-btn
        :disabled="!form"
        :loading="loading"
        block
        color="success"
        size="large"
        type="submit"
        variant="elevated"
      >
        Sign In
      </v-btn>
    </v-form>
  </v-card>
</template>

<script scoped>
export default {
  name: "LogIn",
};
</script>

<style>
h1,
p,
a {
  margin: 0;
  padding: 0;
  font-family: cursive;
}

h1 {
  font-size: 2.8em;
  padding: 10px 0;
  font-weight: 800;
}

p {
  font-size: 1.1em;
  font-weight: 100;
  letter-spacing: 5px;
}

.header {
  width: 100%;
  /* padding: 60px 0; */
  text-align: center;
  background: #000000;
  color: white;
}
.v-card {
  border-color: #000000;
  margin: 10%;
}
</style>
