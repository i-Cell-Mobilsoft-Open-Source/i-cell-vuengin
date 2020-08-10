<template>
  <div class="app-content">
    <div class="nav-content">
      <div class="container">
        <b-navbar class="">
          <template slot="brand">
            <b-navbar-item tag="router-link" :to="{ path: '/' }">
              <img src="./assets/logo.png" />
            </b-navbar-item>
          </template>
          <template slot="end">
            <b-navbar-item tag="router-link" :to="{ path: '/basic-form' }">Basic Form</b-navbar-item>
            <b-navbar-item tag="router-link" :to="{ path: '/dynamic-form' }">Dynamic Form</b-navbar-item>
            <b-navbar-item tag="router-link" :to="{ path: '/layout-form' }">Layout Form</b-navbar-item>
          </template>
          <template slot="start">
            <b-navbar-item class="logo-title title is-5">Icell Vue Component</b-navbar-item>
          </template>
        </b-navbar>
      </div>
    </div>
    <div class="page-content">
      <router-view />
    </div>
  </div>
</template>

<!--<div id="nav">
<router-link to="/">Home</router-link> |
<router-link to="/form">Forms</router-link> |
<router-link to="/dynamic-form">Dynamic Form</router-link>  |
<router-link to="/playground">Playground</router-link> |
</div>-->
