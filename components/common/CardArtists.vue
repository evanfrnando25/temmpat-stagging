<template>
    <q-card class="my-card">
        <q-img src="/rizkyfebian.png" class="responsive-image">
            <div class="absolute-bottom text-h6 text-left">Rizky Febian</div>
        </q-img>

        <q-card-section class="text-primary text-left text-primary">
            <div class="card-content">
                <div class="card-content__wrapper">
                    <q-btn size="12px" color="primary" label="See Schedule For Concert" />
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
        padding: 10px 20px 10px 20px;
        border-radius: 10px;
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
