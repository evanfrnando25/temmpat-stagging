<template>
    <div>
        <DomainsConcertsBanners v-if="artistId" :title="artistId" />
        <DomainsConcertsSchedule />
        <DomainsHomeSectionPoppular title="Recomendded For You" />
        <CommonSubscription />
    </div>
</template>

<script lang="ts">
    export default defineNuxtComponent({
        setup() {
            const route = useRoute()
            const artistId = ref(route.params.artists)

            watch(
                () => route.params.artists,
                (newArtistId) => {
                    artistId.value = newArtistId
                },
                { immediate: true }, // Ini akan langsung menjalankan watch saat pertama kali komponen dibuat
            )
            return {
                artistId,
            }
        },
    })
</script>
