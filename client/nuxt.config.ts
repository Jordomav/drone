const config = {
    mode: 'spa',

    loading: {color: '#fff'},

    modules: [
        '@nuxtjs/axios',
    ],

    axios: {
        baseURL: 'http://localhost:3001'
    },

};

export default config;
