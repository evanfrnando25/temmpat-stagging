<template>
    <div class="section-spotify">
        <div class="section-poppular__wrapper">
            <div class="section-poppular__title">
                <h2>Poppular Artist</h2>
            </div>
            <div class="section-poppular__content">
                <MyPrefix-Carousel v-bind="config">
                    <MyPrefix-Slide v-for="slide in 10" :key="slide">
                        <CommonCardArtists />
                    </MyPrefix-Slide>
                </MyPrefix-Carousel>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    export default defineNuxtComponent({
        setup() {
            const itemToShowConfig = ref(3)

            let config = {
                itemsToShow: itemToShowConfig,
                wrapAround: false,
                autoplay: 0,
                gap: 50,
            }

            const updateCarouselConfig = () => {
                if (window.innerWidth < 768) {
                    itemToShowConfig.value = 3
                } else {
                    itemToShowConfig.value = 3
                }
            }

            onMounted(() => {
                if (import.meta.client) {
                    window.addEventListener('resize', updateCarouselConfig)
                    updateCarouselConfig()
                }
            })

            onBeforeUnmount(() => {
                if (import.meta.client) {
                    window.removeEventListener('resize', updateCarouselConfig)
                }
            })

            return {
                config,
            }
        },
    })
</script>

<style lang="scss" scoped>
    .section-poppular {
        &__wrapper {
            margin: 60px 0px;
        }
        &__title {
            width: 22%;

            @media (max-width: 768px) {
                width: 60%;
            }
            h2 {
                font-size: 30px;
                font-weight: 500;

                @media (max-width: 768px) {
                    font-size: 25px;
                    line-height: 30px;
                }
            }

            hr {
                width: 100%;
            }
        }

        &__content {
            padding: 5% 0%;
            width: 100%;
            grid-template-columns: repeat(3, 1fr);

            @media (max-width: 768px) {
                padding: 10% 0% 0% 0%;
            }
        }
    }

    :deep(.carousel__slide) {
        margin: 0px 20px;

        @media (max-width: 768px) {
            padding: 0px 5px;
            margin: 0px 0px;
        }
    }
    :deep(.q-card) {
        width: 100%;
        height: 100%;
        cursor: pointer;
    }
</style>
