module.exports = {
  parser: 'sugarss',
  map: false,
  plugins: {
    'postcss-plugin':{
      
    },
    'postcss-pxtorem':{
      rootValue: 37.5,
      propList: ['*']
    }
  }
}