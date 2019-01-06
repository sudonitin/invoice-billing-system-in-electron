'use strict'

const path = require('path')
const { app, ipcMain, BrowserWindow } = require('electron')
require('electron-reload')(__dirname)

function main() {
	let Mainwin = new BrowserWindow({width:800 , height:600 })
	Mainwin.loadURL(`file://${__dirname}/renderer/index.html`)

	Mainwin.webContents.openDevTools()	
}

app.on('ready', main)

exports.openWindow = (filename) => {
	let Mainwin = new BrowserWindow({width:800 , height:600 })
	Mainwin.loadURL(`file://${__dirname}/renderer/` + filename + `.html`)
}


app.on('window-all-closed', function () {
  app.quit()
})

