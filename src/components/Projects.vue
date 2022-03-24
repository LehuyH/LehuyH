<template>
    <div id="projects" class="py-32" style="background:url('/img/dot-grid.png');">
        <article class="max-w-6xl p-10 m-auto">
            <h1 class="font-bold text-4xl">Projects</h1>
            <p class="md:text-xl">Here are some projects I have worked on outside of hackathons!</p>
            <section class="md:grid grid-cols-2 gap-4 py-8">
                <aside>
                   <a v-for="p in projects" @mouseenter="selectedProject=p" class="block md:mx-0 mx-8 py-2 group" :href="p.link" target="_blank">
                       <span class="group-hover:scale-110 transition-transform bg-clip-text 
                        bg-gradient-to-r from-pink-500 to-violet-500 
                        text-transparent font-extrabold text-6xl">
                            {{p.name}}
                       </span>
                   </a>
                </aside>
                <aside class="h-52 hidden md:flex">
                    <a v-if="selectedProject?.name === 'Studykit'" :href="selectedProject.link" target="_blank">
                        <img id="demo" class="rounded-md h-52" src="/img/projects/studybio.png">
                    </a>
                     <a id="demo" class="h-52" v-if="selectedProject?.name === 'Slasho'" :href="selectedProject.link" target="_blank">
                        <img src="/img/projects/slasho_logo.png" class="h-24 m-auto">
                        <p class="text-center">
                            {{selectedProject.description}}
                        </p>
                    </a>
                </aside>
            </section>
        </article>
    </div>
</template>

<script setup lang=ts>
import { useWindowScroll  } from '@vueuse/core'
import { watch ,ref, computed, onMounted, nextTick } from 'vue';
import anime from 'animejs';

interface IProject{
    name:string;
    description:string;
    link:string;
}

const projects:IProject[] = [
    {
        name:"Studykit",
        description:"Study like a human with a suite of social games for studying. Our games are designed to provide high-value content, make studying fun, encourage feedback, and foster group learning.",
        link:"https://studykit.lehuy.dev/"
    },{
        name:"Slasho",
        description:"Slasho is a minimal framework for making Discord bots. It's for bot developers who want a clean environment with the core functionality they need to dive straight into building their bots.",
        link:"https://github.com/LehuyH/slasho"
    }
]

const selectedProject = ref<IProject|null>(null)

watch(()=>selectedProject.value,async ()=>{
    await nextTick()
    anime({
        targets:'#demo',
        translateX:[100,0],
        duration:1000,
        opacity:[0,1],
        easing:"easeInOutQuad"
    })
})

</script>