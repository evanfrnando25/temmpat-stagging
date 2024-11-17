<template>
    <div class="banner-news">
        <div class="banner-news__wrapper">
            <div class="banner-news__image" />
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
    .banner-news {
        padding: 0% 0%;
        &__wrapper {
            height: 600px;
            display: grid;
            grid-template-columns: repeat(1, 1fr);
            border-radius: 50px;

            @media (max-width: 768px) {
                grid-template-columns: repeat(1, 1fr);
                height: 100%;
            }
        }

        &__image {
            background-image: url('/news.png');
            background-size: cover;
            width: 100%;
            background-repeat: no-repeat;
            border-radius: 50px;

            @media (max-width: 768px) {
                height: 250px;
                width: 100%;
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
