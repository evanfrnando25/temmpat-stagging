export const formatCapitalize = (title: string) => {
    return title
        .replace(/-/g, ' ') // Ganti tanda hubung dengan spasi
        .replace(/\b\w/g, (char) => char.toUpperCase()) // Kapitalisasi huruf pertama tiap kata}
}
