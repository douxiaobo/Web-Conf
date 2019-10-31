module.exports = {
    globDirectory: 'dist/',
    globPatterns: ['**/*.{jpg,png,jpeg,ico,html,css,js}'],
    swDest: 'dist/sw.js',
    importWorkboxFrom: 'disabled',
    importScripts: [
        'https://cdn.jsdelivr.net/npm/workbox-sw@4.3.1/build/workbox-sw.min.js'
    ]
};
