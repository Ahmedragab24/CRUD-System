// Modules to control application life and create native browser window
const {app, BrowserWindow,Menu} = require('electron')
const windowStateKeeper = require('electron-window-state')
const path = require('path')

let mainWindow ;

// menu clickRight
let contextMenu = Menu.buildFromTemplate([
  {role: 'reload'},
  {role: 'togglefullscreen'},
  {role: 'editMenu'},
  {role: 'close'},
])



const menuItems = [
  // {role: File}
  {
    
    label: "File" ,

    submenu: [

    { role: 'close' 
    },  

    {
      type: "separator"
    },

    { role: 'quit' 
    },

    ],
  },


    // { role: 'viewMenu' }
    {
      label: 'View',
      submenu: [
        { role: 'reload' },
        { role: 'forceReload' },
        { role: 'toggleDevTools' },
        { type: 'separator' },
        { role: 'resetZoom' },
        { role: 'zoomIn' },
        { role: 'zoomOut' },
        { type: 'separator' },
        { role: 'togglefullscreen' }
      ]
    },

    // { role: Edit }
    {
      label: 'Edit',
      submenu: [
        { role: 'undo' },
        { role: 'redo' },
        { type: 'separator' },
        { role: 'cut' },
        { role: 'copy' },
        { role: 'paste' },
        { role: 'pasteAndMatchStyle' },
        { role: 'delete' },
        { role: 'selectAll' },
        { type: 'separator' },
        ]
    }, 


     // { role: Window }
    {
      label: 'Window',
      submenu: [
        { role: 'minimize' },
        { role: 'zoom' },
        { role: 'close' },
        { type: 'separator' },

      ]
    },

    // { role: help }
    {
      role: 'help',
      submenu: [
        {
          label: 'About me',
          click: async () => {
            const { shell } = require('electron')
            await shell.openExternal('https://www.facebook.com/profile.php?id=100009463821316')

          }
        }
      ]
    },
];



const menu =Menu.buildFromTemplate( menuItems )
Menu.setApplicationMenu(menu);

function createWindow () {
  let wiState = windowStateKeeper({
    defaultWidth: 1800,
    defaultHeight: 1000,
  })
  // Create the browser window.
   mainWindow = new BrowserWindow({
    minWidth: 600,
    minHeight: 400,
    width: wiState.width,
    height: wiState.height,
    x: wiState.x,
    y: wiState.y,
    icon: './img/icon Valupes.png' ,

    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    },
    show: false ,
  })

  // and load the index.html of the app.
  mainWindow.loadFile('index.html')

  mainWindow.once('ready-to-show', mainWindow.show)

  wiState.manage(mainWindow)

  mainWindow.on('close', () => {
    mainWindow =null
  })
  

  mainWindow.webContents.on('context-menu' , (e) => {
    contextMenu.popup()
  })
  // mainWindow.webContents.openDevTools()
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createWindow()

  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) 
    createWindow()
  })
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
