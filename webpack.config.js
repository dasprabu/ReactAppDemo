var path = require('path');
var HtmlWebpackPlugin =  require('html-webpack-plugin');

module.exports = {
    
    entry : './app/index.js',
    output : {
        path : path.resolve(__dirname , 'dist'),
        filename: 'index_bundle.js'
    },
    module : {
        rules : [
            {test : /\.(js)$/, use:'babel-loader'},
            {test : /\.css$/, use:['style-loader', 'css-loader']},
            {
            test: /\.(png|jp(e*)g|svg)$/,  
            use: [{
                loader: 'file-loader',
                options: { 
                    limit: 8000, // Convert images < 8kb to base64 strings
                    name: 'images/[hash]-[name].[ext]'
                } 
            }]}]
        
    },
    mode:'production',
    plugins : [ 
        new HtmlWebpackPlugin ({
            template : 'app/index.html'
        })
    ]

}
