<script setup>
</script>
<template>
  <div class="header">
    <div class="info">
      <div class="year">
        <p>2026</p>
      </div>
    </div>
    <div class="wrapper">
      <div class="month">
        <h2>Mai</h2>
      </div>
    </div>
  </div>
</template>
<style>
.header{
  display: flex;
  flex-direction: column;
  padding: 10px;
  background-color: antiquewhite;
  border-radius: 5px 5px 0 0;
  .wrapper{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0;
    .month{
      h2{
        font-size: 32px;
        font-weight: bolder;
        letter-spacing: 5.5px;
      }
    }
  }
}
</style>