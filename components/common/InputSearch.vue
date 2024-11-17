<template>
    <div class="wrapper-input">
        <q-input
            input-class="text-white"
            :dense="false"
            v-model="modelValue"
            @focus="handleFocus"
            @blur="handleBlur"
        >
            <template v-slot:prepend>
                <q-icon name="search" :color="color" />
            </template>
        </q-input>
    </div>
</template>

<script lang="ts">
    export default defineNuxtComponent({
        props: {
            value: {
                type: String,
                default: '',
                required: false,
            },
            color: {
                type: String,
                default: 'primary',
                required: false,
            },
            icon: {
                type: String,
                default: '',
                required: false,
            },
        },
        setup(props: any, { emit }: any) {
            const modelValue = ref(props.modelValue)

            const handleFocus = () => {
                emit('focus')
            }

            const handleBlur = () => {
                emit('blur')
            }

            watch(modelValue, (newValue: any) => {
                emit('update:modelValue', newValue)
            })

            return {
                modelValue,
                handleFocus,
                handleBlur,
            }
        },
    })
</script>

<style lang="scss" scoped>
    .wrapper-input {
        border: 1px solid #484443;
        border-radius: 50px;
        padding: 2px 25px;
    }
</style>
