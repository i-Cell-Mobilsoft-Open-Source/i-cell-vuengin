<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> | <router-link to="/vuex">Vuex</router-link> |
      <router-link to="/dynamic-component">Dynamic Component</router-link> | <router-link to="/forms">Forms</router-link> |
      <router-link to="/formsbootstrap">Forms Bootstrap</router-link> | <router-link to="/formsvuetify">Forms Vuetify</router-link> |
      <router-link to="/playground">Playground</router-link> |
    </div>
    <router-view />
  </div>
</template>
