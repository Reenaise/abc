<template>
  <div class="balance-summary">
    <div class="balance-card">
      <p>Your Balance</p>
      <h1>$576,000.00</h1>
      <div class="goals">
        <div class="goal blue">
          <p>$5,000</p>
          <span>Expense</span>
        </div>
        <div class="goal orange">
          <p>$15,000</p>
          <span>Spend to goal</span>
        </div>
      </div>
    </div>
    <div class="transaction-summary">
      <h2>Transaction <span>See All</span></h2>
      <ul>
        <li v-for="(transaction, index) in transactions" :key="index">
          <div :class="transaction.iconClass"></div>
          <div>
            <p>{{ transaction.name }}</p>
            <span>{{ transaction.detail }}</span>
          </div>
          <p :class="transaction.amountClass">{{ transaction.amount }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BalanceSummary',
  data() {
    return {
      transactions: [
        { name: 'Car Purchase', detail: 'Auto Loan', amount: '-$250', iconClass: 'icon car', amountClass: 'negative' },
        { name: 'Houses Purchase', detail: 'Airbnb home', amount: '-$2250', iconClass: 'icon house', amountClass: 'negative' },
        { name: 'Transport', detail: 'Uber, Pathao', amount: '-$250', iconClass: 'icon transport', amountClass: 'negative' },
        { name: 'Shopping', detail: 'Wish, Apple', amount: '-$350', iconClass: 'icon shopping', amountClass: 'negative' },
      ],
    };
  },
};
</script>

<style scoped>
.balance-summary { /*second div*/
  background: navajowhite;
  padding: 20px;
  border-radius: 10px;
  width: 500px;
}
.balance-card { /* expenses and spend to goal*/
  background-color: #36B34A;
  color: black;
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 20px;
  text-align: center;
}
.balance-card p {
  margin: 0;
}
.balance-card h1 {
  font-size: 30px;
  margin: 10px 0;
}
.goals {
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
}
.goal {
  background-color: #1A1A1A;
  border-radius: 10px;
  padding: 10px;
  margin-right: 10px;
  width: 50%;
}
.blue {
  color: black;
}
.orange {
  color: black;
}
.transaction-summary {   /* white card */
  background-color: #1A1A1A;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
.transaction-summary h2 {   /* bold transaction text */
  display: flex;
  justify-content: space-between;
  margin: 0 0 10px 0;
}
.transaction-summary ul {
  list-style-type: none;
  margin-left: -30px;
  margin-right: 40px;
  /*font-size: 80px;
  padding: 0;
  padding-left: 40px;
  margin-left: 50px;*/
}
.transaction-summary li { /* transaction text (bottom eg auto loan) */
  display: flex;
  align-items: center;
  font-size: 12px;
  padding-left: 30px;
  /*padding-right: 10px;
  padding-left: 80px;*/
}
.transaction-summary li p { /* transaction text (top eg car purchase) */
  /*padding-right: 30px;
  margin-right: 90px;
  margin: 0;
  margin-right: 35px;
  padding: 0 5px;*/
  padding-right: 280px;
  padding-left: 0;
  font-size: 20px;
}

/*.transaction-summary .icon {
  width: 30px;
  height: 30px;
  background-color: #e0e0e0;
  border-radius: 50%;
  margin-right: 15px;
}
.car {
  background-color: #4caf50;
}
.house {
  background-color: #ff5722;
}
.transport {
  background-color: #3f51b5;
}
.shopping {
  background-color: #ff9800;
}
.negative {
  color: #f44336;
}*/
</style>

