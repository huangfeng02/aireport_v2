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
                                <label class="col-sm-4 control-label">是否可分泡</label>
                                <div class="col-sm-8">
                                    <label class="radio-inline">
                                        <input type="radio" value='0' v-model="priceRule.type"> 内部加成规则
                                    </label>
                                    <label class="radio-inline">
                                        <input type="radio" value='1' v-model="priceRule.type"> 外表加成规则
                                    </label>
                                </div>
                            </div>

                            <div class="form-group">
                                <label class="col-sm-4 control-label">是否可分泡</label>
                                <div class="col-sm-8">
                                    <label class="radio-inline">
                                        <input type="radio" value='0' v-model="priceRule.category"> 按板块
                                    </label>
                                    <label class="radio-inline">
                                        <input type="radio" value='1' v-model="priceRule.category"> 按目的港
                                    </label>
                                </div>
                            </div>

                            <div class="form-group">
                                <label class="col-sm-4 control-label">航空公司</label>
                                <div class="col-sm-8">
                                    <input type="text" v-model="priceRule.airCompany" class="form-control" placeholder="航空公司">
                                </div>
                            </div>

                            <div class="form-group">
                                <label class="col-sm-4 control-label">航线</label>
                                <div class="col-sm-8">
                                    <input type="text" v-model="priceRule.airline" class="form-control" placeholder="航线">
                                </div>
                            </div>

                            <div class="form-group">
                                <label class="col-sm-4 control-label">目的港</label>
                                <div class="col-sm-8">
                                    <input type="text" v-model="priceRule.destination" class="form-control" placeholder="目的港">
                                </div>
                            </div>

                            <div class="form-group">
                                <label class="col-sm-4 control-label">最低价格增加幅度</label>
                                <div class="col-sm-8">
                                    <input type="text" v-model="priceRule.minPrice" class="form-control" placeholder="最低价格增加幅度">
                                </div>
                            </div>

                            <div class="form-group">
                                <label class="col-sm-4 control-label">小于45kg增加幅度</label>
                                <div class="col-sm-8">
                                    <input type="text" v-model="priceRule.priceN" class="form-control" placeholder="小于45kg增加幅度">
                                </div>
                            </div>

                            <div class="form-group">
                                <label class="col-sm-4 control-label">+100kg增加幅度</label>
                                <div class="col-sm-8">
                                    <input type="text" v-model="priceRule.price100" class="form-control" placeholder="+100kg增加幅度">
                                </div>
                            </div>

                            <div class="form-group">
                                <label class="col-sm-4 control-label">+300kg增加幅度</label>
                                <div class="col-sm-8">
                                    <input type="text" v-model="priceRule.price300" class="form-control" placeholder="+300kg增加幅度">
                                </div>
                            </div>

                            <div class="form-group">
                                <label class="col-sm-4 control-label">+500kg增加幅度</label>
                                <div class="col-sm-8">
                                    <input type="text" v-model="priceRule.price500" class="form-control" placeholder="+500kg增加幅度">
                                </div>
                            </div>

                            <div class="form-group">
                                <label class="col-sm-4 control-label">+1000kg增加幅度</label>
                                <div class="col-sm-8">
                                    <input type="text" v-model="priceRule.price1000" class="form-control" placeholder="+1000kg增加幅度">
                                </div>
                            </div>

                            <div class="form-group">
                                <label class="col-sm-4 control-label">+3000kg增加幅度</label>
                                <div class="col-sm-8">
                                    <input type="text" v-model="priceRule.price3000" class="form-control" placeholder="+3000kg增加幅度">
                                </div>
                            </div>

                            <div class="form-group">
                                <label class="col-sm-4 control-label">+5000kg增加幅度</label>
                                <div class="col-sm-8">
                                    <input type="text" v-model="priceRule.price5000" class="form-control" placeholder="+5000kg增加幅度">
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

    export default {
        data:function(){
            return{

            }
        },

        props:['priceRule'],
        methods:{
            update:function(){
                this.$emit('update', this.priceRule)
            },
            submit:function(){
                this.$emit('submit', this.priceRule)
            }
        },
        mounted:function(){
            var _this=this;
            $('#myModal').on('hidden.bs.modal', function (e) {
                //重置属性值为空
                for (var sProp in _this.priceRule) {
                    _this.priceRule[sProp]='';
                }
                $("#btm-submit").show()
                $("#btm-update").hide()
            })

        }


    }
</script>