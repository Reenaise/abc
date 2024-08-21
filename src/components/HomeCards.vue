<script setup>
import { RouterLink } from 'vue-router';
import Card from '@/components/Card.vue';
import image from '@/assets/img/image.png';


</script>

<template>
  <div class="bg-customGreen min-h-screen">
  <section class="flex-grow py-4  min-h-screen flex items-stretch">
    <div class="container-xl lg:container m-auto flex-grow ">
      <div class="grid grid-cols-1 md:grid-cols-2 h-full ">
        <Card bg="bg-customGreen" class="h-96 flex flex-col justify-between ">
          <div>
          <h2 class="text-3xl font-extrabold sm:text-4xl mb-6 border-b border-white/60 pb-4">Empowering the self-employed by<br> easy tracking of  credit records.
          </h2>
          <p class="mt-7 mb-4 text-left ">
            We help the formal self employed individuals to <br> have updates on their cash flow and business <br>
expenses so that they have an organized<br>
outline of their  money.
          </p>
          
          </div>
      <div>
  <section v-if="showButton" class="m-auto max-w-lg my-10 px-6 bg-customGreen">
        
          <!-- <RouterLink
            to="/jobs"
            class="block bg-black text-white text-center py-4 px-6 rounded-lg px-1 hover:bg-customGreen"
          >
            Get started
          </RouterLink> -->
          </section>
          </div>
        </Card>
        <Card bg="bg-customGreen"class="h-96 flex flex-col justify-between">
          <RouterLink class="flex flex-shrink-0 items-center mr-4" to="/">
            <img class="h-full w-auto" :src="image" alt="Vue Jobs" />
            <!-- <span class="hidden md:block text-white text-2xl font-bold ml-2"
              >Vue Jobs</span -->
            
          </RouterLink>
          <!-- <h2 class="text-2xl font-bold">For Employers</h2>
          <p class="mt-2 mb-4">
            List your job to find the perfect developer for the role
          </p>
          <RouterLink
            to="/jobs/add"
            class="inline-block bg-green-500 text-white rounded-lg px-4 py-2 hover:bg-green-600"
          >
            Add Job
          </RouterLink> -->
        </Card>
      </div>
    </div>
  </section>
</div>
</template>
<script>
export default {
  data() {
    return {
      showButton: true, // Define the property here
    };
  },
};
</script>