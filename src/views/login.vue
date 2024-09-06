<template>
  <div class="login-container">
    <h2>Login</h2>
    <p>Sign in to continue</p>
    <form @submit.prevent="submitLogin">
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
      <button type="submit" class="login-button">Login</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    async submitLogin() {
      try {
        const response = await axios.post('http://localhost:8000/api/login/', {
          email: this.email,
          password: this.password
        });
        const token = response.data.access;
        localStorage.setItem('token', token);  // Store the JWT token in localStorage
        alert("Login successful!");
        // Redirect or perform any further action
      } catch (error) {
        console.error(error);
        alert("Login failed: " + error.response.data.detail);
      }
    }
  }
};
</script>

<style scoped>
.login-container {
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

.login-button {
  background-color: yellow;
  margin-top: 4px;
  width: 100px;
  margin-left: 48px;
  border-radius: 10px;
  border: solid 1px;

}


</style>
