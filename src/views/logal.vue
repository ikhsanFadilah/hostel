<template>
<!-- component -->
<div class="box-content p-4 border-4 bg-gray-100 flex justify-center items-center h-screen">
    <!-- Left: Image -->
<div class="w-1/2 h-screen hidden lg:flex flex-col justify-center items-center">
  <h1 class="text-2xl font-semibold mb-4"> Wellcome Back</h1>
  <h3 class="mb-4">To keep connected with us please login
    with your personal info</h3>
    <button type="submit" class="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 ">Sign In</button>
</div>
<!-- Right: Login Form -->
<div class="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2">
  <h1 class="text-2xl font-semibold mb-4">Create Account</h1>
  <h3></h3>
  <form action="#" method="POST">
    <div class="mb-4">
      <label for="name" class="block text-gray-600">Name</label>
      <input type="text" id="name" name="name" class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" autocomplete="off">
    </div>
    <div class="mb-4">
      <label for="Email" class="block text-gray-600">Email</label>
      <input type="text" id="Email" name="Email" class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" autocomplete="off">
    </div>
    <div class="mb-4">
      <label for="password" class="block text-gray-600">Password</label>
      <input type="password" id="password" name="password" class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" autocomplete="off">
    </div>
    <!-- Remember Me Checkbox -->
    <div class="mb-4 flex items-center">
      <input type="checkbox" id="remember" name="remember" class="text-blue-500">
      <label for="remember" class="text-gray-600 ml-2">Remember Me</label>
    </div>
    <!-- Forgot Password Link -->
    <div class="mb-6 text-blue-500">
      <a href="#" class="hover:underline">Forgot Password?</a>
    </div>
    <!-- Login Button -->
    <button type="submit" class="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full">Sign Up</button>
  </form>
  <!-- Sign up  Link -->
  <!-- <div class="mt-6 text-blue-500 text-center">
    <a href="#" class="hover:underline">Sign up Here</a>
  </div> -->
</div>
</div>
</template>

<script>
</script>

<style scoped>
*{
  border: 1px dashed;
}

</style> -->
