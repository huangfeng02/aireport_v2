<template>
    <div class="row">
        <div class="col-sm-5">
            <div aria-live="polite" role="status" class="dataTables_info">
                每页{{ display }}
                共{{total}}条
            </div>
        </div>
        <div class="col-sm-7">
            <div class="dataTables_paginate example2_paginate">
                <ul class="pagination">
                    <li :class="{'disabled': current == 1}"><a href="javascript:;" @click="setCurrent(1)"> 首页 </a></li>
                    <li :class="{'disabled': current == 1}"><a href="javascript:;" @click="setCurrent(current - 1)"> 上一页 </a></li>
                    <li v-for="p in grouplist" :class="{'active': current == p.val}"><a href="javascript:;" @click="setCurrent(p.val)"> {{ p.text }} </a></li>
                    <li :class="{'disabled': current == page}"><a href="javascript:;" @click="setCurrent(current + 1)"> 下一页</a></li>
                    <li :class="{'disabled': current == page}"><a href="javascript:;" @click="setCurrent(page)"> 尾页 </a></li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    var paginate={
        data () {
            return {current : 1 }
        },
        props: {
            total: {			// 数据总条数
                type: Number,
                default: 10
            },
            display: {			// 每页显示条数
                type: Number,
                default: 2
            },
            pagegroup: {		// 分页条数 -- 奇数
                type: Number,
                default: 5
            }
        },
        watch: {
            'current': function (current) {
                this.$emit('pagechange',this.current);
            }
        },
        computed: {
            normalizedPagegroup: function (v) {
                v = v > 0 ? v : 5;
                return v % 2 === 1 ? v : v + 1;
            },
            page:function() { // 总页数
                return Math.ceil(this.total / this.display);
            },
            grouplist:function(){ // 获取分页页码
                var len = this.page , temp = [], list = [], count = Math.floor(this.pagegroup / 2) ,center = this.current;
                if( len <= this.pagegroup ){
                    while(len--){ temp.push({text:this.page-len,val:this.page-len});};
                    return temp;
                }
                while(len--){ temp.push(this.page - len);};
                var idx = temp.indexOf(center);
                (idx < count) && ( center = center + count - idx);
                (this.current > this.page - count) && ( center = this.page - count);
                temp = temp.splice(center - count -1, this.pagegroup);
                do {
                    var t = temp.shift();
                    list.push({
                        text: t,
                        val: t
                    });
                }while(temp.length);
                if( this.page > this.pagegroup ){
                    (this.current > count + 1) && list.unshift({ text:'...',val: list[0].val - 1 });
                    (this.current < this.page - count) && list.push({ text:'...',val: list[list.length - 1].val + 1 });
                }
                return list;
            }
        },
        methods: {
            setCurrent: function(idx) {
                if( this.current != idx && idx > 0 && idx < this.page + 1) {
                    this.current = idx;
                }
            }
        }
    }
    module.exports=paginate;


</script>