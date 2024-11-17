<template>
    <div class="schedule">
        <CommonCardTicketing />
        <CommonCardTicketing />
        <CommonCardTicketing />
    </div>
</template>

<style lang="scss" scoped>
    .schedule {
        margin: 50px 0px;
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        gap: 40px;
    }
</style>
