<template>
    <div class="news-content__description">
        <div class="news-content__description__wrapper">
            <div class="news-content__description__title">
                <h2>Gen Z diminta ngalah dulu...</h2>
            </div>
            <div class="news-content__description__text">
                Konser @sheilaon7 bertajuk “Tunggu Aku Di” akhirnya kembali digelar, setelah tahun
                lalu diadakan di Jakarta dengan kesuksesannya karena telah mengundang banyak
                penonton.  Tahun ini, bersama @antara.suara dan @goldlive.indonesia, konser Sheila
                On 7 bertajuk “Tunggu Aku Di” yang telah ditunggu-tunggu banyak orang kembali
                digelar langsung di 5 kota.  Samarinda, Makassar, Pekanbaru, Medan, dan Bandung
                menjadi titik konser Sheila On 7.  Tentu saja, konser ini disambut antusias yang
                tinggi, khususnya bagi Sheila Gank dan juga Gen Y atau Millennials hingga Gen X yang
                merupakan momen yang tepat untuk bernostalgia menikmati karya-karya Sheila On 7
                kembali.  Terdapat momen lucu, dimana Gen Z diminta untuk mengalah saat war tiket
                konser Sheila On 7 nanti, hal tersebut terpantau dari komentar-komentar di postingan
                Instagram @antara.suara  Terlepas itu hanya candaan. Bagaimana nih, kalian yang Gen
                Z bakal tetap war tiketnya ga nih? Komen di bawah yuk!  

                <h5>#STAYDITEMMPAT #SheilaOn7 #TungguAkuDi</h5>
            </div>
            <div class="news-content__description__share">
                <Icon name="mdi:share" />
                <Icon name="mdi:instagram" />
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .news-content {
        &__description {
            &__wrapper {
                display: flex;
                flex-direction: column;
                gap: 40px;
                margin: 40px 0px;
            }

            &__share {
                font-size: 30px;
                display: flex;
                gap: 30px;
            }

            &__title {
                h2 {
                    font-weight: 700;
                    font-size: 50px;

                    @media (max-width: 768px) {
                        font-size: 25px;
                    }
                }
            }

            &__text {
                font-size: 14px;
                line-height: 40px;
                font-weight: 200;
                text-align: justify;
                position: relative;

                h5 {
                    margin: 30px 0px;
                    font-size: 30px;
                    color: $secondary;
                    text-align: justify;
                    /* Membuat teks dalam h5 dapat terbungkus dan turun ke bawah jika perlu */
                    word-wrap: break-word; /* Memastikan kata panjang dibungkus */
                    white-space: normal;
                }
            }
        }
    }
</style>
