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
            <b-navbar-item tag="router-link" :to="{ path: '/input' }">Input</b-navbar-item>
            <b-navbar-item tag="router-link" :to="{ path: '/datepicker' }">Datepicker</b-navbar-item>
            <b-navbar-item tag="router-link" :to="{ path: '/datetimepicker' }">Datetimepicker</b-navbar-item>
            <b-navbar-item tag="router-link" :to="{ path: '/table' }">Table</b-navbar-item>
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
