const {app, BrowserWindow }  = require('electron')
let win = null
app.on('ready', function (params) {
    win = new BrowserWindow({width: 1200, height: 600, minWidth: 1200, show: false})
    win.loadURL('http://localhost:8080')
    win .on('closed', function () {
        win = null
    })
})
app.on('window-all-closed', function () {
    if (process.platform != 'darwin') {
        app.quit()
    }
})