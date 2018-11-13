<template>
    <BoWen>
        <div class="p-1" slot="catalog">
            <Steps direction="vertical">
                <Step
                    title="?"
                    content="?"
                    status="wait"
                    @click.native="toTop('#1', 30)">
                </Step>
                <Step
                    title=""
                    content=""
                    @click.native="toTop('#2', 30)">
                </Step>
            </Steps>
        </div>
        <div class="px-1">
            <div class="py-3 text-center">
                <h1><Icon type="ios-book-outline" /> ?</h1>
                <p class="pt-1">?</p>
            </div>
            <h3 id="1" class="ml-1"><Icon type="logo-buffer" /> ?</h3>
            <Divider />
            <p>something</p>
            <h3 id="1" class="ml-1"><Icon type="logo-buffer" /> ?</h3>
            <Divider />
            <p>something</p>
            <FooterDivider></FooterDivider>
        </div>
    </BoWen>
</template>

<script>
export default {
    data() {
        return {
            toTop: this.$util.toTop
        }
    }
}
</script>
