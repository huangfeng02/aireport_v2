<template>

    <div>
    <!-- Modal -->
    <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div class="modal-dialog modal-cm" role="document">
            <div class="modal-content" id="addRoleForm">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title" id="myModalLabel">添加角色</h4>
                </div>
                <div class="modal-body">
                    <form class="form-horizontal">
                        <div class="form-group">
                            <label class="col-sm-3 control-label">角色编码</label>
                            <div class="col-sm-9">
                                <input type="text" v-model="roleInfo.roleKey" class="form-control" placeholder="角色编码">
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-3 control-label">角色名称</label>
                            <div class="col-sm-9">
                                <input type="text" v-model="roleInfo.roleName" class="form-control" placeholder="角色名称">
                            </div>
                        </div>

                        <div class="form-group">
                            <label class="col-sm-3 control-label">角色描述</label>
                            <div class="col-sm-9">
                                <input type="text" v-model="roleInfo.description" class="form-control" placeholder="角色描述">
                            </div>
                        </div>
                    </form>
                </div>

                <div class="modal-footer">
                    <button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
                    <button type="button" @click="submit" id="btm-submit" class="btn btn-primary">提交</button>
                    <button style="display: none;" type="button" id="btm-update" @click="update" class="btn btn-primary">修改</button>

                </div>
            </div>
        </div>
    </div>



    <!--角色授权-->
    <div class="modal fade" id="myModal_authorize" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div class="modal-dialog modal-cm" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title">角色授权</h4>
                </div>
                <div class="modal-body">
                    <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                        <div class="panel panel-default" v-for="item in items">
                            <div class="panel-heading" role="tab" v-bind:id="'heading' + $index">
                                <h4 class="panel-title">
                                    <a data-toggle="collapse" class="center-block" data-parent="#accordion" v-bind:href="'#collapse' + $index" aria-expanded="true"  v-bind:aria-controls="'collapse' + $index">
                                        {{item.menuName}}
                                    </a>
                                </h4>
                            </div>
                            <div v-bind:id="'collapse' + $index" class="panel-collapse collapse" role="tabpanel"  v-bind:aria-labelledby="'heading' + $index">
                                <div class="panel-body">
                                    <div class="form-group">
                                        <div class="checkbox" v-for="(sub,index) in item.subMenu">
                                            <label>
                                                <input type="checkbox" v-model="menuCodes"  v-bind:value="sub.menuCode">
                                                {{sub.menuName}}
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
                    <button type="button" @click="submit2" class="btn btn-primary">提交</button>
                </div>
            </div>
        </div>
    </div>
    </div>

</template>

<script>
    export default {
        data:function(){
            return{
                items:''
            }
        },
        props: ['roleInfo','roleKey','menuCodes'],
        methods: {
            submit2:function(){
                var data={
                    roleKey:this.roleKey,
                    "menuCodes[]":this.$children
                }
                var _this=this;
                $.ajax({
                    url: '/airlogis/sys/authority/saveRoleAuthority',
                    // contentType:"application/json",
                    type:"post",
                    data:{
                        "roleKey":_this.roleKey,
                        //"menuCodes[]":self.$children[0].menuCodes
                        "menuCodes[]":["systemmanagement","sysuser","department","dict","role","authority","aireline","add","schedule","iata",
                            "market","formulaSet","feesSet","price","companyFees","transitPrice","priceRule","seat",
                            "supplier","listSupplier","listContact","listReceipt","listContract","listRule","listStatistics",
                        "listBooking","listCustoms","listTally","listBargaining","bargainingDetail","listBiling","costApplication","billingApplication",
                            "listEq","listEqRule","listEqPrice","listInquiry","InquiryRule",
                        "listOrder","orderQuote","orderVct","orderFileList"]
                    },
                    dataType:"json",
                    success: function (data) {
                        console.log(data)
                        $("#myModal_authorize").modal('hide');
                    },
                    error:function(xhr,textStatus,errorThrown){

                    }
                })
            },
            submit: function (event) {
                this.$emit('submit', this.roleInfo)
            },
            update:function(data){
                this.$emit('update', this.roleInfo)
            },
            list:function(){
                var _this=this;
                $.ajax({
                    url: '/airlogis/sys/authority/getMenuTree?menuCode=0',
                    //async: false,
                    success: function (data) {
                        _this.items=data.data;
                    },
                    error:function(xhr,textStatus,errorThrown){

                    }
                })
            }
        },
        mounted:function(){
            var _this=this;
            this.list()
            $('#myModal').on('hidden.bs.modal', function (e) {
                //重置属性值为空
                for (var sProp in _this.roleInfo) {
                    _this.roleInfo[sProp]='';
                }
                $("#btm-submit").show()
                $("#btm-update").hide()
            })
        }

    }
</script>