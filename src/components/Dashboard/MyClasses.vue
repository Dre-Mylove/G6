<template>
  <span>
    <v-card class="classcard" variant="outlined">
      <v-list>
       
          <VListItemTitle class="itemtitle">
            <!-- <VBtn color="indigo" rounded="" >
              <v-icon>mdi-plus</v-icon>
            </VBtn> -->
            <h2>My Classes</h2>
          </VListItemTitle>
   
        <VDivider color="black" thickness="2"></VDivider>

        <VListItem class="listitem" v-for="classes in schedule" :key="classes.id">
          <li>
            <a href="class page">{{ classes.id }} </a>
          </li>
        </VListItem>
      </v-list>
      <VBtn class="addclass" color="blue" width="50%" rounded="0" @click="add"
        >Add</VBtn
      >
      <VBtn class="deleteclass" color="red" width="50%" rounded="0"
        >Delete</VBtn
      >
    </v-card>
  </span>
</template>

<script>
import { VDivider } from "vuetify/lib/components";

export default {
  name: "MyClasses",
  props: {
    className: {
      type: String,
      required: false,
    },
  },
  components: { VDivider },
  data() {
    return {
      schedule: [
        {
          id: "CS:365",
        },
        {
          id: "MATH: 486",
        },
        {
          id: "CS: 425",
        },
        {
          id: "CS 326",
        },
        {
          id: "PHYS 181",
        },
      ],
    };
  },
};
</script>

<style scoped>
span {
  position: fixed;
  right: 1%;
  width: 25%;
  top: 1%;

}

h2 {
  text-align: center;
}

.addclass {
  left: 0%;
}
.deleteclass {
  right: 0%;
}

h2 {
  background-color: #003049;
  color: white;
  
}

.listitem{
  background-color: #003049;
  color: white;
}
a {
  color: white;
}
</style>
