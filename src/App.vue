<template>
  <div class="app-content">
    <header class="header-content">
      <div class="container bd-lead">
        <div class="columns">
          <div class="column i-12">
            <b-navbar class="navbar is-light">
              <template slot="brand">
                <b-navbar-item tag="router-link" :to="{ path: '/' }">
                  <img src="./assets/logo.png" />
                </b-navbar-item>
              </template>
              <template slot="start">
                <b-navbar-item class="logo-title title is-5">
                  Icell Vue Component
                </b-navbar-item>
              </template>
              <template slot="end">
                <b-navbar-item tag="router-link" :to="{ path: '/input' }">Input</b-navbar-item>
                <b-navbar-item tag="router-link" :to="{ path: '/select' }">Select</b-navbar-item>
                <b-navbar-item tag="router-link" :to="{ path: '/datepicker' }">Datepicker</b-navbar-item>
                <b-navbar-item tag="router-link" :to="{ path: '/table' }">Table</b-navbar-item>
              </template>
            </b-navbar>
          </div>
        </div>
      </div>
    </header>

    <div class="main-content">
      <div class="container bd-lead">
        <router-view />
      </div>
    </div>
  </div>
</template>
