const { defineConfig } = require('@vue/cli-service')
module.exports ={
    devServer: {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': 'true',
      'Access-Control-Allow-Methods': 'GET,HEAD,OPTIONS,POST,PUT',
      'Access-Control-Allow-Headers':
        'Origin, X-Requested-With, Content-Type, Accept, Authorization',
    },
    proxy: 'http://18.224.73.103/:8080',
  },
}
// module.exports = defineConfig({
//   transpileDependencies: [
//     'vuetify'
//   ],
//   devServer: {
//     headers: {
//       'Access-Control-Allow-Origin': '*',
//       'Access-Control-Allow-Credentials': 'true',
//       'Access-Control-Allow-Methods': 'GET,HEAD,OPTIONS,POST,PUT',
//       'Access-Control-Allow-Headers':
//         'Origin, X-Requested-With, Content-Type, Accept, Authorization',
//     },
//     proxy: 'http://18.224.73.103/',
//   },
// })
