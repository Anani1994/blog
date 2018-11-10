<template lang="pug">
    .container-fluid.d-none.d-md-block
        img.d-block.mt-5.img-fluid.mx-auto.rounded(src="../../../static/images/people-author.png")
        //
            ul.mt-3.nav.justify-content-center
                li.nav-item
                    a.nav-link.text-dark.pr-0(href="https://github.com/Anani1994")
                        font-awesome-icon(:icon="['fab', 'github']")
                li.nav-item
                    a.nav-link.text-dark.pr-0(href="https://weibo.com/dongwanhong?is_all=1")
                        font-awesome-icon(:icon="['fab', 'weibo']")
                li.nav-item
                    a.nav-link.text-dark.pr-0(href="http://mail.qq.com/cgi-bin/qm_share?t=qm_mailme&email=zqqhoKm5pq2moI6oobajr6ei4K2how")
                        font-awesome-icon(:icon="['far', 'envelope']")
</template>

<script>
export default {
    name: 'PersonalInfo'
}
</script>
