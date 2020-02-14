<template>
    <div id="app">
        <input id="inp" type="text" :style="{width:width + 'px'}" :placeholder="aces" v-model="expression" @change="expresChange(code)">
    </div>
</template>
<script>
    import { mapActions } from 'vuex'
    export default {
        props: ['heig', 'low', 'width', 'code', 'nameVal', 'codeId'],
        data() {
            return {
                aces: '',
                expression: ''
            }
        },
        created: function () {
            if (this.low == '') {
                this.expression = ''
            } else {
                this.expression = this.low + '/' + this.heig
            }
        },
        mounted: function () {
        },
        watch: {
            expression: function (val, oldVal) {
                if (val.indexOf('/') != -1) {
                    var sss = val.split('/')
                    if (sss.length == 2) {
                        if (sss[0].length > 0 && sss[1].length > 0) {
                            var obj = {
                                code: this.code,
                                id: this.codeId,
                                start: sss[0],
                                end: sss[1]
                            }
                            this.$emit('modelc', obj)
                        }
                    } else {
                        this.$emit('nomodelc', this.nameVal)
                    }
                } else {
                    this.$emit('nomodelc', this.nameVal)
                }

            }
        },
        methods: {
            expresChange(val) {
                // console.log(val)
                this.$emit('modelchaad', val)
            },
             ...mapActions([''])
        },

    }

</script>
<style scoped>
    input {
        width: 80px;
        height: 32px;
        border: 1px solid #eaeaea;
        border-radius: 3px;
        padding-left: 5px;
    }
</style>