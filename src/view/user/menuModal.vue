<template>


    <!-- Modal -->
    <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div class="modal-dialog modal-cm" role="document">
            <div class="modal-content" id="addMenuForm">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title" id="myModalLabel">添加权限</h4>
                </div>

                <div class="modal-body">
                    <validator name="validation1">
                        <form class="form-horizontal">
                            <div class="form-group">
                                <label class="col-sm-4 control-label">菜单编码</label>
                                <div class="col-sm-8">
                                    <input type="text" v-model="menuInfo.menuCode" class="form-control" placeholder="菜单编码">
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="col-sm-4 control-label">菜单名称</label>
                                <div class="col-sm-8">
                                    <input type="text" v-model="menuInfo.menuName" class="form-control" placeholder="菜单名称">
                                </div>
                            </div>

                            <div class="form-group">
                                <label class="col-sm-4 control-label">菜单class样式</label>
                                <div class="col-sm-8">
                                    <input type="text" v-model="menuInfo.menuClass" class="form-control" placeholder="菜单class样式">
                                </div>
                            </div>

                            <div class="form-group">
                                <label class="col-sm-4 control-label">菜单url路径</label>
                                <div class="col-sm-8">
                                    <input type="text" v-model="menuInfo.dataUrl" class="form-control" placeholder="菜单url路径">
                                </div>
                            </div>

                            <div class="form-group">
                                <label class="col-sm-4 control-label">菜单排序</label>
                                <div class="col-sm-8">
                                    <input type="text" v-model="menuInfo.sequence" v-validate:sequence="{ minlength: 1 }" class="form-control" placeholder="菜单排序">
                                </div>
                            </div>

                            <div class="form-group">
                                <label class="col-sm-4 control-label">上级菜单编码</label>
                                <div class="col-sm-8">
                                    <input type="text" v-model="menuInfo.parentMenuCode" class="form-control" placeholder="上级菜单编码">
                                </div>
                            </div>

                            <div class="form-group">
                                <label class="col-sm-4 control-label">在菜单树中显示</label>
                                <div class="col-sm-8">
                                    <label class="radio-inline">
                                        <input type="radio" :value=true v-model="menuInfo.showInMenu"> 是
                                    </label>
                                    <label class="radio-inline">
                                        <input type="radio" :value=false v-model="menuInfo.showInMenu"> 否
                                    </label>
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
        props:['menuInfo'],
        methods: {
            submit: function (event) {
                this.$emit('submit', this.menuInfo)
            },
            update:function(data){
                console.log(2222,this.menuInfo)
                this.$emit('update', this.menuInfo)
            }
        },
        mounted:function(){
            var _this=this;
            $('#myModal').on('hidden.bs.modal', function (e) {
                //重置属性值为空
                for (var sProp in _this.menuInfo) {
                    _this.menuInfo[sProp]='';
                }
                $("#btm-submit").show()
                $("#btm-update").hide()
            })
            //console.log('roles',JSON.stringify(this.roles))

        }

    }
</script>