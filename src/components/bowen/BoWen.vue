<template lang="pug">
    .row
        .col-md-8
            slot(name="content") 内容
        .col-md-4
            h4.mt-5.text-center 目录
            slot(name="catalog") 暂无
</template>
