<template lang="pug">
    BoWen
        .p-1(slot="catalog")
            Steps(direction="vertical")
                Step(title="基本介绍" 
                    content="基本介绍"
                    status="wait"
                    @click.native="toTop('#angular-ui-modal-1', 30)")
                Step(title="主要方法" 
                    content="主要方法"
                    status="wait"
                    @click.native="toTop('#angular-ui-modal-2', 30)")
                Step(title="数据传递" 
                    content="数据传递"
                    status="wait"
                    @click.native="toTop('#angular-ui-modal-3', 30)")
                Step(title="实例" 
                    content="实例"
                    status="wait"
                    @click.native="toTop('#angular-ui-modal-4', 30)")
        .px-1
            .py-3.text-center
                h1
                    Icon(type="ios-book-outline")
                    | &nbsp;AngularJS 模态框
                p.pt-1 $modal 是一种快速创建 AngularJS 模态框的服务
            h3#angular-ui-modal-1.ml-1
                Icon(type="logo-buffer")
                | &nbsp;基本介绍
            Divider
            p $modal 是一种快速创建 AngularJS 模态框的服务。创建自定义模式很简单：创建局部视图、以及它的控制器并在使用服务时引用它们。
            h3#angular-ui-modal-2.ml-1
                Icon(type="logo-buffer")
                | &nbsp;主要方法
            Divider
            p $modal 服务只有一种方法：open(options)。options 是一个对象，其中可用选项包括：
            Table(:columns="columns", :data="data")
            p.mt-1 open() 方法返回模态框实例的一个实例对象，这个对象包含了下面这些属性：
            Table(:columns="columns2", :data="data2")
            p.mt-1 此外模态框还扩展了下面两个方法，分别同上面的 close(result)、dismiss(reason) 效果一样，$close(result)、$dismiss(reason) 不需要专门的控制器就可以用来控制模态框。
            h3#angular-ui-modal-3.ml-1.mt-1
                Icon(type="logo-buffer")
                | &nbsp;数据传递
            Divider
            p 简单的数据传递：
            pre.ml-2(v-highlight)
                code.js angular.module('app', ['ui.bootstrap'])
                    |
                    |    .controller('AppCtrl', ['$scope', '$modal', function($scope, $modal) {
                    |        var modalInstance = $modal.open({
                    |            temlplateUrl: '/demo.html',
                    |            controller: ['$scope', '$modalInstance', ModalCtrl]
                    |        });
                    |        modalInstance.data = 'something'; // 向模态框传递数据
                    |        result.then(function (data) {
                    |            console.log('我是由 close() 触发的' + data); // 获取模态框传回来的数据
                    |        }, function (data) {
                    |            console.log('我是由 dismiss() 触发的' + data); // 获取模态框传回来的数据
                    |        });
                    |        
                    |        function ModalCtrl($scope, $modalInstance) {
                    |            $scope.data = $modalInstance.data; // 在模态框获取数据
                    |            $modalInstance.close('close'); // 在模态框传递数据
                    |            $modalInstance.dismiss('cancel'); // 在模态框传递数据
                    |        }
                    |    }]);
            p 通过 resolve 传递：
            pre.ml-2(v-highlight)
                code.js angular.module('app', ['ui.bootstrap'])
                    |
                    |    .controller('AppCtrl', ['$scope', '$modal', function($scope, $modal) {
                    |        $scope.todos = ['study html', 'study css', 'study javascript'];
                    |        var modalInstance = $modal.open({
                    |            temlplateUrl: '/demo.html',
                    |            controller: ['$scope', ModalCtrl],
                    |            // 向模态框传递的数据
                    |            resolve: {
                    |                resolveData: function() {
                    |                    return $scope.todos;
                    |                }
                    |            }
                    |        });
                    |        function ModalCtrl($scope, resolveData) {
                    |            $scope.data = resolveData; // 在模态框获取数据
                    |        }
                    |    }]);
            p 通过 $scope 传递：
            pre.ml-2(v-highlight)
                code.js angular.module('app', ['ui.bootstrap'])
                    |
                    |    .controller('AppCtrl', ['$rootScope' ,'$scope', '$modal', function($scope, $modal) {
                    |        // 要初始化一个控制器实例，需要使用$new()方法从$rootScope创建某作用域的一个新实例
                    |        // 这个实例会建立 Angular 在运行时使用的作用域继承
                    |        // 有了这个作用域，就可以初始化一个新的控制器，把这个作用域作为控制器的 $scope 传递过去
                    |        var scope = $rootScope.$new();
                    |        scope.todos = ['study html', 'study css', 'study javascript'];
                    |        var modalInstance = $modal.open({
                    |            temlplateUrl: '/demo.html',
                    |            controller: ['$scope', ModalCtrl],
                    |            // 向模态框传递的数据
                    |            scope: scope
                    |        });
                    |        function ModalCtrl($scope) {
                    |            console.log($scope.todos); // 在模态框获取数据
                    |        }
                    |    }]);
            h3#angular-ui-modal-4.ml-1
                Icon(type="logo-buffer")
                | &nbsp;实例
            Divider
            p 参考 demo 点击 
                a(href="http://next.plnkr.co/edit/?p=preview&preview") http://next.plnkr.co/edit/?p=preview&preview
                |  查看。
            p.text-right 参考资料：
                a(href="http://angular-ui.github.io/bootstrap/versioned-docs/0.12.0/") http://angular-ui.github.io/bootstrap/versioned-docs/0.12.0/
            <FooterDivider></FooterDivider>
</template>

<script>
export default {
    data() {
        return {
            toTop: this.$util.toTop,
            columns: [
                {
                    title: '属性名',
                    key: 'key'
                },
                {
                    title: '类型',
                    key: 'type'
                },
                {
                    title: '描述',
                    key: 'des'
                },
                {
                    title: '例子',
                    key: 'example'
                }
            ],
            data: [
                {
                    key: 'templateUrl',
                    type: 'string',
                    des: '表示模态框内容的模板的路径，也可以是 script 标签中定义的 id',
                    example: 'templateUrl: "/demo.html"'
                },
                {
                    key: 'template',
                    type: 'string',
                    des: '表示模态内容的内联模板',
                    example: 'template: "<div>demo</div>"'
                },
                {
                    key: 'controller',
                    type: 'string|function|array',
                    des: '模态框实例的控制器，可通过注入的 $modalInstance 访问模态框的内容',
                    example: '["scope", "$modalInstance", function DemoCtrl() {}]'
                },
                {
                    key: 'resolve',
                    type: 'object',
                    des: '用于解析传递依赖，就像是路由中的同名配置',
                    example: 'resolve:{ data: function() { return data; } }'
                },
                {
                    key: 'size',
                    type: 'string',
                    des: '设置模态框的大小，会生成对应的 class 属性： modal-<sm|md|lg>',
                    example: 'class: "md"'
                },
                {
                    key: 'keyboard',
                    type: 'boolean',
                    des: '能否通过 Esc 键退出模态框，默认值为 true',
                    example: 'keyboard: false'
                },
                {
                    key: 'controllerAs',
                    type: 'string',
                    des: '作为语法的控制器的替代，与指令定义的API相匹配。还需要提供控制器选项',
                    example: 'controllerAs: "DemoCtrl as Demo"'
                },
                {
                    key: 'backdrop',
                    type: 'boolean|string',
                    des: 'boolean 表示弹出模态框时，背景是否置灰，string 类型的值只能是 static 即点击背景不能关闭模态框',
                    example: 'backdrop: false'
                },
                {
                    key: 'backdropClass',
                    type: 'string',
                    des: '为模态框的 backdrop 添加额外的 class',
                    example: 'backdropClass: "bg-success"'
                },
                {
                    key: 'windowClass',
                    type: 'string',
                    des: '添加额外的 class 到模态框窗口的模板',
                    example: 'windowClass: "bg-info"'
                },
                {
                    key: 'windowTemplateUrl',
                    type: 'uib/template/modal/window.html',
                    des: '替换模态框窗口的模板',
                    example: '暂无'
                }
            ],
            columns2: [
                {
                    title: '属性名',
                    key: 'key'
                },
                {
                    title: '类型',
                    key: 'type'
                },
                {
                    title: '描述',
                    key: 'des'
                }
            ],
            data2: [
                {
                    key: 'close(result)',
                    type: 'function',
                    des: '关闭模态框、传递结果的方法'
                },
                {
                    key: 'dismiss(reason)',
                    type: 'function',
                    des: '隐藏模态框、传递原因的方法'
                },
                {
                    key: 'result',
                    type: 'promise',
                    des: '当模态被关闭时，当模态被关闭并被拒绝时'
                },
                {
                    key: 'opened',
                    type: 'promise',
                    des: '当模态框打开下载好模板并解析完时'
                }
            ]
        }
    }
}
</script>
