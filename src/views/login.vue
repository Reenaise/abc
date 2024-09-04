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
            placeholder="JohnDoe@outlook.com"
        />
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input
            v-model="password"
            type="password"
            id="password"
            required
            placeholder="******"
        />
      </div>
      <button type="submit" class="login-button">Login</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    submitLogin() {
      // Handle login logic here
      console.log("Email:", this.email);
      console.log("Password:", this.password);
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
  background-color: #69d100;
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
  width: 100%;
  padding: 10px;
  margin: 5px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
}

.login-button {
  width: 100%;
  max-width: 300px;
  padding: 10px;
  /* background-color: black; */
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  background-color: yellow;
  margin-top: 10px;
  width: 100px;
  margin-left: 100px;
  border-radius: 10px;
}

.login-button:hover {
  background-color: #444;
}
</style>
