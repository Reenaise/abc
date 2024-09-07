<template>
  <div class="report-container">
    <h1>Report Data</h1>
    <table>
      <thead>
        <tr>
          <th>Bill</th>
          <th>pNumber</th>
          <th>mPayment</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="completepayment in completepayments" :key="completepayment.bill">
          <td>{{ completepayment.bill }}</td>
          <td>{{ completepayment.pNumber }}</td>
          <td>{{ completepayment.mPayment }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>



<script setup>
import { ref , onMounted} from 'vue';

const completepayments = ref([]);

onMounted(async () => {
  try {
    const response = await fetch('http://localhost:5001/servers/getpayment');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    completepayments.value = data;
  } catch (error) {
    console.error('Error fetching report data:', error);
  }
});
</script>

<style scoped>
.report-container {
  margin: 20px;
  font-family: Arial, sans-serif;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  border: 1px solid #ddd;
  padding: 8px;
}

th {
  background-color: #f2f2f2;
}
</style>