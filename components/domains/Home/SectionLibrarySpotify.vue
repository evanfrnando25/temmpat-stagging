<template>
    <div class="section-spotify">
        <div class="section-spotify__wrapper">
            <div class="section-spotify__title">
                <h2>Based On Your: Favorite Music</h2>
                <hr />
            </div>
            <div class="section-spotify__content">
                <div class="section-spotify__content__action-connected">
                    <q-btn
                        align="between"
                        class="btn-fixed-width"
                        rounded
                        color="transparent"
                        padding="10px 20px "
                        label="Connected To Spotify"
                        icon="img:/spotigy.svg"
                    />
                </div>
                <div class="section-spotify__content__description">
                    <h5>
                        We recommendation you to connect with your spotify, <br />
                        so you can find fast your favorite artist concert here
                    </h5>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .section-spotify {
        &__wrapper {
            margin: 50px 0px;
        }
        &__title {
            width: 20%;

            @media (max-width: 768px) {
                width: 50%;
            }
            h2 {
                font-size: 30px;
                font-weight: 500;

                @media (max-width: 768px) {
                    font-size: 18px;
                    line-height: 25px;
                }
            }

            hr {
                width: 100%;
            }
        }

        &__content {
            text-align: center;
            padding: 5% 0% 0% 0%;
            display: flex;
            flex-direction: column;
            gap: 30px;

            @media (max-width: 768px) {
                padding: 10% 0% 0% 0%;
            }

            &__description {
                h5 {
                    font-size: 15px;
                    font-weight: lighter;

                    @media (max-width: 768px) {
                        font-size: 12px;
                    }
                }
            }
        }
    }
</style>
