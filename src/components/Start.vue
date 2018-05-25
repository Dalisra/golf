<template>

<div>

    <div>Samle div: {{picked}}</div>

    <div v-if="picked.step == 1">
        <select v-model="pickedCourse">
            <option v-for="course in courses" :key="course">{{course}}</option>
        </select>
        <button @click="pickCourse">Pick</button>
    </div>

    <div v-if="picked.step == 2">
        <button @click="goBack">Tilbake</button>
    </div>

    <div><button @click="remove">Slett</button></div>
</div>

</template>
<script>
export default {
    name: 'scores-pages',
    data(){
        return {
            courses: [
                "Stavanger Golf Klubb",
                "Sandefjord Golf Klubb"
            ],
            pickedCourse: null,
            picked: {
                id: new Date(),
                course: null,
                step: 1
            }
        }
    },
    methods: {
        goBack: function(){
            this.picked.step--
        },
        pickCourse : function(){
            if(this.pickedCourse){
                this.picked.course = this.pickedCourse
                this.picked.step++
                localStorage.setItem("picked", JSON.stringify(this.picked))
            }
        },
        remove: function(){
            this.picked = {
                id: new Date(),
                course: null,
                step: 1
            }
            localStorage.removeItem("picked")
        }
    },
    mounted(){
        let i = localStorage.getItem("picked")
        if(i) this.picked = JSON.parse(i)
    }
}
</script>
