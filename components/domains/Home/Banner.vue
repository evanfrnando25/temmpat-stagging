<template>
    <div class="q-pa-md">
        <q-carousel
            v-model="slide"
            vertical
            transition-prev="slide-down"
            transition-next="slide-up"
            swipeable
            keep-alive
            autoplay
            animated
            control-color="secondary"
            navigation-icon="radio_button_unchecked"
            navigation
            height="600px"
        >
            <q-carousel-slide name="style" class="column">
                <div class="wrapper__content">
                    <img src="@/assets/img/billie.png" alt="" />
                    <div class="content-description">
                        <div class="content-description__title">
                            <h1>Billie Elish</h1>
                        </div>
                        <div class="content-description__action">
                            <q-btn color="black" label="Find Ticket" padding="10px 40px" />
                        </div>
                    </div>
                </div>
            </q-carousel-slide>
            <q-carousel-slide name="kiw" class="column">
                <div class="wrapper__content">
                    <img src="@/assets/img/bruno.png" alt="" />
                    <div class="content-description">
                        <div class="content-description__title">
                            <h1>Bruno Mars</h1>
                        </div>
                        <div class="content-description__action">
                            <q-btn color="black" label="Find Ticket" padding="10px 40px" />
                        </div>
                    </div>
                </div>
            </q-carousel-slide>
        </q-carousel>
    </div>
</template>

<script lang="ts">
    export default defineNuxtComponent({
        setup() {
            const slide = ref('style')
            const lorem = 'lorem'

            return {
                slide,
                lorem,
            }
        },
    })
</script>

<style lang="scss" scoped>
    .wrapper__content {
        display: grid;
        grid-template-columns: 60% 40%;
        gap: 0%;
        background: $primary !important;

        img {
            width: 100%;
            overflow: hidden;
            height: 600px;
        }

        @media (max-width: 768px) {
            grid-template-columns: repeat(1, 1fr);

            img {
                height: 420px;
                background-size: cover;
            }
        }
    }
    .content-description {
        align-items: center;
        padding: 45% 5%;
        background: $secondary !important;

        &__title {
            h1 {
                background: $secondary;
                font-size: 50px;
                font-weight: 600;
                text-align: center;

                @media (max-width: 768px) {
                    font-size: 20px;
                }
            }
        }

        &__action {
            background: $secondary;
            justify-self: center;
        }

        @media (max-width: 768px) {
            padding: 5% 5% 10% 5%;
        }
    }
    :deep(.q-carousel__slide) {
        padding: 0px;
        width: 100%;
        overflow: hidden;
    }
    :deep(.q-carousel__navigation-inner) {
        background: $secondary;
        @media (max-width: 768px) {
            background: transparent;
        }
    }
    :deep(.q-icon) {
        background: #fec11b;
        @media (max-width: 768px) {
            background: transparent;
        }
    }
</style>
