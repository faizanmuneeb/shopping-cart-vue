<template>
  <v-app id="app">
    <v-app-bar app color="primary" dark class="app-bar">
      <h3 class="app-title">Shopping Website</h3>

      <v-tabs align-with-title class="app-bar-tabs">
        <v-tab><router-link to="/">Home</router-link></v-tab>
        <v-tab><router-link to="/shop">Shop</router-link></v-tab>
        <v-tab><router-link to="/contact">Contact</router-link></v-tab>
      </v-tabs>

      <v-btn icon>
        <v-icon>mdi-cart</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main> <router-view /> </v-main>
  </v-app>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.app-title {
  margin-left: 10px;
}

.app-bar {
  padding: 0 10px;
}
.app-bar > div {
  display: flex;
  justify-content: space-between;
}

.app-bar-tabs {
  width: auto !important;
  flex: 0 !important;

  a {
    text-decoration: none;
    display: block;
    line-height: 64px;
  }
}
</style>
