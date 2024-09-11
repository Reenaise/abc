<template>
  <Navbar2 />

  <div class="cBody">
    <div class="cContainer">
      <h1>PAYMENTS</h1>
      <p id="pFirst">Enter payment details:</p>

      <div class="cForm">
        <form @submit.prevent="submitPayment">
          <div class="field1">
            <label for="reference" id="reference"
              >Utambulisho wa Muamala:</label
            >
            <input
              v-model="reference"
              type="text"
              id="reference"
              class="reference"
              required
            />
          </div>

          <div class="field2">
            <label for="pNumber" id="pNumber">Namba ya simu:</label>
            <input
              v-model="phoneNumber"
              type="tel"
              id="pNumber"
              class="inputNumber"
              required
              pattern="[0-9]{10}"
              title="Please enter a valid phone number (10 digits)"
            />
          </div>

          <div class="field3">
            <label for="mPayment" id="mPayment">Mtandao:</label>
            <!-- <input v-model="mobilePayment" type="text" id="mPayment" class="inputPayment" required /> -->
            <select
              v-model="mobilePayment"
              type="text"
              id="mPayment"
              class="inputPayment"
              required
            >
              <!-- <option value="" disabled>Ingiza mtandao wa simu</option> -->
              <option value="m-pesa">m-pesa</option>
              <option value="Tigopesa">Tigopesa</option>
              <option value="Halopesa">Halopesa</option>
              <option value="airtelmoney">airtelmoney</option>
              <!-- <option value="Mitandao mingine">Mitandao mingine</option> -->
            </select>
          </div>

          <div class="field4">
            <label for="amount" id="amount">Kiasi:</label>
            <input
              v-model="amount"
              type="text"
              id="amount"
              class="amount"
              required
            />
            <!-- <select v-model="amount" type="text" id="amount" class="amount" required >
          <option value="" disabled>Ingiza kiasi</option>
          <option value="10000">10000</option>
          <option value="20000">20000</option>
          <option value="30000">30000</option>
          <option value="40000">40000</option>
        </select> -->
          </div>

          <div class="field4">
            <label for="dob" id="dob">Tarehe:</label>
            <input v-model="dob" type="date" id="dob" />
          </div>


          <div class="button1">
            <button id="button" type="submit">Tuma</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import Navbar2 from "@/components/Navbar2.vue";
import { ref } from "vue";

const reference = ref("");
const phoneNumber = ref("");
const mobilePayment = ref("");
const amount = ref("");
const dob = ref("");

async function submitPayment() {
  try {
    const response = await fetch("http://localhost:5001/servers/income", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        pNumber: phoneNumber.value,
        mPayment: mobilePayment.value,
        amount: amount.value,
        date: dob.value,
        reference: reference.value,
      }),
    });;
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    alert("Data has been submitted");
    reference.value = "";
    phoneNumber.value = "";
    mobilePayment.value = "";
    amount.value = "";
    dob.value = "";
    console.log("Payment data stored:", data);
  } catch (error) {
    console.error("Error storing payment data:", error);
  }
}
</script>

<style scoped>
/* .cBody {
        margin: 100px;
        background-color: #43B02A;
        height: 100vh;
    } */

.cContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* background-color: #43b02a; */
}

h1 {
  margin-top: 15vh;
  margin-bottom: 2vh;
  /* font-weight: 500; */
}

/* #pFirst {
  font-weight: 500;
} */

.cForm {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 25px;
}

.field1,
.field2,
.field3,
.field4 {
  display: flex;
  flex-direction: column;
  width: 300px;
}

.field2,
.field3,
.field4 {
  margin-top: 10px;
}

input {
  border: solid 1px #555555;
  /* background-color: #43b02a; */
}

.button1 {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 40vh;
  background-color: yellow;
  margin-top: 20px;
  width: 100px;
  margin-left: 100px;
  border-radius: 10px;
  border: solid 1px;
}

/* #bill,
#pNumber,
#mPayment,
#amount {
  font-weight: 500;
} */

.inputBill,
.inputNumber,
.inputPayment,
.amount {
  border: solid 1px #555555;
  /* background-color: #43b02a; */
}

#button {
  width: 100px;
}
</style>
