<template>
  <VCard :border="true" class="friendslist" variant="outlined">
    <VCardTitle class="cardtitle"> <h2>Friends</h2> </VCardTitle>
    <VDivider color="black" thickness="2"></VDivider>
    <v-row no-gutters="true">
      <v-col v-for="n in friendsProfile" :key="n" cols="4" align-self="stretch">
        <VCard color="white" density="">
          <a href="profile">
            <v-img
              :src="n.image"
              aspect-ratio="1"
              cover
              class="bg-grey-lighten-2"
            >
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
          <center>
            <p>{{ n.name }}</p>
          </center>
        </VCard>
      </v-col>
    </v-row>
  </VCard>
</template>

<script>
export default {
  name: "DashFriends",
  data() {
    return {
      friendsProfile: [
        {
          id: 0,
          image: "https://randomuser.me/api/portraits/men/58.jpg",
          name: "Elijah",
          price: "Price",
        },
        {
          id: 1,
          image: "https://randomuser.me/api/portraits/women/3.jpg",
          name: "Olivia",
        },
        {
          id: 2,
          image: "https://randomuser.me/api/portraits/men/86.jpg",
          name: "Ben",
        },
        {
          id: 3,
          image: "https://randomuser.me/api/portraits/women/18.jpg",
          name: "Amelia",
        },
        {
          id: 4,
          image: "https://randomuser.me/api/portraits/men/4.jpg",
          name: "Liam",
        },
        {
          id: 5,
          image: "https://randomuser.me/api/portraits/women/90.jpg",
          name: "Sophia",
        },
      ],
    };
  },
};
</script>

<style scoped>
.cardtitle {
  text-align: center;
  background-color: #003049;
}
p {
  text-align: center;
  background-color: #003049;
  color: white;
}

h2 {
  color: white;
}
.friendslist {
  position: fixed;
  left: 1%;
  top: 50%;
  width: 25%;
}
</style>
