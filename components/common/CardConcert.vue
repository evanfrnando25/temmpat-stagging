<template>
    <q-card class="my-card">
        <q-img :src="image">
            <div class="absolute-bottom text-h6 text-left">{{ title }}</div>
        </q-img>

        <q-card-section class="text-primary text-left text-primary">
            <div class="card-content">
                <div class="card-content__wrapper">
                    <div class="card-content__title">
                        <h5>Dualipa Concert At Jakarta</h5>
                    </div>
                    <div class="card-content__date">
                        <Icon name="mdi:calendar" />
                        <span>15 Feb 2025</span>
                    </div>
                    <div class="card-content__place">
                        <Icon name="mdi:location" />
                        <span>Gelora Bung Karno</span>
                    </div>
                    <div class="card-content__higlight">
                        <div class="card-content__higlight__favorite-count">
                            <Icon name="mdi:favorite" />
                            <span>13,2 K</span>
                        </div>
                        <div class="card-content__higlight__ticket">
                            <Icon name="mdi:favorite" />
                            <span>10 Available Tickets</span>
                        </div>
                        <div class="card-content__higlight__action">
                            <q-btn size="8px" color="primary" label="See Details" />
                        </div>
                    </div>
                </div>
            </div>
        </q-card-section>
    </q-card>
</template>

<script lang="ts">
    export default defineNuxtComponent({
        props: {
            image: {
                type: String,
                default: '',
                required: false,
            },
            title: {
                type: String,
                default: '',
                required: false,
            },
        },
    })
</script>

<style lang="scss" scoped>
    .card-content {
        &__wrapper {
            display: flex;
            flex-direction: column;
            gap: 15px;
        }

        &__title {
            h5 {
                color: #000;
                font-weight: bold;
                font-size: 18px;
            }
        }

        &__date,
        &__place {
            align-items: center;
            display: flex;
            gap: 10px;
            span {
                color: #000;
            }
        }

        &__higlight {
            margin-top: 10px;
            position: relative;
            display: flex;
            justify-content: space-evenly;
            gap: 10%;

            &__favorite-count {
                display: flex;
                gap: 5px;
                align-items: center;
                align-content: center;

                span:nth-child(1) {
                    color: red;
                }

                span:nth-child(2) {
                    color: $primary;
                    font-weight: 500;
                    font-size: 12px;
                }
            }

            &__ticket {
                display: flex;
                gap: 5px;
                align-items: center;
                align-content: center;

                span:nth-child(1) {
                    color: $secondary;
                }

                span:nth-child(2) {
                    color: $primary;
                    font-weight: 500;
                    font-size: 12px;
                }
            }

            &__action {
                position: relative;
            }
        }
    }
    :deep(.q-card__section) {
        background: #d9d9d9;
    }
    :deep(.q-card) {
        width: 100%;
        cursor: pointer;
    }
</style>
