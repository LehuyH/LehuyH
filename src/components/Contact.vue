<template>
    <div class="py-20">
        <section id="contact" class="p-10 rounded-md relative z-10 text-center max-w-4xl m-auto bg-primary text-white shadow-lg">
            <h1 class="font-bold text-4xl">Contact Me</h1>
            <br>
            <form name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field" class="text-black">
                <input type="hidden" name="form-name" value="contact" />
                <input type="email" name="email" class="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                    placeholder="Reply Email" required />
                <br><br>
                <textarea placeholder="Message" class="w-full p-3 text-sm border-gray-200 rounded-lg" name="message"
                    required></textarea>
                <button type="submit"
                    class="inline-flex items-center justify-center w-full px-5 py-3 text-white bg-black rounded-lg sm:w-auto transition-transform hover:scale-105">
                    <span class="font-medium"> Send </span>
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 ml-3" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                </button>
            </form>
        </section>
    </div>
</template>

<script setup lang="ts">

</script>