<template>
  <div class="expense-form">
    <el-select v-model="selectedLabel" placeholder="지출 유형 선택">
      <el-option label="식비" value="food"></el-option>
      <el-option label="교통비" value="transport"></el-option>
      <el-option label="쇼핑" value="shopping"></el-option>
    </el-select>

    <el-input
      v-model.number="amount"
      type="number"
      placeholder="금액 입력"
      clearable
    />

    <el-input v-model="note" type="text" placeholder="메모" clearable />

    <el-button type="primary" @click="sendExpense">Send</el-button>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const selectedLabel = ref("");
const amount = ref<number | null>(null);
const note = ref("");

function sendExpense() {
  console.log({
    label: selectedLabel.value,
    amount: amount.value,
    note: note.value,
  });
  // 백엔드 전송 로직 추가 예정
}
</script>

<style scoped>
.expense-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
}

.el-input,
.el-select,
.el-button {
  width: 100%;
}
</style>
