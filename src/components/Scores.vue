<template>
    <div>
        <div class="row" v-for="score in scores" :key="score.date">
            <div class="col">{{score.name}}</div>
            <div class="col">{{score.date}}</div>
            <div class="col">{{score.strokes}}</div>
            <div class="col">{{score.adjustment}}</div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'scores-pages',
    data(){
        return {
            scores: [
                {
                    name: "Stavanger Golf Klubb",
                    date: new Date(),
                    strokes: 80,
                    adjustment: -1
                },
                {
                    name: "Stavanger Golf Klubb",
                    date: new Date(),
                    strokes: 80,
                    adjustment: -1
                },
                {
                    name: "Stavanger Golf Klubb",
                    date: new Date(),
                    strokes: 80,
                    adjustment: -1
                },
                {
                    name: "Stavanger Golf Klubb",
                    date: new Date(),
                    strokes: 80,
                    adjustment: -1
                }
            ]
        }
    }
}
</script>
