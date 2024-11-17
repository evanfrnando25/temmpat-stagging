<template>
    <div class="schedule">
        <CommonCardSchedule @click="linkRouter" />
        <CommonCardSchedule @click="linkRouter" />
        <CommonCardSchedule @click="linkRouter" />
    </div>
</template>

<script lang="ts">
    export default defineNuxtComponent({
        setup() {
            const route = useRouter()

            const linkRouter = () => {
                route.push('/concerts/jhon-mayer/dubai')
            }

            return {
                linkRouter,
            }
        },
    })
</script>

<style lang="scss" scoped>
    .schedule {
        margin: 50px 0px;
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        gap: 40px;
    }
</style>
