<style lang="less">
@import './field.less';
</style>

<template>
    <div class="field-container">
        <Row class="field-header">
            <Col span="6">分类</Col>
            <Col span="18">内容</Col>
        </Row>
        <Row class="field-content">
            <Col span="6" class="h-100">
                <div class="outer-container">
                    <div class="inner-container">
                        <Menu 
                            :accordion="true" 
                            :open-names="['frontend']" 
                            active-name="FE-1"
                            @on-select="setFieldActiveName">
                            <Submenu name="frontend">
                                <template slot="title">
                                    <Icon type="logo-html5" />
                                    前端
                                </template>
                                <MenuItem name="FE-1">HTML</MenuItem>
                                <MenuItem name="FE-2">CSS</MenuItem>
                                <MenuItem name="FE-3">JavaScript</MenuItem>
                                <MenuItem name="FE-4">VueJS</MenuItem>
                                <MenuItem name="FE-5">AngularJS</MenuItem>
                                <MenuItem name="FE-6">杂烩</MenuItem>
                            </Submenu>
                            <Submenu name="BE">
                                <template slot="title">
                                    <Icon type="ios-cloud-outline" />
                                    后端
                                </template>
                                <MenuItem name="BE-1">杂烩</MenuItem>
                            </Submenu>
                            <Submenu name="OTH">
                                <template slot="title">
                                    <Icon type="ios-book-outline" />
                                    其它
                                </template>
                                <MenuItem name="OTH-1">笔记</MenuItem>
                                <MenuItem name="OTH-2">杂烩</MenuItem>
                                <MenuItem name="OTH-4">Git</MenuItem>
                                <MenuItem name="OTH-3">样本演示</MenuItem>
                            </Submenu>
                        </Menu>
                    </div>
                </div>
            </Col>
            <Col span="18" class="h-100">
                <Table 
                    :columns="columns" 
                    :data="filteredArticles"
                    :show-header="false"
                    :height="height">
                </Table>
            </Col>
        </Row>
    </div>
</template>
<script>
    import util from '../../libs/util.js';
    export default {
        data () {
            return {
                height: 500, // 表格高
                activeName: 'FE-1',
                toPage: util.toPage,
                columns: [
                    {
                        title: '题目',
                        key: 'name',
                        width: 300,
                        ellipsis: true,
                        render: (h, params) => {
                            return h ('i-button', {
                                props: {
                                    type: 'text'
                                },
                                style: {
                                    color: '#fff',
                                    background: 'rgb(109,109,109)'
                                },
                                nativeOn: {
                                    click: () => {
                                        this.toPage(params.row.pathName)
                                    }
                                }
                            },params.row.name)
                        }
                    },
                    {
                        title: '摘要',
                        key: 'abstract',
                        ellipsis: true,
                        render: (h, params) => {
                            return h ('Tooltip', {
                                props: {
                                    placement: 'top'
                                }
                            },[
                                params.row.abstract,
                                h ('span', {
                                    slot: 'content',
                                    style: {
                                        whiteSpace: 'normal',
                                        wordBreak: 'break-all'
                                    }
                                },params.row.abstract)
                            ])
                        }
                    },
                    {
                        title: '发表时间',
                        key: 'postTime',
                        width: 180,
                        align: 'right'
                    }
                ],
            }
        },
        methods: {
            setFieldActiveName (name) {
                this.activeName = name;
            }
        },
        computed: {
            articles () {
                return this.$store.state.articles.articlesList;
            },
            // 根据本组件导航元素的 this.activeName 值进行筛选
            filteredArticles () {
                let list = [...this.articles];
                if (this.activeName === 'FE-1') {
                    list = list.filter(item => item.category === 'HTML');
                } else if (this.activeName === 'FE-2') {
                    list = list.filter(item => item.category === 'CSS');
                } else if (this.activeName === 'FE-3') {
                    list = list.filter(item => item.category === 'JS');
                } else if (this.activeName === 'FE-4') {
                    list = list.filter(item => item.category === 'VueJS');
                } else if (this.activeName === 'FE-5') {
                    list = list.filter(item => item.category === 'AngularJS');
                } else if (this.activeName === 'FE-6') {
                    list = list.filter(item => item.category === 'mixed');
                } else if (this.activeName === 'BE-1') {
                    list = list.filter(item => item.field === 'beMixed');
                } else if (this.activeName === 'OTH-1') {
                    list = list.filter(item => item.category === 'notes');
                } else if (this.activeName === 'OTH-2') {
                    list = list.filter(item => item.category === 'othMixed');
                } else if (this.activeName === 'OTH-4') {
                    list = list.filter(item => item.category === 'Git');
                } else {
                    // this.activeName === 'OTH-3'
                    list = list.filter(item => item.category === 'demo');
                }
                if (list.length === 0) {
                    this.height = 50;
                }
                return list;
            }
        },
        mounted () {
            this.$store.commit('setActiveName','articles'); // 设置 app 组件的 activeName，防止刷新后导航栏失去高亮
        }
    }
</script>
