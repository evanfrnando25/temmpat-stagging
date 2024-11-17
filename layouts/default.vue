<template>
    <div class="main">
        <div class="wrapper">
            <div class="header">
                <LayoutHeader />
            </div>
            <div class="content">
                <slot />
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .main {
        background: $primary;
    }
    .content {
        padding: 5% 3%;

        @media (max-width: 768px) {
            padding: 5% 5%;
        }
    }
</style>
