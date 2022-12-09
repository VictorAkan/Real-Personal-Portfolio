module.exports = function (api) {
    api.assertVersion("^7.2");
    api.cache(true)
    return {
        plugins: ['macros'],
    }
}
