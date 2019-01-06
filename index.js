const {app, BrowserWindow} = require('electron');

const createWindow = () => {
    window = new BrowserWindow({
        width: 1400, 
        height: 1000
    });
    window.webContents.openDevTools();
    window.loadFile('index.html');
}

app.on('ready', createWindow);