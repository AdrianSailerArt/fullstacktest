<template>
  <v-form v-model="valid">
    <v-container>
      <v-row>
        <v-col cols="12" md="4">
          <v-text-field v-model="name" :rules="nameRules" :counter="10" label="Name" required></v-text-field>
        </v-col>

        <v-col cols="12" md="4">
          <v-text-field v-model="price" label="Price" required></v-text-field>
        </v-col>
      </v-row>
      <v-btn large @click="addProduct()">ADD</v-btn>
    </v-container>
  </v-form>
</template>

<script>
import axios from "axios";
export default {
  data: () => ({
    valid: false,
    name: "",
    price: "",
    nameRules: [
      v => !!v || "Name is required",
      v => v.length <= 10 || "Name must be less than 10 characters"
    ]
  }),

  methods: {
    addProduct() {
      const product = {
        name: this.name,
        price: this.price
      };
      axios
        .post(
          "http://localhost:3000/products/addProduct",
          product,
          this.$headers
        )
        .then(response => {
          console.log(response);
        });
    }
  }
};
</script>