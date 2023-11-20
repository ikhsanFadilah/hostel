<template>
    <section id="Navbar">
        <nav class="bg-white-800 p-4">
            <div class="container mx-auto flex justify-center items-center">
                <router-link to="/page1" class="text-black mx-5">Home</router-link>
                <router-link to="/page1" class="text-black mx-5">About</router-link>
                <router-link to="/page1" class="text-black mx-5">Reservation</router-link>
                <router-link to="/page2" class="text-black mx-12 text-xl font-bold">Hostel</router-link>
                <router-link to="/page3" class="text-black mx-5">Our Rooms</router-link>
                <router-link to="/page3" class="text-black mx-5">Facilities</router-link>
                <router-link to="/page3" class="text-black mx-5">Contacs</router-link>
            </div>
        </nav>
    </section>
    <section id="Hero">
        <div class="hero min-h-screen" style="background-image: url('src/assets/landing/kakisantai.png');">
            <div class="text w-1/2">
                <h1 class="text-6xl font-bold mb-4">Enjoy A Luxuary Experience</h1>
                <p class="text-lg mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
                    dolore magna aliqua.
                </p>
                <button class="btn hover:border-4 hover:border-white border-2 p-2">Visit our Hostel</button>
            </div>
        </div>
    </section>
    <section id="Reservation">
        <div class="container reservation mx-auto">
            <div class="flex items-center justify-center p-12">
                <form action="reservation" method="POST">
                    <div class="-mx-3 flex">
                        <div class="px-3 sm:w-1/2">
                            <div class="mb-5">
                                <label for="date" class="mb-3 block text-base font-medium text-[#07074D]">
                                    Check-in Date
                                </label>
                                <input type="date" name="date" id="date"
                                    class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                            </div>
                        </div>
                        <div class="px-3 sm:w-1/2">
                            <div class="mb-5">
                                <label for="date" class="mb-3 block text-base font-medium text-[#07074D]">
                                    Checkout Date
                                </label>
                                <input type="date" name="date" id="date"
                                    class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                                <!-- <label for="time" class="mb-3 block text-base font-medium text-[#07074D]">
                                    Time
                                </label>
                                <input type="time" name="time" id="time"
                                    class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" /> -->
                            </div>
                        </div>
                    </div>
                    <div class="mb-5">
                        <label for="guest" class="mb-3 block text-base font-medium text-[#07074D]">
                            How many guest are you bringing?
                        </label>
                        <input type="number" name="guest" id="guest" placeholder="5" min="0"
                            class="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                    </div>
                    <div>
                        <button
                            class="hover:shadow-form rounded-md bg-[#454545] py-3 px-8 text-center text-base font-semibold text-white outline-none">
                            Check Availibility
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </section>
    <section id="About Us">
        <div class="container mx-auto flex items-center p-12">
            <div class="w-1/3 ml-52">
                <img src="src/assets/landing/about.png" alt="About Us" class="rounded-lg shadow-md">
            </div>
            <div class="w-1/3 ml-8">
                <h2 class="text-3xl font-bold mb-4">About Us</h2>
                <p class="text-lg mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                    ex ea commodo consequat.
                </p>
                <p class="text-lg mb-4">
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                    laborum.
                </p>
                <a href="#" class="text-black hover:border-grey-500 hover:border-black border-2 p-2">Discover me</a>
            </div>
        </div>
    </section>
    <section id="Facility">
        <div class="bg-gray-100 p-12">
            <div class="text-center">
                <h1 class="text-3xl font-bold mb-4">The Hostel</h1>
                <p class="text-gray-700 mb-12">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis, ullam
                    magni
                    eos suscipit consequatur saepe?Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta quod sint
                    molestiae rem doloribus earum eum esse quo, natus maxime, veritatis quae commodi possimus laborum quia
                    facere nostrum cupiditate repudiandae.</p>
            </div>
            <div class="grid grid-cols-3 gap-12">
                <div class="bg-white p-4 rounded-md shadow-md square">
                    <h3 class="text-lg font-semibold mb-2">Facility 1</h3>
                    <p>Description of Facility 1.</p>
                </div>
                <div class="bg-white p-4 rounded-md shadow-md square">
                    <h3 class="text-lg font-semibold mb-2">Facility 2</h3>
                    <p>Description of Facility 2.</p>
                </div>
                <div class="bg-white p-4 rounded-md shadow-md square">
                    <h3 class="text-lg font-semibold mb-2">Facility 3</h3>
                    <p>Description of Facility 3.</p>
                </div>
                <div class="bg-white p-4 rounded-md shadow-md square">
                    <h3 class="text-lg font-semibold mb-2">Facility 4</h3>
                    <p>Description of Facility 4.</p>
                </div>
                <div class="bg-white p-4 rounded-md shadow-md square">
                    <h3 class="text-lg font-semibold mb-2">Facility 5</h3>
                    <p>Description of Facility 5.</p>
                </div>
                <div class="bg-white p-4 rounded-md shadow-md square">
                    <h3 class="text-lg font-semibold mb-2">Facility 6</h3>
                    <p>Description of Facility 6.</p>
                </div>
            </div>
        </div>
    </section>
    <section class="hero h-screen flex items-center justify-center bg-cover"
        style="background-image: url('src/assets/landing/youtube.png');">
        <div class="text-white text-center">
            <h1 class="text-4xl font-bold mb-6">Take a Tour of luxury</h1>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                class="w-16 h-16 mx-auto mb-4">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M21 12l-18 9.077v-18.154l18 9.077zm0 0l-12-6-12 6"></path>
            </svg>

            <!-- YouTube Title -->

            <!-- Other content or buttons can be added here -->
        </div>
    </section>
    <section id="Footer">
        <footer class="footer p-10 bg-base-200 text-base-content">
            <nav>
                <header class="footer-title">Services</header>
                <a class="link link-hover">Branding</a>
                <a class="link link-hover">Design</a>
                <a class="link link-hover">Marketing</a>
                <a class="link link-hover">Advertisement</a>
            </nav>
            <nav>
                <header class="footer-title">Company</header>
                <a class="link link-hover">About us</a>
                <a class="link link-hover">Contact</a>
                <a class="link link-hover">Jobs</a>
                <a class="link link-hover">Press kit</a>
            </nav>
            <nav>
                <header class="footer-title">Legal</header>
                <a class="link link-hover">Terms of use</a>
                <a class="link link-hover">Privacy policy</a>
                <a class="link link-hover">Cookie policy</a>
            </nav>
        </footer>
        <footer class="footer px-10 py-4 border-t bg-base-200 text-base-content border-base-300">
            <aside class="items-center grid-flow-col">
                <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd"
                    clip-rule="evenodd" class="fill-current">
                    <path
                        d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z">
                    </path>
                </svg>
                <p>PKL Industries Ltd. <br />Providing reliable tech since 2023</p>
            </aside>
            <nav class="md:place-self-center md:justify-self-end">
                <div class="grid grid-flow-col gap-4">
                    <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                            class="fill-current">
                            <path
                                d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z">
                            </path>
                        </svg></a>
                    <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                            class="fill-current">
                            <path
                                d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z">
                            </path>
                        </svg></a>
                    <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                            class="fill-current">
                            <path
                                d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z">
                            </path>
                        </svg></a>
                </div>
            </nav>
        </footer>
    </section>
</template>

<style scoped>
.text {
    padding-top: 130px;
    padding-left: 90px;
    color: white;
    width: 50%;
}

.hero {
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
}

/* Footer styles */
body {
    font-family: 'Arial', sans-serif;
    margin: 0;
    padding: 0;
}

/* Facility styles */
.square {
    width: 375px;
    /* Set your desired width */
    height: 320px;
    /* Set your desired height */
}

/* Footer styles */
.footer {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    background-color: #ffffff;
    color: #000000;
    padding: 30px;
}

.footer-title {
    font-size: 1.2em;
    font-weight: bold;
    margin-bottom: 0.5em;
}

nav {
    display: flex;
    flex-direction: column;
    /* Change the direction to column */
}

.link {
    text-decoration: none;
    color: #000000;
    /* Set your desired link color */
    margin-bottom: 0.5em;
    /* Add margin for better spacing between links */
}

.link-hover:hover {
    text-decoration: underline;
}

.items-center {
    align-items: center;
}

@media screen and (max-width: 600px) {
    .footer-title {
        order: 2;
        /* Move the title below the links on smaller screens */
    }

    .footer {
        flex-direction: column;
        text-align: center;
    }

    .items-center {
        flex-direction: column;
        text-align: center;
    }

    nav {
        margin-bottom: 1em;
    }

    .md\:place-self-center {
        place-self: center;
    }

    .md\:justify-self-end {
        justify-self: flex-end;
    }
}
</style>