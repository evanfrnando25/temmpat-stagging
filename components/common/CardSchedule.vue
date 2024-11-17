<template>
    <div class="card-schedule">
        <div class="card-schedule__wrapper">
            <div class="card-schedule__title">
                <h3>Qatar F1 GP 2024 with Jhon Mayer</h3>
            </div>
            <div class="card-schedule__content">
                <div class="card-schedule__content__wrapper">
                    <div class="card-schedule__content__date">
                        <span class="card-schedule__content__date__icon"
                            ><Icon name="mdi:event"
                        /></span>
                        <span>29 Nov 2025 </span>
                        <span> | Friday | </span>
                        <span>10.15 Am </span>
                    </div>
                    <div class="card-schedule__content__place">
                        <span><Icon name="mdi:location" /></span>
                        <span>Qatar, Dubai Lusainal Internationl Circuit</span>
                    </div>
                    <div class="card-schedule__content__action">
                        <q-btn
                            style="background: goldenrod; color: white"
                            rounded
                            label="See Available Ticket"
                        />
                    </div>
                </div>
            </div>
            <div class="card-favorite">
                <Icon name="mdi:favorite" />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    export default defineNuxtComponent({
        setup() {},
    })
</script>

<style lang="scss" scoped>
    .card-schedule {
        &__wrapper {
            border: 1px solid $secondary;
            padding: 2% 5%;
            border-radius: 50px;
            display: flex;
            position: relative;
            flex-direction: column;
            cursor: pointer;
            gap: 50px;

            @media (max-width: 768px) {
                padding: 10% 5%;
            }
        }

        &__title {
            h3 {
                font-size: 30px;
                font-weight: 500;
            }
        }

        &__content {
            &__wrapper {
                display: grid;
                grid-template-columns: 30% 30% 30%;
                gap: 5%;
                align-items: center;
                position: relative;

                @media (max-width: 768px) {
                    grid-template-columns: repeat(1, 1fr);
                    gap: 30px;
                }
            }

            &__date {
                align-items: center;
                display: flex;
                align-content: center;
                gap: 10px;
                align-self: center;

                &__icon {
                    font-size: 20px;
                    align-items: center;
                    align-self: center;
                    align-content: center;
                }

                span:nth-child(2) {
                    font-weight: 600;
                }

                span:nth-child(3) {
                    font-weight: 200;
                }

                span:nth-child(4) {
                    font-weight: 200;
                }
            }

            &__place {
                display: flex;
                gap: 10px;
            }

            &__action {
                justify-content: end;
                justify-items: end;
                text-align: end;
            }
        }
    }

    .card-favorite {
        position: absolute;
        right: 0;
        top: 0;
        margin-top: 2%;
        margin-right: 5%;
        font-size: 25px;
        cursor: pointer;

        @media (max-width: 768px) {
            margin-top: 5%;
            margin-right: 7%;
        }
    }
</style>
