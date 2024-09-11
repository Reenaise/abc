<script setup>
import Hero from '@/components/Hero.vue';
import HomeCards from '@/components/HomeCards.vue';
import JobListings from '@/components/JobListings.vue';
import Navbar2 from '@/components/Navbar2.vue';

</script>

<template>
  <Navbar2/>
  <Hero />
  <HomeCards />
  <JobListings :limit="3" :showButton="false" />
</template>
