<template>
<Navbar2 />

  <div class="report-container">
    <h1>Matumizi</h1>
  
    
    <!-- Data Table -->
    <table>
      <thead>
        <tr>
          <th>Bill</th>
          <th>Namba</th>
          <th>Mtandao</th>
          <th>Kiasi</th>
          <th>Tarehe</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="expense in expenses" :key="expense.bill">
          <td>{{ expense.bill }}</td>
          <td>{{ expense.pNumber }}</td>
          <td>{{ expense.mPayment }}</td>
          <td>{{ expense.amount }}</td>
          <td>{{ expense.date }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>




<script setup>
import Navbar2 from '@/components/Navbar2.vue';
import { ref, onMounted, computed } from 'vue';


const expenses = ref([]);
const searchQuery = ref('');

onMounted(async () => {
  try {
    const response = await fetch('http://localhost:5001/servers/getpayment');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    expenses.value = data;
  } catch (error) {
    console.error('Error fetching report data:', error);
  }
});

</script>


<style scoped>

h1{
  margin-top: 25px;
  margin-bottom: 25px;
  font-size: x-large;
}


.report-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* background-color: #43B02A;   */
  font-weight: 500;
  /* margin: 20px; */
  /* font-family: Arial, sans-serif; */
}


.search-container {
  margin-bottom: 20px;

}

.search-bar {
  padding: 8px;
  background-color: white;
  /* border: 1px solid #ddd; */
  border-radius: 4px;
  width: 500px;
  
}


table {
    width: 100%;
    text-align: center;
    box-shadow: 2px 4px 8px black;
    background-color: #000; /* Black background */
    color: #fff; /* White text color */
  }
  
  th, td {
    padding: 20px;
    border: 1px solid #555; /* Dark gray border for a subtle effect */
  }
  
  tr:nth-child(even) {
    background-color: #1a1a1a; /* Slightly lighter black for even rows */
  }
  
  tr:hover {
    background-color: #333; /* Dark gray on hover for contrast */
  }

  th {
    background-color: #333; /* Dark gray header background */
    color: #fff; /* White text for the header */
    text-transform: uppercase; /* Optional: capitalize headers */
  }

  td {
    color: #ccc; /* Light gray text for better readability */
  }
</style>