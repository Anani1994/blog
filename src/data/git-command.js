export default [
    {
        // 唯一 id
        id: 1,
        // 固定类型
        type: 'git',
        // 拼接网页 titlt
        title: 'git 暂存',
        // 用于查询和显示
        command: 'git add',
        detail: '开始跟踪新文件，或者把已跟踪的文件放到暂存区，还能用于合并时把有冲突的文件标记为已解决状态等。',
        // 暂不明
        arguments: ['file'],
        // 路由
        pathName: 'git-add',
        path: '/articles/others/Git/command/git-add',
        component: () => import('../views/articles/others/Git/command/git-add.vue')
    }
]