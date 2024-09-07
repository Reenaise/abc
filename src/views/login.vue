<template>
  <div class="login-container">
    <h2>Login</h2>
    <p>Sign in to continue</p>
    
    <!-- Display error message if there's any -->
    
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
      <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
    </form>
  </div>
  
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const email = ref('');
const password = ref('');
const errorMessage = ref(''); // Holds error messages
const router = useRouter();

async function submitLogin() {
  try {
    const response = await fetch('http://localhost:5001/servers/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email.value,
        password: password.value,
      }),
    });

    const data = await response.json();

    if (response.ok && data.success) {
      // If login is successful, redirect to the home page
      router.push('/');
    } else {
      // Set error message for invalid credentials
      errorMessage.value = data.error || 'Invalid email or password';

    }
  } catch (error) {
    // Handle any errors during the request
    errorMessage.value = 'An error occurred. Please try again later.';
  }
}
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

.error-message {
  color: yellow; /* Style the error message */
  margin-top: 20px;
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
