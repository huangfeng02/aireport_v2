<template>
    <div>
    <!-- Content Header (Page header) -->
    <section class="content-header">
        <button data-toggle="modal" data-target="#myModal" class="btn btn-sm btn-primary pull-right" type="button">添加部门</button>
        <ol class="breadcrumb">
            <li><a href="#"><i class="fa fa-dashboard"></i>首页</a></li>
            <li><a href="#">系统管理</a></li>
            <li class="active">部门管理</li>
        </ol>
    </section>

    <!-- Main content -->
    <section class="content">

        <div class="row">
            <div class="col-md-12">

                <div class="box">
                    <div class="box-body table-responsive no-padding">
                        <table class="table table-hover" id="departmentList">
                            <tbody>
                            <tr>
                                <th width="60" class="text-center">id</th>
                                <th>部门编码</th>
                                <th>部门名称</th>
                                <th>上级部门编码</th>
                                <th>部门描述</th>
                                <th width="70">操作</th>
                            </tr>


                            <tr v-for="item in items">
                                <td class="text-center">{{ item.id }}</td>
                                <td>{{ item.departmentKey }}</td>
                                <td>{{ item.departmentName }}</td>
                                <td>{{ item.parentDepartmentkey }}</td>
                                <td>{{ item.description }}</td>
                                <td>
                                    <i class="fa fa-fw fa-trash-o" @click="del(item.id)" title="删除"></i>
                                    <i class="fa fa-fw fa-wrench" data-toggle="modal" data-target="#myModal_update"  @click="findById(item.id)" title="编辑"></i>
                                </td>
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
    <depart-modal v-on:update="update" v-on:submit="submit" :department-info="departmentInfo" :department-name-lists="departmentNameLists"></depart-modal>
    </div>
</template>

<script>
    import pagNav from '../../components/pagination.vue'
    import util from '../../components/util.js'
    import departModal from './departModal.vue'
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
                departmentInfo:'',
                departmentNameLists:''
            }
        },
        components:{pagNav,departModal},
        methods:{
            pagechange: function (p) {
                searchDate.pageNum=p;
                this.list(searchDate);
            },
            update:function(data){
                var _this=this;
                var data = JSON.stringify(data);
                $.ajax({
                    url: '/airlogis/sys/department/editDepartment',
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
                    url: '/airlogis/sys/department/addDepartment',
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
                    url: '/airlogis/sys/department/deleteDepartment?id=' + id,
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
                    url: '/airlogis/sys/department/loadDepartment?id=' + id,
                    contentType: "application/json",
                    dataType: "json",
                    success: function (xhr) {
                        var data = xhr.data;
                        _this.departmentInfo=xhr.data;
                        console.log(JSON.stringify(_this.departmentInfo))
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
                    url: '/airlogis/sys/department/listDepartment',
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
            listAll:function(){
                var _this=this;
                $.ajax({
                    url: '/airlogis/sys/department/listDepartment?pageNum=1&pageSize=200',
                    contentType: "application/json",
                    dataType: "json",
                    success: function (data) {
                        _this.departmentNameLists=data.data;

                    },
                    error: function (xhr, textStatus, errorThrown) {

                    }
                })
            }
        },
        created: function(){
            this.list(searchDate)
            this.listAll()
            // document.title = "用户登入"
        }
    }

</script>