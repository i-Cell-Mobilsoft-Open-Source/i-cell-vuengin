<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/playground">Playground</router-link>
      <!--<router-link to="/dependency-injection">Dependency Injection</router-link>-->
    </div>
    <router-view />
  </div>
</template>
