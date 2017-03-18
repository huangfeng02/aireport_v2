<template>

    <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div class="modal-dialog modal-cm" role="document">
            <div class="modal-content" id="addForm">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title" id="myModalLabel">新增录入</h4>
                </div>

                <div class="modal-body">
                    <validator name="validation1">
                        <form class="form-horizontal">
                            <div class="form-group">
                                <label class="col-sm-4 control-label">航空公司</label>
                                <div class="col-sm-8">
                                    <input type="text" v-model="priceInfo.airCompany" class="form-control" placeholder="航空公司">
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="col-sm-4 control-label">出发港</label>
                                <div class="col-sm-8">
                                    <input type="text" v-model="priceInfo.departure" class="form-control" placeholder="出发港">
                                </div>
                            </div>

                            <div class="form-group">
                                <label class="col-sm-4 control-label">目的港</label>
                                <div class="col-sm-8">
                                    <input type="text" v-model="priceInfo.destination" class="form-control" placeholder="目的港">
                                </div>
                            </div>

                            <div class="form-group">
                                <label class="col-sm-4 control-label">转运港</label>
                                <div class="col-sm-8">
                                    <input type="text" v-model="priceInfo.transitPort" class="form-control" placeholder="转运港">
                                </div>
                            </div>

                            <div class="form-group">
                                <label class="col-sm-4 control-label">最低价格</label>
                                <div class="col-sm-8">
                                    <input type="text" v-model="priceInfo.minPrice" class="form-control" placeholder="最低价格">
                                </div>
                            </div>

                            <div class="form-group">
                                <label class="col-sm-4 control-label">小于45kg的价格</label>
                                <div class="col-sm-8">
                                    <input type="text" v-model="priceInfo.priceN" class="form-control" placeholder="小于45kg的价格">
                                </div>
                            </div>

                            <div class="form-group">
                                <label class="col-sm-4 control-label">+45kg价格</label>
                                <div class="col-sm-8">
                                    <input type="text" v-model="priceInfo.price45" class="form-control" placeholder="+45kg价格">
                                </div>
                            </div>

                            <div class="form-group">
                                <label class="col-sm-4 control-label">+100kg价格</label>
                                <div class="col-sm-8">
                                    <input type="text" v-model="priceInfo.price100" class="form-control" placeholder="+100kg价格">
                                </div>
                            </div>

                            <div class="form-group">
                                <label class="col-sm-4 control-label">+300kg价格</label>
                                <div class="col-sm-8">
                                    <input type="text" v-model="priceInfo.price300" class="form-control" placeholder="+300kg价格">
                                </div>
                            </div>

                            <div class="form-group">
                                <label class="col-sm-4 control-label">+500kg价格</label>
                                <div class="col-sm-8">
                                    <input type="text" v-model="priceInfo.price500" class="form-control" placeholder="+500kg价格">
                                </div>
                            </div>

                            <div class="form-group">
                                <label class="col-sm-4 control-label">+1000kg价格</label>
                                <div class="col-sm-8">
                                    <input type="text" v-model="priceInfo.price1000" class="form-control" placeholder="+1000kg价格">
                                </div>
                            </div>

                            <div class="form-group">
                                <label class="col-sm-4 control-label">+3000kg价格</label>
                                <div class="col-sm-8">
                                    <input type="text" v-model="priceInfo.price3000" class="form-control" placeholder="+3000kg价格">
                                </div>
                            </div>

                            <div class="form-group">
                                <label class="col-sm-4 control-label">+5000kg价格</label>
                                <div class="col-sm-8">
                                    <input type="text" v-model="priceInfo.price5000" class="form-control" placeholder="+5000kg价格">
                                </div>
                            </div>

                            <div class="form-group">
                                <label class="col-sm-4 control-label">运价含燃油战险</label>
                                <div class="col-sm-8">
                                    <label class="radio-inline">
                                        <input type="radio" value="0" v-model="priceInfo.state"> 是
                                    </label>
                                    <label class="radio-inline">
                                        <input type="radio" value="1" v-model="priceInfo.state"> 否
                                    </label>
                                </div>
                            </div>


                            <div class="form-group">
                                <label class="col-sm-4 control-label">生效日期</label>
                                <div class="col-sm-8">
                                    <calendar :value="value" :format="format" :clear-button="clear" :placeholder="生效日期" ></calendar>
                                </div>
                            </div>

                        </form>
                    </validator>
                </div>

                <div class="modal-footer">
                    <button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
                    <button type="button" @click="submit" id="btm-submit" class="btn btn-primary">提交</button>
                    <button style="display: none;" type="button" id="btm-update" @click="update" class="btn btn-primary">修改</button>
                </div>
            </div>
        </div>
    </div>



</template>

<script>

    import calendar from "../../components/calendar.vue"

    export default {
        data:function(){
            return{
                value: '',
                format: 'yyyy-MM-dd',
                clear: true,
                placeholder: ''
            }
        },
        components:{
            calendar
        },
        watch:{
            'value': function (value) {
                this.value=value
            }
        },
        props:['priceInfo'],
        methods:{
            update:function(){
                this.priceInfo.effectiveDate=this.value;
                this.$emit('update', this.priceInfo)
            },
            submit:function(){
                this.priceInfo.effectiveDate=this.value;
                this.$emit('submit', this.priceInfo)
            }
        },
        mounted:function(){
            this.value=this.priceInfo.effectiveDate;
            var _this=this;
            $('#myModal').on('hidden.bs.modal', function (e) {
                //重置属性值为空
                for (var sProp in _this.priceInfo) {
                    _this.priceInfo[sProp]='';
                }
                _this.value='';
                $("#btm-submit").show()
                $("#btm-update").hide()
            })

        }


    }
</script>