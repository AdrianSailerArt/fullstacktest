<template>
  <v-app>
    <v-app-bar app color="primary" dark></v-app-bar>

    <v-main>
      <addProduct></addProduct>
      <div v-for="product in products" :key="product._id">
        {{product.name}}
        <br />
        {{product.price}} €
      </div>
    </v-main>
  </v-app>
</template>

<script>
import axios from "axios";
import addProduct from "./components/addProduct";
export default {
  name: "App",
  components: { addProduct },

  data: () => ({
    products: []
    //
  }),
  created() {
    axios.get("http://localhost:3000/products/getProducts").then(response => {
      console.log(response.data);
      this.products = response.data;
      console.log(response.status);
      console.log(response.statusText);
      console.log(response.headers);
      console.log(response.config);
    });
  }
};
</script>
