const path=require('path');
const compressionplugin=require('compression-webpack-plugin')
module.exports = {
  lintOnSave: false,
  baseUrl: './',
  outputDir: undefined,
  assetsDir: undefined,
  runtimeCompiler: undefined, 
  productionSourceMap: undefined,
  parallel: undefined,
  css: undefined,
  devServer:{
    open:true
  },
  configureWebpack:config=>{
    if(process.env.NODE_ENV==='production'){
      return{
        plugins:[
          new compressionplugin({
            test:/\.js$|\.html$|\.css$/,
            threshold:10240,
            deleteOriginalAssets:false
          })
        ]
      }
    }
  }
}
