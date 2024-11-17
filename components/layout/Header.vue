<template>
    <div class="header">
        <div class="header__wrapper">
            <div @click="linkHomePage" class="header__logo">
                <img src="/Logo.svg" />
            </div>
            <div class="header__search">
                <CommonInputSearch v-model="search" @focus="onFocus" @blur="onBlur" />
                <div v-if="shouldShowResults" class="header__search__result__wrapper">
                    <div class="header__search__result__title">
                        <h5>Trending</h5>
                    </div>
                    <div class="header__search__result__card">
                        <div class="header__search__result__card__content">
                            <div class="header__search__result__card__content__avatar">
                                <q-avatar>
                                    <img src="https://cdn.quasar.dev/img/avatar.png" />
                                </q-avatar>
                            </div>
                            <div class="header__search__result__card__content__title">
                                <h5>Jason Marz</h5>
                            </div>
                        </div>
                        <div class="header__search__result__card__content">
                            <div class="header__search__result__card__content__avatar">
                                <q-avatar>
                                    <img src="https://cdn.quasar.dev/img/avatar.png" />
                                </q-avatar>
                            </div>
                            <div class="header__search__result__card__content__title">
                                <h5>Jason Marz</h5>
                            </div>
                        </div>
                        <div class="header__search__result__card__content">
                            <div class="header__search__result__card__content__avatar">
                                <q-avatar>
                                    <img src="https://cdn.quasar.dev/img/avatar.png" />
                                </q-avatar>
                            </div>
                            <div class="header__search__result__card__content__title">
                                <h5>Jason Marz</h5>
                            </div>
                        </div>
                        <div class="header__search__result__card__content">
                            <div class="header__search__result__card__content__avatar">
                                <q-avatar>
                                    <img src="https://cdn.quasar.dev/img/avatar.png" />
                                </q-avatar>
                            </div>
                            <div class="header__search__result__card__content__title">
                                <h5>Jason Marz</h5>
                            </div>
                        </div>
                        <div class="header__search__result__card__content">
                            <div class="header__search__result__card__content__avatar">
                                <q-avatar>
                                    <img src="https://cdn.quasar.dev/img/avatar.png" />
                                </q-avatar>
                            </div>
                            <div class="header__search__result__card__content__title">
                                <h5>Jason Marz</h5>
                            </div>
                        </div>
                        <div class="header__search__result__card__content">
                            <div class="header__search__result__card__content__avatar">
                                <q-avatar>
                                    <img src="https://cdn.quasar.dev/img/avatar.png" />
                                </q-avatar>
                            </div>
                            <div class="header__search__result__card__content__title">
                                <h5>Jason Marz</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="header__navbar">
                <div class="header__navbar__wrapper">
                    <div class="header__navbar__list">
                        <a>Event</a>
                        <a>News</a>
                    </div>
                    <div class="header__navbar__icon">
                        <a>
                            <Icon name="mdi:cart" style="color: white" />
                        </a>
                        <a>
                            <Icon name="mdi:favorite" style="color: white" />
                        </a>
                        <a>
                            <Icon name="mdi:user" style="color: white" />
                        </a>
                    </div>
                    <div class="header__navbar__toogle">
                        <Icon name="mdi:hamburger-menu" style="color: white" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    export default defineNuxtComponent({
        setup() {
            const search = ref('')

            const focused = ref(false)

            const router = useRouter()

            const linkHomePage = () => {
                router.push('/')
            }

            const shouldShowResults = computed(() => {
                return focused.value
            })

            const onFocus = () => {
                focused.value = true
            }

            const onBlur = () => {
                focused.value = false
            }

            return {
                search,
                focused,
                shouldShowResults,
                onFocus,
                linkHomePage,
                onBlur,
            }
        },
    })
</script>

<style lang="scss" scoped>
    .header {
        &__wrapper {
            padding: 2% 5% 2% 3.5%;
            display: grid;
            grid-template-columns: 10% 30% 44%;
            gap: 8%;
            align-items: center;

            @media (min-width: 768px) and (max-width: 1100px) {
                grid-template-columns: 46% 46%;
            }

            @media (max-width: 768px) {
                grid-template-columns: 46% 46%;
            }
        }

        &__search {
            width: 100%;

            @media (max-width: 768px) {
                grid-row: 2;
                grid-column: 1 / 3;
            }

            @media (min-width: 768px) and (max-width: 1100px) {
                grid-row: 2;
                grid-column: 1 / 3;
            }

            &__result__wrapper {
                position: absolute;
                background: #222220;
                border: 1px solid #ffffff;
                padding: 2% 2%;
                width: 800px;
                border-radius: 10px;
                z-index: 999;
                display: flex;
                flex-direction: column;
                gap: 20px;

                @media (min-width: 768px) and (max-width: 1100px) {
                    position: relative;
                    width: 100%;
                }

                @media (max-width: 768px) {
                    display: none;
                }
            }

            &__result__title {
                h5 {
                    font-size: 20px;
                }
            }

            &__result__card {
                display: grid;
                grid-template-columns: repeat(4, 1fr);
                gap: 20px;
                &__content {
                    display: flex;
                    align-items: center;
                    gap: 20px;
                    cursor: pointer;

                    &__title {
                        h5 {
                            font-size: 14px;
                        }
                    }
                }
            }
        }

        &__logo {
            align-items: center;
            align-self: center;

            img {
                cursor: pointer;
            }
        }

        &__navbar {
            &__wrapper {
                display: flex;
                justify-content: space-between;
                align-items: center;
                align-self: center;
                align-content: center;

                @media (max-width: 768px) {
                    justify-items: end;
                    display: flex;
                    justify-content: end;
                }
            }

            &__list {
                display: flex;
                gap: 30px;

                a {
                    font-size: 15px;
                    font-weight: 500;
                    cursor: pointer;

                    &:hover {
                        color: $secondary;
                    }
                }

                @media (max-width: 768px) {
                    display: none;
                }
            }

            &__icon {
                display: flex;
                gap: 30px;
                align-items: center;
                font-weight: 500;

                a {
                    font-size: 30px;
                    cursor: pointer;

                    span:hover {
                        color: $secondary !important;
                    }
                }

                @media (max-width: 768px) {
                    display: none;
                }
            }

            &__toogle {
                display: none;

                @media (max-width: 768px) {
                    display: block;
                    font-size: 25px;
                    align-self: center;
                }
            }
        }
    }
</style>
