module.exports = {
    css: {
        loaderOptions: {
            sass: {
                prependData: `@import "@/common/scss/main.scss";`
            }
        }
    }
}