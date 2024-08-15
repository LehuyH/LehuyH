<template>
    <div id="about" class="min-h-screen max-w-6xl m-auto transition-colors ease-in-out duration-700">
        <aside class="absolute left-0 min-h-screen w-full overflow-x-hidden flex items-center justify-center">
            <img class="w-96 m-4" src="/img/vue.svg" id="vueLogo" />
            <img class="w-96 m-4" src="/img/js.svg" id="jsLogo" />
        </aside>
        <section class="flex relative z-10 justify-center items-center py-10 min-h-screen" id="aboutContent">
            <article class="bg-slate-800 p-8 mx-8 max-w-2xl font-mono text-white rounded-md shadow-2xl text-left">
                <h1 class="md:text-5xl text-2xl">About Me 😃</h1>
                <p class="md:text-xl">
                    Hi! I'm a college student currently studying Computer Science and Web Development. I have a
                    passion for bringing ideas to <b></b>life through code.
                    <br><br>At the age of ten, I discovered my passion for coding through Scratch💖. Since then, I have gained
                    experience with web technologies such as <span class="text-yellow-600">Javascript</span>
                    <span class="inline-block h-1 w-5 mx-2 rounded-full bg-yellow-600 carat "></span>
                </p>
            </article>
        </section>
    </div>
</template>

<script setup lang="ts">
import { useWindowScroll  } from '@vueuse/core'
import { watchEffect,ref, computed, onMounted } from 'vue';
import anime from 'animejs';

const { x, y } = useWindowScroll()

const iconFlyAnimations = {
    left: anime.timeline({
        autoplay: false
    }),
    right: anime.timeline({
        autoplay: false
    })
}
const windowOpenAnimation = anime.timeline({
    autoplay: false
})

const animProgress = computed(()=>{
    const hFull = window.innerHeight
    const lower = hFull * 0.5
    const upper = hFull * 1
    if(y.value < lower) return 0
    if(y.value > upper) return 100
    return (y.value) / upper 
})

onMounted(()=>{
   iconFlyAnimations.left.add({
            targets: '#vueLogo',
            translateX: ["-100%","0%"],
            rotateZ: ["-90deg","0deg"],
            easing: 'easeInOutQuad',
            opacity: [0,1]
    })
    iconFlyAnimations.right.add({
        targets: '#jsLogo',
        translateX: ["100%","0%"],
        rotateZ: ["90deg","0deg"],
        easing: 'easeInOutQuad',
        opacity: [0,1]
    })

    windowOpenAnimation.add({
        targets: '#aboutContent',
        opacity: [0,1],
        scale: [0,1],
        easing: 'easeInOutQuad',
        delay:1000
    })
})

watchEffect(()=>{
    iconFlyAnimations.left.seek(iconFlyAnimations.left.duration * animProgress.value)
    iconFlyAnimations.right.seek(iconFlyAnimations.right.duration * animProgress.value)
    windowOpenAnimation.seek(windowOpenAnimation.duration * animProgress.value)
})


</script>

<style scoped>
.rainbow {
    background: linear-gradient(to right, #f00, #ff0, #0f0, #0ff, #00f, #f0f, #f00);
    background-size: 1000% 1000%;
    animation: rainbow 10s ease-in-out infinite;
    text-shadow: 0 0 10px black;
}

@keyframes rainbow {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
}

.carat{
    animation: carat 1s infinite;
}

@keyframes carat {
    0% {
        opacity: 0;
    }
    50% {
        opacity: 1;
    }
    100% {
        opacity: 0;
    }
}
</style>
