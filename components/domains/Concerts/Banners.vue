<template>
    <div class="banner">
        <div class="banner__wrapper">
            <div class="banner__image" />
            <div class="banner__description">
                <div class="banner__description__wrapper">
                    <div class="banner__description__title">
                        <h4>{{ formatCapitalize(title) }}</h4>
                    </div>
                    <div class="banner__description__badges">
                        <q-badge color="black"> singer-songwriter </q-badge>
                        <q-badge color="black"> singer </q-badge>
                    </div>
                    <div class="banner__description__text">
                        John Clayton Mayer, born October 16, 1977, is a singer-songwriter and
                        guitarist whose work has spanned many genres over the course of his career.
                        Raised in Fairfield, Connecticut, he attended the prestigious Berklee
                        College of Music, hoping to refine his guitar skills. He dropped out after
                        one year to pursue his career. After striking a deal with Aware/Columbia
                        Records, he released his debut album, Room for Squares in 2001. The single
                        “Your Body Is a Wonderland” launched him to fame, winning him a Grammy Award
                        for Best Male Pop Vocal Performance in 2003. That same year, he released his
                        second album Heavier Things, spawning the single “Daughters”, which won Song
                        of the Year in 2005
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    export default defineNuxtComponent({
        props: {
            title: {
                type: String,
                default: '',
                required: false,
            },
        },
        setup() {},
    })
</script>

<style lang="scss" scoped>
    .banner {
        padding: 0% 0%;
        &__wrapper {
            height: 600px;
            background: $secondary;
            display: grid;
            grid-template-columns: 60% 40%;
            border-radius: 50px;

            @media (max-width: 768px) {
                grid-template-columns: repeat(1, 1fr);
                height: 100%;
            }
        }

        &__image {
            background-image: url('@/assets/img/jhonmayer.png');
            background-size: cover;
            background-repeat: no-repeat;
            border-radius: 50px 0px 0px 50px;

            @media (max-width: 768px) {
                height: 250px;
                border-radius: 50px;
            }
        }

        &__description {
            padding: 20% 10%;

            @media (max-width: 768px) {
                padding: 5% 10%;
            }

            &__title {
                h4 {
                    font-size: 40px;
                    font-weight: 700;
                }
            }

            &__wrapper {
                display: flex;
                flex-direction: column;
                gap: 30px;
            }

            &__badges {
                display: flex;
                gap: 20px;

                @media (max-width: 768px) {
                    gap: 5px;
                }
            }

            &__text {
                color: #000;
            }
        }
    }
    :deep(.q-badge) {
        padding: 5px 8px;
    }
</style>
