<template>

    <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div class="modal-dialog modal-cm" role="document">
            <div class="modal-content" id="addForm">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title" id="myModalLabel">联系人录入</h4>
                </div>


                <div class="modal-body">
                    <validator name="validation1">
                        <form class="form-horizontal">
                            <div class="form-group">
                                <label class="col-sm-4 control-label">业务编号</label>
                                <div class="col-sm-8">
                                    <input type="text" v-model="statisticsInfo.supplierId"  disabled class="form-control" placeholder="业务编号">
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="col-sm-4 control-label">航司</label>
                                <div class="col-sm-8">
                                    <input type="text" v-model="statisticsInfo.company" class="form-control" placeholder="航司">
                                </div>
                            </div>

                            <div class="form-group">
                                <label class="col-sm-4 control-label">航线</label>
                                <div class="col-sm-8">
                                    <input type="text" v-model="statisticsInfo.nameEn" class="form-control" placeholder="航线">
                                </div>
                            </div>

                            <div class="form-group">
                                <label class="col-sm-4 control-label">统计周期</label>
                                <div class="col-sm-8">
                                    <input type="text" v-model="statisticsInfo.nameCh" class="form-control" placeholder="统计周期">
                                </div>
                            </div>

                            <div class="form-group">
                                <label class="col-sm-4 control-label">考核货量</label>
                                <div class="col-sm-8">
                                    <input type="text" v-model="statisticsInfo.department" class="form-control" placeholder="考核货量">
                                </div>
                            </div>

                            <div class="form-group">
                                <label class="col-sm-4 control-label">完成货量</label>
                                <div class="col-sm-8">
                                    <input type="text" v-model="statisticsInfo.title" class="form-control" placeholder="完成货量">
                                </div>
                            </div>

                            <div class="form-group">
                                <label class="col-sm-4 control-label">超额完成量</label>
                                <div class="col-sm-8">
                                    <input type="text" v-model="statisticsInfo.email" class="form-control" placeholder="超额完成量">
                                </div>
                            </div>

                            <div class="form-group">
                                <label class="col-sm-4 control-label">超额奖励</label>
                                <div class="col-sm-8">
                                    <input type="text" v-model="statisticsInfo.tel" class="form-control" placeholder="超额奖励">
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
        props:['statisticsInfo'],
        methods:{
            update:function(){
                this.$emit('update', this.statisticsInfo)

            },
            submit:function(){
                this.$emit('submit', this.statisticsInfo)
            }
        },
        mounted:function(){
            console.log(this.statisticsInfo)
            var _this=this;
            this.$nextTick(function () {
                $('#myModal').on('hidden.bs.modal', function (e) {
                    //重置属性值为空
                    for (var sProp in _this.statisticsInfo) {
                        _this.statisticsInfo[sProp]='';
                    }
                    $("#btm-submit").show()
                    $("#btm-update").hide()
                })
                // code that assumes this.$el is in-document
            })


        }


    }
</script>