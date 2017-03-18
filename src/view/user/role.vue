<template>
    <div>
    <!-- Content Header (Page header) -->
    <section class="content-header">
        <button data-toggle="modal" data-target="#myModal" class="btn btn-sm btn-primary pull-right" type="button">添加角色</button>
        <ol class="breadcrumb">
            <li><a href="#"><i class="fa fa-dashboard"></i>首页</a></li>
            <li><a href="#">系统管理</a></li>
            <li class="active">角色权限管理</li>
        </ol>
    </section>

    <!-- Main content -->
    <section class="content">

        <div class="row">
            <div class="col-md-12">

                <div class="box">
                    <div class="box-body table-responsive no-padding">
                        <table class="table table-hover" id="roleList">
                            <tbody>
                            <tr>
                                <th width="60" class="text-center">id</th>
                                <th>角色编码</th>
                                <th>角色名称</th>
                                <th>角色描述</th>
                                <th width="70">操作</th>
                                <th width="100" class="text-center">授权</th>
                            </tr>
                            <tr v-for="item in items">
                                <td class="text-center">{{ item.id }}</td>
                                <td>{{ item.roleKey }}</td>
                                <td>{{ item.roleName }}</td>
                                <td>{{ item.description }}</td>
                                <td>
                                    <i class="fa fa-fw fa-trash-o" @click="del(item.id)" title="删除"></i>
                                    <i class="fa fa-fw fa-wrench" data-toggle="modal" data-target="#myModal_update"  @click="findById(item.id)" title="编辑"></i>
                                </td>
                                <th width="100" class="text-center" ><span @click="setRoleKey(item.roleKey)" data-toggle="modal" data-target="myModal_authorize" class="glyphicon glyphicon-cog"></span></th>
                            </tr>


                            </tbody>
                        </table>
                    </div>
                </div>

                <!--分页-->
                <div id="pagination">
                    <pag-nav :total="total" :display="display" :current="current" v-on:pagechange="pagechange"></pag-nav>
                </div>

            </div>

        </div>


    </section>

    <!-- Modal -->
    <role-modal v-on:update="update" v-on:submit="submit" :role-info="roleInfo" :role-key="roleKey" :menu-codes="menuCodes"></role-modal>
    </div>
</template>

<script>
    import pagNav from '../../components/pagination.vue'
    import util from '../../components/util.js'
    import roleModal from './roleModal.vue'
    var searchDate={
        pageNum:1,
        pageSize:10
    }

    export default {
        data:function(){
            return{
                items: "",
                checkedIds: [],
                total: 0,
                display: searchDate.pageSize,
                current: 1,
                roleInfo:'',
                roleKey:'',
                menuCodes:''
            }
        },
        components:{pagNav,roleModal},
        methods:{
            pagechange: function (p) {
                searchDate.pageNum=p;
                this.list(searchDate);
            },
            update:function(data){
                var _this=this;
                var data = JSON.stringify(data);
                $.ajax({
                    url: '/airlogis/sys/role/editRole',
                    contentType: "application/json",
                    type: "post",
                    dataType: "json",
                    data: data,
                    success: function (data) {
                        util.alertMsgTip(data.message)
                        $('#myModal').modal('hide')
                        _this.list(searchDate);
                    },
                    error: function (xhr, textStatus, errorThrown) {

                    }
                })
            },
            submit:function(data){
                var _this=this;
                var data = JSON.stringify(data);
                $.ajax({
                    url: '/airlogis/sys/role/addRole',
                    contentType: "application/json",
                    dataType: "json",
                    type: "post",
                    data: data,
                    success: function (data) {
                        util.alertMsgTip(data.message)
                        $('#myModal').modal('hide')
                        _this.list(searchDate);
                    },
                    error: function (xhr, textStatus, errorThrown) {
                        util.alertMsgTip(JSON.parse(xhr.responseText).message)
                    }
                })

            },
            del: function (id) {
                var _this=this;
                $.ajax({
                    url: '/airlogis/sys/role/deleteRole?id=' + id,
                    contentType: "application/json",
                    success: function (data) {
                        util.alertMsgTip(data.message)
                        _this.list(searchDate);
                    },
                    error: function (xhr, textStatus, errorThrown) {

                    }
                })
            },
            delAll: function () {
                if(this.checkedIds.length==0){
                    util.alertMsgTip("自少选择一个")
                    return;
                }
                this.del(this.checkedIds)
            },
            findById: function (id) {
                var _this=this;
                $.ajax({
                    url: '/airlogis/sys/role/loadRole?id=' + id,
                    contentType: "application/json",
                    dataType: "json",
                    success: function (xhr) {
                        var data = xhr.data;
                        _this.roleInfo=xhr.data;
                        console.log(JSON.stringify(_this.roleInfo))
                        $("#btm-submit").hide()
                        $("#btm-update").show()
                        $('#myModal').modal('show')

                    },
                    error: function (xhr, textStatus, errorThrown) {

                    }
                })

            },
            list:function(){
                var _this=this;
                $.ajax({
                    url: '/airlogis/sys/role/listRole',
                    data:searchDate,
                    contentType: "application/json",
                    dataType: "json",
                    success: function (data) {
                        _this.total = data.total;
                        _this.current = data.pageNum;
                        _this.items = data.data;
                    },
                    error: function (xhr, textStatus, errorThrown) {

                    }
                })
            },
            setRoleKey:function(roleKey){
                console.log('roleKey='+roleKey)
                this.roleKey=roleKey;
                var _this=this;
                $.ajax({
                    url: '/airlogis/sys/authority/getAuthorityTree?menuCode=0&roleKey='+roleKey,
                    contentType:"application/json",
                    dataType:"json",
                    success: function (data) {
                        var meunCode=[];
                        var data=data.data;
                        for(var i=0;i<data.length;i++){
                            $.ajax({
                                url: '/airlogis/sys/authority/getAuthorityTree?menuCode='+data[i].menuCode+'&roleKey='+roleKey,
                                contentType:"application/json",
                                async : false,
                                dataType:"json",
                                success:function(xhr){
                                    xhr.data.forEach(function (value) {
                                        meunCode.push(value.menuCode);
                                    });

                                }
                            })
                        }
                        console.log(meunCode)
                        _this.menuCodes=meunCode;
                        $("#myModal_authorize").modal('show');
                        //vm_authorize.$children[0].menuCodes=meunCode;
                    },
                    error:function(xhr,textStatus,errorThrown){

                    }
                })
            }
        },
        created: function(transition){
            this.list(searchDate)
            // document.title = "用户登入"

        }
    }

</script>