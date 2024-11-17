<template>
    <div class="wrapper">
        <q-btn size="5" rounded color="white" icon="my_location" />

        <q-btn-dropdown
            split
            color="primary"
            push
            no-caps
            icon="location_on"
            label="Location"
            @click="onMainClick"
        >
            <q-list> </q-list>
        </q-btn-dropdown>

        <q-btn-dropdown
            split
            color="primary"
            push
            text-color="black"
            no-caps
            icon="event"
            label="Dates"
            @click="onMainClick"
        >
            <q-list> </q-list>
        </q-btn-dropdown>
        <q-btn-dropdown
            split
            color="primary"
            push
            text-color="black"
            no-caps
            icon="sort"
            label="Sort By"
            @click="onMainClick"
        >
            <q-list> </q-list>
        </q-btn-dropdown>
    </div>
</template>

<style lang="scss" scoped>
    .wrapper {
        display: flex;
        gap: 25px;
        padding: 5% 3%;

        @media (max-width: 768px) {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            width: 50%;
        }
    }
    :deep(.q-icon, .block) {
        color: #000 !important;

        span {
            color: #000 !important;
        }
    }
</style>
