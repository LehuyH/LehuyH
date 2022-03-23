<template>
    <div id="about" class="min-h-screen max-w-6xl m-auto transition-colors ease-in-out duration-700">
        <section class="absolute left-0 min-h-screen w-full overflow-x-hidden flex items-center justify-center">
            
        </section>
        <article class="p-10 relative z-10 py-10 min-h-screen" id="aboutContent">
            <h1 class="font-bold text-4xl">Hackathons</h1>
            <p class="text-xl">
                I adore competitive experiences. I've done my best to improve my overall
                coding skills by becoming involved with them. Through hackathons, I have discovered and built a solid
                community of people I respect and enjoy working with. I have attended <b>{{hackathons.length}}</b> hackathons so far!
            </p>
            <aside class="grid grid-cols-2 gap-8">
                <div class="flex justify-center items-center">
                    <p v-if="!selectedHackathon" class="animate-pulse text-xl">Click on a hackathon 👉</p>
                    <article v-else>
                        <h2 class="font-bold text-xl">{{selectedHackathon.name}}</h2>
                        <span class="text-gray-500">{{selectedHackathon.date.toLocaleDateString()}}</span>
                        <br>
                        <p>{{selectedHackathon.description}}</p>
                        
                        
                    </article>
                </div>
                <div class="flex flex-wrap justify-start items-center gap-8 py-5">
                    <button v-for="h in hackathons" @click="selectedHackathon = h" target="_blank"
                        class="transition-transform hover:scale-105">
                        <img :src="h.img" class="max-w-[200px] max-h-[150px]" :alt="h.name" />
                    </button>
                </div>
            </aside>
        </article>
    </div>
</template>

<script setup lang="ts">
import { useWindowScroll  } from '@vueuse/core'
import { watchEffect,ref, computed, onMounted } from 'vue';
import anime from 'animejs';

interface HackathonInfo{
    img: string,
    name: string,
    date: Date,
    description?: string,
    link?: string
}
const hackathons: HackathonInfo[] = [{
            name: "Expo Hacks II",
            img: "/img/hackathons/ye.png",
            date: new Date("Aug 17, 2019"),
            description: `Expo Hacks is a high school hackathon—a 12-hour programming event where students work in teams to make various software projects.`,
            link: "https://devpost.com/software/medical-ly"
        },
        {
            name: "hths.hacks() 2020",
            img: "/img/hackathons/hths.png",
            date: new Date("May 16, 2020"),
            description: `There’s something about being under a deadline that generates the best ideas. That’s why high school students strategically plan to do assignments right at the last minute. At hths.hacks(), we believe that tech can change the world, so we’re challenging you to solve a problem in 24 hours.`,
            link: "https://devpost.com/software/studyspaces-9nufc1"
        },
        {
            name: "Def Hacks Virtual 2020",
            img: "/img/hackathons/def.png",
            date: new Date("Jun 20, 2020"),
            description: `Def Hacks is a virtual hackathon where students from all over the world come together to create a project.`,
            link: "https://devpost.com/software/mindtrack"
        }, {
            name: "DeltaX Hacks",
            img: "/img/hackathons/deltax.png",
            date: new Date("Sep 26, 2020"),
            link: "https://devpost.com/software/voluntier-8osag2"
        }, {
            name: "ThetaHacks",
            img: "/img/hackathons/theta.png",
            date: new Date("Jan 14 2021"),
            link: "https://devpost.com/software/craftbench"
        }, {
            name: "TritonHacks 2021",
            img: "/img/hackathons/tri.png",
            date: new Date("Jun 17 2021"),
            link: "https://devpost.com/software/cardforge"
        }, {
            name: "Kajam 2021",
            img: "/img/hackathons/kajam.png",
            date: new Date("Oct 18 2021"),
            link: "https://replit.com/@LehuyH/Disasternaut?v=1"
        }, {
            name: "Blueprint (2021/2022)",
            img: "/img/hackathons/bp.png",
            date: new Date("Feb 14 2022"),
            link: "https://github.com/LehuyH/focale",
            description: `Blueprint 2022 is a weekend-long virtual learnathon and hackathon for high school students, open to all skill levels – from first-time hackers to veteran coders! `,
        }, {
            name: "Replit Code Jam",
            img: "/img/hackathons/replit.png",
            date: new Date("Mar 31 2020"),
            link: "https://replit.com/talk/announcements/At-Home-Students-Code-Jam/32045"
        }, {
            name: "Replit Music Jam",
            img: "/img/hackathons/replit-music.png",
            date: new Date("July 01 2019"),
            link: "https://replit.com/talk/challenge/Influxion-A-Rhythmic-Platformer/16847"
        }, {
            name: "Replit Game Jam",
            date: new Date("Mar 24 2019"),
            img: "/img/hackathons/replit-game.png",
            link: "https://replit.com/talk/share/CoinAGES-or-100-ethical-and-legal-company-management-game/13105"
        }
].sort((a, b) => {
    return a.date.getTime() - b.date.getTime()
})

const selectedHackathon = ref<null|HackathonInfo>(null)

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
    if(y.value < 900) return 0
    if(y.value > 900) return 100
    return (y.value - 900) / (1200 - 900)
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