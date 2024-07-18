// 路径 @/api/DataMenu.ts

export interface MenuItem {
  text: string
  path: string
  subMenu?: MenuItem[]
  showsubMenu?: boolean
}

export const menuList: MenuItem[] = [
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

export interface imgdataList {
    id: number,
    img: string,
    path: string,
    title: string,
    title1: string,
    desc: string,
    desc1: string,
    class: string
}
export const imgdataList :imgdataList[]=[
  {
    id: 1,
    img: "../assets/banner.png",
    path: '/',
    title: 'Create wonderful Landing page',
    title1: 'with Our New Template',
    desc: 'This should be used to tell a story and let your users know a little more',
    desc1: 'about your product or service. How can you benefit them？',
    class: 'side1'
  },
  {
    id: 2,
    img: "../assets/banner2.png",
    path: '/',
    title: 'Great Way To show',
    title1: 'Your Services',
    desc: 'This should be used to tell a story and let your users know a little more',
    desc1: 'about your product or service. How can you benefit them？',
    class: 'side2'
  }
]