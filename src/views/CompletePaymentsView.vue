
<template>
  <div class="cBody">
    <div class="cContainer">
      <h1>PAYMENTS</h1>
      <p id="pFirst">Enter payment details:</p>

      <div class="cForm">
        <form @submit.prevent="submitPayment">
          <div class="field1">
            <label for="bill" id="bill">Name of the bill:</label>
            <input v-model="name" type="text" id="bill" class="inputBill" required />
          </div>

          <div class="field2">
            <label for="pNumber" id="pNumber">Phone number:</label>
            <input v-model="phoneNumber" type="number" id="pNumber" class="inputNumber" required />
          </div>

          <div class="field3">
            <label for="mPayment" id="mPayment">Mobile payment:</label> 
            <input v-model="mobilePayment" type="text" id="mPayment" class="inputPayment" required />
          </div>

          <div class="button1">
            <button id="button" type="submit">Okay</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const name = ref('');
const phoneNumber = ref('');
const mobilePayment = ref('');

async function submitPayment() {
  try {
    const response = await fetch('http://localhost:5001/servers/completePayment', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ bill: name.value, pNumber: phoneNumber.value, mPayment: mobilePayment.value })
    });
    const data = await response.json();
    alert("Data has been submitted");
    name.value = "";
    phoneNumber.value = "";
    mobilePayment.value = "";
    console.log('Payment data stored:', data);
  } catch (error) {
    console.error('Error storing payment data:', error);
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
  background-color: #43B02A;
}

h1 {
  margin-top: 15vh;
  margin-bottom: 2vh;
  font-weight: 500;
}

#pFirst {
  font-weight: 500;
}

.cForm {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 25px;
}

.field1,
.field2,
.field3 {
  display: flex;
  flex-direction: column;
  width: 300px;
}

.field2,
.field3 {
  margin-top: 10px;
}

input{
  border: solid 1px #555555;
  background-color: #43B02A;
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

#bill,
#pNumber,
#mPayment {
  font-weight: 500;
}

.inputBill,
.inputNumber,
.inputNumber {
  border: solid 1px #555555;
  background-color: #43B02A;
}

#button{
  width: 100px;
}


</style>
