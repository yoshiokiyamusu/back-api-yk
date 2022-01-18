
//import './database.js' //database se contecta desde controllers

import app from './app'
app.listen(app.get('port'))
console.log('Server on port', app.get('port'))