<template>
    <div class="card-ticketing">
        <div class="card-ticketing__wrapper">
            <div class="card-ticketing__title">
                <h3>Qatar F1 GP 2024 with Jhon Mayer</h3>
                <h5>Rp. 15.000.000 <span> / Ticket</span></h5>
            </div>
            <div class="card-ticketing__content">
                <div class="card-ticketing__content__wrapper">
                    <div class="card-ticketing__content__date">
                        <span class="card-ticketing__content__date__icon"
                            ><Icon name="mdi:event"
                        /></span>
                        <span>29 Nov 2025 </span>
                        <span> | Friday | </span>
                        <span>10.15 Am </span>
                    </div>
                    <div class="card-ticketing__content__place">
                        <span><Icon name="mdi:location" /></span>
                        <span>Qatar, Dubai Lusainal Internationl Circuit</span>
                    </div>
                    <div class="card-ticketing__content__place">
                        <span><Icon name="fa-ticket" /></span>
                        <span>10 Available Ticket</span>
                    </div>
                    <div class="card-ticketing__content__action">
                        <q-btn
                            style="background: goldenrod; color: white"
                            rounded
                            label="Proceed"
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

<style lang="scss" scoped>
    .card-ticketing {
        &__wrapper {
            border: 1px solid $secondary;
            padding: 2% 5%;
            border-radius: 50px;
            display: flex;
            position: relative;
            flex-direction: column;
            gap: 50px;

            @media (max-width: 768px) {
                padding: 10% 5%;
            }
        }

        &__title {
            display: flex;
            justify-content: space-between;
            padding: 0% 10% 0% 0%;

            @media (max-width: 768px) {
                display: flex;
                flex-direction: column;
                gap: 20px;
            }

            h3 {
                font-size: 30px;
                font-weight: 500;
            }

            h5 {
                color: #fff;
                font-weight: 600;

                span {
                    font-size: 12px;
                    font-weight: lighter;
                }
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

                @media (min-width: 768px) {
                    grid-column: 3;
                }
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
