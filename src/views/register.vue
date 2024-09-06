<template>
  <div class="signup-container">
    <h2>Create new Account</h2>
    <p>Already Registered? <a href="login.vue">Login</a></p>
    <form @submit.prevent="submitSignup">
      <div class="form-group">
        <label for="name">Name</label>
        <input
            v-model="name"
            type="text"
            id="name"
            required
            
        />
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input
            v-model="email"
            type="email"
            id="email"
            required
            
        />
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input
            v-model="password"
            type="password"
            id="password"
            required
        />
      </div>
      <div class="form-group">
        <label for="dob">Date of Birth</label>
        <input v-model="dob" type="date" id="dob"/>
      </div>
      <button type="submit" class="signup-button">Sign Up</button>
    </form>
  </div>
</template>

<!-- <script>
export default {
  data() {
    return {
      name: '',
      email: '',
      password: '',
      dob: ''
    };
  },
  methods: {
    submitSignup() {
      // Handle signup logic here
      console.log("Name:", this.name);
      console.log("Email:", this.email);
      console.log("Password:", this.password);
      console.log("Date of Birth:", this.dob);
    }
  }
};
</script> -->

<script setup>
import { ref } from 'vue';

const name = ref('');
const email = ref('');
const password = ref('');
const dob = ref('');

async function submitSignup() {
  try {
    const response = await fetch('http://localhost:5001/servers/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name: name.value, email: email.value, password: password.value, dob: dob.value })
    });
    const data = await response.json();
    alert("Data has been submitted");
    name.value = "";
    email.value = "";
    password.value = "";
    dob.value = "";
    console.log('Registration data stored:', data);
  } catch (error) {
    console.error('Error storing registration data:', error);
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
  background-color: #43B02A;
  font-family: Arial, sans-serif;
}

h2 {
  font-size: 2rem;
  margin-bottom: 10px;
  color: black;
}

p {
  margin-bottom: 20px;
  color: black;
}

a {
  color: black;
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
  color: black;
}


input {
  border: solid 1px #555555;
  background-color: #43B02A;
}

#dob {
  width: 100%;
}

.signup-button {
  margin-bottom: 40px;
  background-color: yellow;
  border: solid 1px;
  margin-top: 4px;
  /* margin-top: 10px; */
  width: 100px;
  margin-left: 50px;
  border-radius: 10px;
}

</style>
