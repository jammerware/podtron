const {Menu, app} = require('electron');
const template = [
  {
    label: 'File',
    submenu: [
      {
        accelerator: 'Alt+F4',
        label: 'Quit',
        role: 'app-quit'
      }
    ]
  },
  {
    label: 'Help',
    submenu: [
      {
        label: 'Report a problem',
        role: 'bug-report'
      },
      {
        type: 'separator'
      },
      {
        label: `About ${app.getName()}...`,
        role: 'about'
      }
    ]
  }
]

const menu = Menu.buildFromTemplate(template);
app.setApplicationMenu(menu);