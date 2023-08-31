<template>
  <div>
    <h1>About Us</h1>
    <p>
      We are a team of passionate individuals committed to providing the best solutions for your needs.
      <UiButton :onClick="logme" >Click me!!</UiButton>
    </p>
    
  </div>
</template>

<script setup>
const logme = () => {
  alert('hey!');
}
</script>

<style scoped>
h1 {
  color: #4a4a4a;
  text-align: center;
}
p {
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  margin: 20px auto;
}
</style>
