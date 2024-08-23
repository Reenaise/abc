<!-- <script>
  export default {
    methods: {
      submitPayment() {
        const name = document.querySelector('.inputBill').value;
        const phoneNumber = document.querySelector('.inputNumber').value;


        async function saveItem() {
        const response = await fetch('http://localhost:3000/servers',{
        // fetch('/api/payments', { // Replace '/api/payments' with your actual route
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ name, phoneNumber })
        })
        .then(response => response.json())
        .then(data => {
          // Handle the response from the server (optional)
          console.log('Payment data stored:', data);
        })
        .catch(error => {
          console.error('Error storing payment data:', error);
        });
      }
    }
  }
}
</script>


<template>
    <div class="cBody">

        <div class="cContainer">
        <h1> PAYMENTS</h1>
        <P id="pFirst">Enter payment details:</P>

                <div class="cForm">
                <form action="" v-on:submit.prevent="saveItem">
                    <div class="field1">
                    <label for="bill" id="bill">Name of the bill:</label>
                    <input type="text" class="inputBill">
                    </div>

                    <div class="field2">                           
                    <label for="pNumber" id="pNumber">Phone number:</label>
                    <input type="number" class="inputNumber">
                    </div>

                    <div class="button1">
                    <button type="submit"> Okay </button>
                    </div>
                </form>
                </div>    
        </div>


        
    </div>
</template>


<style  scoped>
/* .cBody{
    margin: 100px;
    background-color: #43B02A;
    height: 100vh;
} */

.cContainer{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* width: 200vh; */
  margin-top: 15hv;
  background-color: #43B02A;
}

h1{
margin-top: 15vh;
margin-bottom: 2vh;
font-weight: 500;


}

#pFirst{
font-weight: 500;
}




.cForm{
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;
 margin-top: 25px;

  
}



.field1{
 display: flex;
 flex-direction: column;
 width: 300px;


  
}

.field2{
 display: flex;
 flex-direction: column;
 margin-top: 10px;
}


/*  */

.button1{
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;
 margin-bottom: 40vh;
 background-color: yellow;
 margin-top: 10px;
 width: 100px;
 margin-left: 100px;
 border-radius: 10px;
  
}

#bill{
    font-weight: 500;
}


#pNumber{
    font-weight: 500;
}


.inputBill{
 border: solid 1px #555555;
 background-color: #43B02A;
}

.inputNumber{
 border: solid 1px #555555;
 background-color: #43B02A;
}


</style> -->



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

          <div class="button1">
            <button type="submit">Okay</button>
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

async function submitPayment() {
  try {
    const response = await fetch('http://localhost:5001/servers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ bill: name.value, pNumber: phoneNumber.value })
    });
    const data = await response.json();
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
  margin-top: 15vh;
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
.field2 {
  display: flex;
  flex-direction: column;
  width: 300px;
}

.field2 {
  margin-top: 10px;
}

.button1 {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 40vh;
  background-color: yellow;
  margin-top: 10px;
  width: 100px;
  margin-left: 100px;
  border-radius: 10px;
}

#bill,
#pNumber {
  font-weight: 500;
}

.inputBill,
.inputNumber {
  border: solid 1px #555555;
  background-color: #43B02A;
}
</style>
