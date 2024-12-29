<template>
  <Navbar />
  <div class="signup-container">
    <h2>Unda akaunti mpya</h2>
    <p>Tayari una akaunti? <router-link to="/login">Ingia</router-link></p>
    <form @submit.prevent="submitSignup">
      <div class="form-group">
        <label for="name">Jina</label>
        <input v-model="name" type="text" id="name" required />
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input v-model="email" type="email" id="email" required />
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input v-model="password" type="password" id="password" required />
      </div>
      <div class="form-group">
        <label for="dob">Tarehe ya Kuzaliwa</label>
        <input v-model="dob" type="date" id="dob" />
      </div>
      <div class="form-group">
        <label for="incomeRange">Income Range</label>
        <select
        v-model="incomeRange"
        type="text"
        id="incomeRange"
        class="incomeRange"
        required
      >
        <!-- <option value="" disabled>Ingiza mtandao wa simu</option> -->
        <option value="500,000 - 600,000">500,000 - 600,000</option>
        <option value="600,000 - 700,000">600,000 - 700,000</option>
        <option value="700,000 - 800,000">700,000 - 800,000</option>
        <option value="800,000 - 900,000">800,000 - 900,000</option>
        <option value="900,000 - 1,000,000">900,000 - 1,000,000</option>
        <!-- <option value="Mitandao mingine">Mitandao mingine</option> -->
      </select>
      </div>
     
      <button type="submit" class="signup-button">Sajili</button>
    </form>
  </div>
</template>

<script setup>
import Navbar from "@/components/Navbar.vue";

import { ref } from "vue";

const name = ref("");
const email = ref("");
const password = ref("");
const dob = ref("");
const incomeRange = ref("");

async function submitSignup() {
  try {
    const response = await fetch("http://localhost:5001/servers/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name.value,
        email: email.value,
        password: password.value,
        dob: dob.value,
        incomeRange: incomeRange.value
      }),
    });
    const data = await response.json();
    alert("Data has been submitted");
    name.value = "";
    email.value = "";
    password.value = "";
    dob.value = "";
    incomeRange.value = "";
    console.log("Registration data stored:", data);
  } catch (error) {
    console.error("Error storing registration data:", error);
  }
}
</script>

<style scoped>
.signup-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  /* background-color: #43b02a; */
  font-family: Arial, sans-serif;
}

h2 {
  font-size: 2rem;
  margin-bottom: 10px;
  /* color: black; */
}

p {
  margin-bottom: 20px;
  /* color: black; */
}

a {
  /* color: black; */
  text-decoration: underline;
}

.form-group {
  margin-bottom: 20px;
  width: 100%;
  max-width: 300px;
}

label {
  display: block;
  margin-bottom: 5px;
  /* color: black; */
}

input, select {
  border: solid 1px #555555;
    color: black;

  /* background-color: #43b02a; */
}

select {
  width: 100%;
}
#dob {
  width: 100%;
}

.signup-button {
  margin-bottom: 40px;
  background-color: #00FF00;
  border: solid 1px;
  margin-top: 4px;
  /* margin-top: 10px; */
  width: 100px;
  margin-left: 50px;
  border-radius: 10px;
}
</style>