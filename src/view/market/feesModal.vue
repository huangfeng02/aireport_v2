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
                                <label class="col-sm-4 control-label">分类</label>
                                <div class="col-sm-8">
                                    <label class="radio-inline">
                                        <input type="radio" value="0" v-model="feesInfo.category"> 按板块
                                    </label>
                                    <label class="radio-inline">
                                        <input type="radio" value="1" v-model="feesInfo.category"> 按目的港
                                    </label>

                                </div>
                            </div>
                            <div class="form-group">
                                <label class="col-sm-4 control-label">航空公司</label>
                                <div class="col-sm-8">
                                    <input type="text" v-model="feesInfo.airCompany" class="form-control" placeholder="航空公司">
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="col-sm-4 control-label">航线</label>
                                <div class="col-sm-8">
                                    <input type="text" v-model="feesInfo.airline" class="form-control" placeholder="航线">
                                </div>
                            </div>

                            <div class="form-group">
                                <label class="col-sm-4 control-label">目的港</label>
                                <div class="col-sm-8">
                                    <input type="text" v-model="feesInfo.destination" class="form-control" placeholder="目的港">
                                </div>
                            </div>

                            <div class="form-group">
                                <label class="col-sm-4 control-label">燃油计费规则</label>
                                <div class="col-sm-8">
                                    <label class="radio-inline">
                                        <input type="radio" value="0" v-model="feesInfo.fuelWay"> 毛重
                                    </label>
                                    <label class="radio-inline">
                                        <input type="radio" value="1" v-model="feesInfo.fuelWay"> 计费重
                                    </label>
                                </div>
                            </div>

                            <div class="form-group">
                                <label class="col-sm-4 control-label">燃油附加费单价</label>
                                <div class="col-sm-8">
                                    <input type="text" v-model="feesInfo.fuelPrice" class="form-control" placeholder="燃油附加费单价">
                                </div>
                            </div>

                            <div class="form-group">
                                <label class="col-sm-4 control-label">燃油最低收费</label>
                                <div class="col-sm-8">
                                    <input type="text" v-model="feesInfo.minFuelCharge" class="form-control" placeholder="燃油最低收费">
                                </div>
                            </div>

                            <div class="form-group">
                                <label class="col-sm-4 control-label">战险计费规则</label>
                                <div class="col-sm-8">
                                    <label class="radio-inline">
                                        <input type="radio" value="0" v-model="feesInfo.securityWay"> 毛重
                                    </label>
                                    <label class="radio-inline">
                                        <input type="radio" value="1" v-model="feesInfo.securityWay"> 计费重
                                    </label>
                                </div>
                            </div>

                            <div class="form-group">
                                <label class="col-sm-4 control-label">战险计费单价</label>
                                <div class="col-sm-8">
                                    <input type="text" v-model="feesInfo.securityPrice" class="form-control" placeholder="战险计费单价">
                                </div>
                            </div>

                            <div class="form-group">
                                <label class="col-sm-4 control-label">战险最低收费</label>
                                <div class="col-sm-8">
                                    <input type="text" v-model="feesInfo.minSecurityCharge" class="form-control" placeholder="战险最低收费">
                                </div>
                            </div>

                            <div class="form-group">
                                <label class="col-sm-4 control-label">信息处理费</label>
                                <div class="col-sm-8">
                                    <input type="text" v-model="feesInfo.infoPrice" class="form-control" placeholder="infoPrice">
                                </div>
                            </div>

                            <div class="form-group">
                                <label class="col-sm-4 control-label">信息处理最低收费</label>
                                <div class="col-sm-8">
                                    <input type="text" v-model="feesInfo.minInfoCharge" class="form-control" placeholder="信息处理最低收费">
                                </div>
                            </div>

                          <!--  <div class="form-group">
                                <label class="col-sm-4 control-label">生效日期</label>
                                <div class="col-sm-8">
                                    <input type="text" v-model="priceInfo.effectiveDate" class="form-control" placeholder="生效日期">
                                </div>
                            </div>
-->
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
                clear: true
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
        props:['feesInfo'],
        methods:{
            update:function(){
                this.feesInfo.effectiveDate=this.value;
                this.$emit('update', this.scheduleInfo)
            },
            submit:function(){
                this.feesInfo.effectiveDate=this.value;
                this.$emit('submit', this.scheduleInfo)
            }
        },
        mounted:function(){
            this.value=this.priceInfo.effectiveDate;
            var _this=this;
            $('#myModal').on('hidden.bs.modal', function (e) {
                //重置属性值为空
                for (var sProp in _this.feesInfo) {
                    _this.feesInfo[sProp]='';
                }
                _this.value.value='';
                $("#btm-submit").show()
                $("#btm-update").hide()
            })

        }


    }
</script>