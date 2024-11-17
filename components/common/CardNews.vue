<template>
    <q-card class="my-card">
        <q-img src="/news.png" class="responsive-image">
            <div class="absolute-bottom text-h6 text-left">Gen Z diminta ngalah dulu...</div>
        </q-img>

        <q-card-section class="text-primary text-left text-primary">
            <div class="card-content">
                <div class="card-content__wrapper">
                    <div class="card-content__description">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem ea odit
                        nemo. Explicabo rem ut asperiores quasi quaerat molestias harum accusantium
                        culpa tempore. Dolor veritatis amet maxime rerum ratione cum?
                    </div>
                    <div class="card-content__action">
                        <q-btn size="12px" color="primary" label="Read More" />
                    </div>
                </div>
            </div>
        </q-card-section>
    </q-card>
</template>

<style lang="scss" scoped>
    .card-content {
        &__wrapper {
            gap: 15px;
            padding: 2% 5% 2% 0%;
            text-align: start;
            justify-content: start;

            button {
                font-size: 5px;
            }

            @media (max-width: 768px) {
                padding: 0%;
            }
        }

        &__description {
            color: #000;
            font-weight: lighter;
            font-size: 10px;
            line-height: 15px;
            text-align: justify;
        }

        &__action {
            margin: 20px 0px 0px 0px;
            justify-content: end;
            text-align: end;
        }
    }
    :deep(.q-card__section) {
        background: #d9d9d9;
    }

    .responsive-image {
        width: 100%;
        height: auto;
        object-fit: cover;
    }

    :deep(.q-btn) {
        padding: 0px;
        border-radius: 10px;
        padding: 5px 10px;
        font-size: 8px !important;
    }

    @media (max-width: 768px) {
        .responsive-image {
            object-position: center;
        }

        :deep(.q-btn__content) {
            font-size: 5px;
        }
        :deep(.q-btn) {
            padding: 5px 3px !important;
            font-size: 5px;
            border-radius: 10px;
        }
    }
</style>
