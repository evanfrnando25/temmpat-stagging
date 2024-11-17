<template>
    <div class="subscription">
        <div class="subscription__wrapper">
            <div class="subscription__content">
                <h3>Emails News Letter</h3>
                <h5>Epic events and incredible deals straight to your inbox.</h5>
            </div>
            <div class="subscription__form">
                <div class="subscription__form__wrapper">
                    <q-input filled v-model="text" input-class="text-white" />
                </div>
                <q-btn
                    stadnout
                    style="background: goldenrod; color: white"
                    label="Subscribe"
                    hide-botton-space="true"
                    dense="false"
                />
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .subscription {
        &__wrapper {
            padding: 10% 10%;
            display: grid;
            grid-template-columns: 50% 30%;
            gap: 20%;

            @media (max-width: 768px) {
                grid-template-columns: repeat(1, 1fr);
                gap: 5%;
            }
        }

        &__content {
            display: flex;
            flex-direction: column;
            gap: 40px;

            h5 {
                font-weight: lighter;
                font-size: 20px;
            }
        }

        &__form {
            display: flex;
            flex-direction: column;
            gap: 30px;
            &__wrapper {
                border: 1px solid $secondary;
                border-radius: 10px;
                padding: 5px;
            }
        }
    }
</style>
