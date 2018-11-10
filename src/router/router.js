import othersArticlesInfo from '../views/articles/others/data-others';
import frontendArticlesInfo from '../views/articles/frontend/data-javascript';

let articlesPage = [];

othersArticlesInfo.forEach((cur) => {
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

frontendArticlesInfo.forEach((cur) => {
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

export const pageIndex = {
    path: '/',
    name: 'index',
    meta: {
        title: {
            // 默认的 title
            content: '首页',
            // 是否支持国际化
            i18n: true,
            // 国际化 key 值
            key: 'index_title'
        }
    },
    component: () => import('../views/main/Main.vue')
}

export const pageArticles = {
    path: '/articles',
    name: 'articles',
    meta: {
        title: {
            // 默认的 title
            content: '首页',
            // 是否支持国际化
            i18n: true,
            // 国际化 key 值
            key: 'index_title'
        }
    },
    children: articlesPage,
    component: () => import('../views/articles/Articles.vue')
}

export const routers = [
    pageIndex,
    pageArticles
];
