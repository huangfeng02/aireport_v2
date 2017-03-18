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
                                <label class="col-sm-4 control-label">航司</label>
                                <div class="col-sm-8">
                                    <input type="text" v-model="scheduleInfo.airlineCompany" class="form-control" placeholder="航司">
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="col-sm-4 control-label">始发地</label>
                                <div class="col-sm-8">
                                    <input type="text" v-model="scheduleInfo.departure" class="form-control" placeholder="始发地">
                                </div>
                            </div>

                            <div class="form-group">
                                <label class="col-sm-4 control-label">目的地</label>
                                <div class="col-sm-8">
                                    <input type="text" v-model="scheduleInfo.destination" class="form-control" placeholder="目的地">
                                </div>
                            </div>

                            <div class="form-group">
                                <label class="col-sm-4 control-label">航班号</label>
                                <div class="col-sm-8">
                                    <input type="text" v-model="scheduleInfo.flightNo" class="form-control" placeholder="航班号">
                                </div>
                            </div>

                            <div class="form-group">
                                <label class="col-sm-4 control-label">起飞时刻</label>
                                <div class="col-sm-8">
                                    <calendar :value="value5" :format="format" :clear-button="clear" :placeholder="到达时刻" ></calendar>
                                </div>
                            </div>

                            <div class="form-group">
                                <label class="col-sm-4 control-label">到达时刻</label>
                                <div class="col-sm-8">
                                    <calendar :value="value6" :format="format" :clear-button="clear" :placeholder="到达时刻" ></calendar>
                                </div>
                            </div>

                            <div class="form-group">
                                <label class="col-sm-4 control-label">机型</label>
                                <div class="col-sm-8">
                                    <input type="text" v-model="scheduleInfo.aircraftModel" class="form-control" placeholder="机型">
                                </div>
                            </div>

                            <div class="form-group">
                                <label class="col-sm-4 control-label">班期</label>
                                <div class="col-sm-8">
                                    <input type="text" v-model="scheduleInfo.schedule" class="form-control" placeholder="班期">
                                </div>
                            </div>

                            <div class="form-group">
                                <label class="col-sm-4 control-label">开始日期</label>
                                <div class="col-sm-8">
                                    <calendar :value="value3" :format="format" :clear-button="clear" :placeholder="开始日期" ></calendar>
                                </div>
                            </div>

                            <div class="form-group">
                                <label class="col-sm-4 control-label">截止日期</label>
                                <div class="col-sm-8">
                                    <calendar :value="value4" :format="format" :clear-button="clear" :placeholder="截止日期" ></calendar>
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
                value3: '',
                value4: '',
                value5: '',
                value6: '',
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
        props:['scheduleInfo'],
        methods:{
            update:function(){
                this.scheduleInfo.startTime=this.value3;
                this.scheduleInfo.endTime=this.value4;
                this.scheduleInfo.departureTime=this.value5;
                this.scheduleInfo.arrivalTime=this.value6;
                this.$emit('update', this.scheduleInfo)
            },
            submit:function(){
                this.scheduleInfo.startTime=this.value3;
                this.scheduleInfo.endTime=this.value4;
                this.scheduleInfo.departureTime=this.value5;
                this.scheduleInfo.arrivalTime=this.value6;
                this.$emit('submit', this.scheduleInfo)
            }
        },
        mounted:function(){
            this.value3=this.scheduleInfo.startTime;
            this.value4=this.scheduleInfo.endTime;
            this.value5=this.scheduleInfo.departureTime;
            this.value6=this.scheduleInfo.arrivalTime;

            var _this=this;
            $('#myModal').on('hidden.bs.modal', function (e) {
                //重置属性值为空
                for (var sProp in _this.scheduleInfo) {
                    _this.scheduleInfo[sProp]='';
                }
                _this.value3.value='';
                _this.value4.value='';
                _this.value5.value='';
                _this.value6.value='';
                $("#btm-submit").show()
                $("#btm-update").hide()
            })

        }


    }
</script>