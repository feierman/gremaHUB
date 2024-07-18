// 路径 @/api/DataMenu.ts

export const menuList = [
  { text: 'Home', path: '/' },
  { text: 'About', path: '/' },
  {
    text: 'Services',
    path: '/',
    subMenu: [
      { text: 'Web Development', path: '/' },
      { text: 'Mobile Development', path: '/' },
      { text: 'Graphic Design', path: '/' }
    ]
  },
  {
    text: 'Login',
    path: '/',
    subMenu: [
      { text: 'Web Development', path: '/' },
      { text: 'Mobile Development', path: '/' },
      { text: 'Graphic Design', path: '/' }
    ]
  }
]

