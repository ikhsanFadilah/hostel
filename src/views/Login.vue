<template>
    <div>
        <div
            class="bg-slate-800 border border-slate-600 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-lg bg-opacity-30 relative transition-all duration-200">
            <h1 class="text-4xl text-white font-bold text-center mb-6">Login</h1>
            <form action="">
                <div class="relative my-4">
                    <input type="email"
                        class="block w-72 py-2.5 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer"
                        placeholder="" />
                    <label for=""
                        class="absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                        Your Email
                    </label>
                    <BiUser class="absolute top-4 right-4" />
                </div>
                <div class="relative my-4">
                    <input type="password"
                        class="block w-72 py-2.5 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer"
                        placeholder="" />
                    <label for=""
                        class="absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                        Your Password
                    </label>
                    <AiOutlineUnlock class="absolute top-4 right-4" />
                </div>
                <div class="flex justify-between items-center">
                    <div class="flex gap-2 items-center">
                        <input type="checkbox" name="" id="" />
                        <label for="Remember Me">Remember Me</label>
                    </div>
                    <router-link to="" class="text-blue-500">Forgot Password?</router-link>
                </div>
                <button
                    class="w-full mb-4 text-[18px] mt-6 rounded-full bg-white text-emerald-800 hover:bg-emerald-600 hover:text-white py-2 transition-colors duration-300"
                    type="submit">
                    Login
                </button>
                <div>
                    <span class="m-4">New Here? <router-link class="text-blue-500" to="/Register">Create an
                            Account</router-link></span>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
</script>