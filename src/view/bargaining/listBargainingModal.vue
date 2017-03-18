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
                                    <input type="text" v-model="info.supplierId"  disabled class="form-control" placeholder="业务编号">
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="col-sm-4 control-label">主单号</label>
                                <div class="col-sm-8">
                                    <input type="text" v-model="info.company" class="form-control" placeholder="主单号">
                                </div>
                            </div>

                            <div class="form-group">
                                <label class="col-sm-4 control-label">件数</label>
                                <div class="col-sm-8">
                                    <input type="text" v-model="info.nameEn" class="form-control" placeholder="件数">
                                </div>
                            </div>

                            <div class="form-group">
                                <label class="col-sm-4 control-label">重量（KG）</label>
                                <div class="col-sm-8">
                                    <input type="text" v-model="info.nameCh" class="form-control" placeholder="重量（KG）">
                                </div>
                            </div>

                            <div class="form-group">
                                <label class="col-sm-4 control-label">方数（CBM）</label>
                                <div class="col-sm-8">
                                    <input type="text" v-model="info.department" class="form-control" placeholder="方数（CBM）">
                                </div>
                            </div>

                            <div class="form-group">
                                <label class="col-sm-4 control-label">品名</label>
                                <div class="col-sm-8">
                                    <input type="text" v-model="info.title" class="form-control" placeholder="品名">
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="col-sm-4 control-label">始发地</label>
                                <div class="col-sm-8">
                                    <input type="text" v-model="info.title" class="form-control" placeholder="始发地">
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="col-sm-4 control-label">目的地</label>
                                <div class="col-sm-8">
                                    <input type="text" v-model="info.title" class="form-control" placeholder="目的地">
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="col-sm-4 control-label">状态</label>
                                <div class="col-sm-8">
                                    <input type="text" v-model="info.title" class="form-control" placeholder="状态">
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
        props:['info'],
        methods:{
            update:function(){
                this.$emit('update', this.info)

            },
            submit:function(){
                this.$emit('submit', this.info)
            }
        },
        mounted:function(){
            console.log(this.statisticsInfo)
            var _this=this;
            $('#myModal').on('hidden.bs.modal', function (e) {
                //重置属性值为空
                for (var sProp in _this.info) {
                    _this.info[sProp]='';
                }
                $("#btm-submit").show()
                $("#btm-update").hide()
            })

        }


    }
</script>