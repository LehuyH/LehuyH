<template>
    <div id="hackathons" class="min-h-screen max-w-6xl m-auto transition-colors ease-in-out duration-700">
        <article class="p-10 relative z-10 py-10 min-h-screen" id="aboutContent">
            <h1 class="font-bold text-4xl">Hackathons</h1>
            <p class="md:text-xl">
                On of my favorite hobbies is to compete in hackathons. I've done my best to improve my overall
                coding skills by becoming involved with them. Through hackathons, I have discovered and built a solid
                community of people I respect and enjoy working with. I have attended <b>{{hackathons.length}}</b> hackathons so far!
            </p>
            <aside class="grid grid-rows-2 gap-8">
                <div class="flex overflow-x-scroll justify-start items-center gap-8 py-5">
                    <button v-for="h in hackathons" @click="selectedHackathon = h" target="_blank"
                        class="transition-transform hover:scale-105">
                        <img :src="h.img" class="max-w-[200px] max-h-[150px]" :alt="h.name" />
                    </button>
                </div>
                <div class="flex justify-center items-center">
                    <p v-if="!selectedHackathon" class="animate-pulse text-xl">Click on a hackathon ☝️</p>
                    <article v-else>
                        <h2 class="font-bold text-xl">{{selectedHackathon.name}}</h2>
                        <span class="text-gray-500">{{selectedHackathon.date.toLocaleDateString()}}</span>
                        <br>
                        <p>{{selectedHackathon.description}}</p>
                        <br>
                        <a :href="selectedHackathon.link" class="bg-primary px-4 py-2 rounded text-white mt-8" target="_blank">View Our Submission!</a>
                        
                    </article>
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
            description: `This was an in-person event and also one of my first all-day hackathons. There were mutliple themes available, but the one we selected was medical. We created a patient-doctor portal aimed at building relations and communications. The judges were unexpectedly very thorough. Questions about the security of patient data and COPPA compliance through us off 😅.`,
            link: "https://devpost.com/software/medical-ly"
        },
        {
            name: "hths.hacks() 2020",
            img: "/img/hackathons/hths.png",
            date: new Date("May 16, 2020"),
            description: `This event took place within the covid-era and we wanted to tackle a challenge that we were facing in school at the time. Our team discovered Jackbox Games during the pandemic and we wanted to see if the same style of gameplay could be applied to online studying.`,
            link: "https://devpost.com/software/studyspaces-9nufc1"
        },
        {
            name: "Def Hacks Virtual 2020",
            img: "/img/hackathons/def.png",
            date: new Date("Jun 20, 2020"),
            description: `This was another virtual hackathon with an open ended theme. At the time, we wanted to flesh out our understanding of NuxtJS as well as JWT token based authentication. Our project Mindtrack was a platform for goal setting built with these technologies.`,
            link: "https://devpost.com/software/mindtrack"
        }, {
            name: "DeltaX Hacks",
            img: "/img/hackathons/deltax.png",
            date: new Date("Sep 26, 2020"),
            description: `In this online hackathon, we revisted an old idea we had: competitive volunteering. We built a github style platform that enabled both organizations and volunteers to find each other. We put a lot of detail in our UI this time around and it really showed!`,
            link: "https://devpost.com/software/voluntier-8osag2"
        }, {
            name: "ThetaHacks",
            img: "/img/hackathons/theta.png",
            date: new Date("Jan 14 2021"),
            description: `This was an online hackathon and we wanted to return to the theme of education. We tackled student project management and accountability with our project. In terms of UI design (which was mostly delegated to me) this was one of my first dives into TailwindCSS. Since then, it has become one of my favorite design tools`,
            link: "https://devpost.com/software/craftbench"
        }, {
            name: "TritonHacks 2021",
            img: "/img/hackathons/tri.png",
            date: new Date("Jun 17 2021"),
            link: "https://devpost.com/software/cardforge",
            description: `One thing most of our team had a fond memory of was Pokemon cards. We wanted to create a unique game where players could make up cards and use them. This virutal hackathon had a game category so it was a perfect match. We learned awesome skills such as NLP and realtime websockets. The deployed version should still be playable so check it out!`
        }, {
            name: "Kajam 2021",
            img: "/img/hackathons/kajam.png",
            date: new Date("Oct 18 2021"),
            link: "https://replit.com/@LehuyH/Disasternaut?v=1",
            description: `I have always wanted to create a full blown game, but existing Javascript engines never appealed to me. Picking up another language just to make games also seemed like overkill to me. Replit released a beginner oriented game engine called Kaboom and it made game development super intuitive for me. The game our team submitted to Kajam was one of my first attempts at a web game ever!`
        }, {
            name: "Blueprint (2021/2022)",
            img: "/img/hackathons/bp.png",
            date: new Date("Feb 14 2022"),
            link: "https://github.com/LehuyH/",
            description: `We attended Blueprint twice so far. We built solutions for consumer/enviromental awareness as well as an automated study feedback engine. Both projects are available on Github.`,
        }, {
            name: "Replit Code Jam",
            img: "/img/hackathons/replit.png",
            date: new Date("Mar 31 2020"),
            link: "https://replit.com/talk/announcements/At-Home-Students-Code-Jam/32045",
            description: "This was our very first online hackathon during the pandemic. It's fitting that the theme was related to Covid-19. I was super stoked to see that our project topped the charts! Competition was quite fierce as some were very in depth and used technology like machine learning."
        }, {
            name: "Replit Music Jam",
            img: "/img/hackathons/replit-music.png",
            date: new Date("July 01 2019"),
            link: "https://replit.com/talk/challenge/Influxion-A-Rhythmic-Platformer/16847",
            description: "There's something satisfying about seeing things sync to the beat of a song. The game Geometry Dash achieved this somewhat, but we wanted to create a platformer that could truly sync to the beat of a song. The end result of the project was great. A ton of custom art makes this one of our most charming and personal projects yet!"
        }, {
            name: "Replit Game Jam",
            date: new Date("Mar 24 2019"),
            img: "/img/hackathons/replit-game.png",
            link: "https://replit.com/talk/share/CoinAGES-or-100-ethical-and-legal-company-management-game/13105",
            description: "This online game jam had a great theme: money. We designed a clicker game about the boom of the coin flipping industry. Super charming result with great satirical humor and custom art. We were amazed at the awesome feedback we got!"
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