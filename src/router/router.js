import articlesInfo from '../data/articles';
import gitCommandInfo from '../data/git-command';
import dosCommandInfo from '../data/dos-command';
import vimCommandInfo from '../data/vim-command';
import linuxCommandInfo from '../data/linux-command';

export const indexPage = {
  path: '/',
  name: 'index',
  component: () => import('@/views/index.vue'),
};

export const fieldPage = {
  path: '/articles/field',
  name: 'field',
  meta: {
    title: '博文分类',
  },
  component: () => import('@/views/articles/field.vue'),
};

// 用于测试
export const testRouter = {
  path: '/components/fullpage',
  name: 'compo',
  meta: {
    title: '通用组件测试'
  },
  component: () => import('@/components/fullpage/fullpage.vue')
}

// 文章
let articlesPage = [];
articlesInfo.forEach((cur) => {
  let pathObj = {
    path: cur.path,
    name: cur.pathName,
    meta: {
      title: cur.name
    },
    component: cur.component,
  };
  articlesPage.push(pathObj);
});

// git 命令
let gitCommandPage = [];
gitCommandInfo.forEach((cur) => {
  let pathObj = {
    path: cur.path,
    name: cur.pathName,
    meta: {
      title: cur.title
    },
    components: {
      search: cur.component
    }
  };
  gitCommandPage.push(pathObj);
});

// linux 命令
let linuxCommandPage = [];
linuxCommandInfo.forEach((cur) => {
  let pathObj = {
    path: cur.path,
    name: cur.pathName,
    meta: {
      title: cur.title
    },
    component: cur.component
  };
  linuxCommandPage.push(pathObj);
});

// dos 命令
let dosCommandPage = [];
dosCommandInfo.forEach((cur) => {
  let pathObj = {
    path: cur.path,
    name: cur.pathName,
    meta: {
      title: cur.title
    },
    component: cur.component
  };
  dosCommandPage.push(pathObj);
});

// vim 命令
let vimCommandPage = [];
vimCommandInfo.forEach((cur) => {
  let pathObj = {
    path: cur.path,
    name: cur.pathName,
    meta: {
      title: cur.title
    },
    component: cur.component
  };
  vimCommandPage.push(pathObj);
});

export const routers = [
  indexPage,
  fieldPage,
  testRouter,
  ...articlesPage,
  ...gitCommandPage,
  ...dosCommandPage,
  ...vimCommandPage,
  ...linuxCommandPage
];
