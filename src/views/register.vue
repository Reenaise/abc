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
            placeholder="John Doe"
        />
      </div>
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
      <div class="form-group">
        <label for="dob">Date of Birth</label>
        <input v-model="dob" type="date" id="dob"/>
      </div>
      <button type="submit" class="signup-button">Sign Up</button>
    </form>
  </div>
</template>

<script>
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
</script>

<style scoped>
.signup-container {
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

.signup-button {
  width: 100%;
  max-width: 300px;
  padding: 10px;
  background-color: black;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
}

.signup-button:hover {
  background-color: #444;
}
</style>
