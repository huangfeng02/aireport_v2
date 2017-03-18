<template>
    <div>
    <!-- Content Header (Page header) -->
    <section class="content-header">
        <button data-toggle="modal" data-target="#importModal" style="margin-left: 10px;display: none" class="btn btn-sm btn-primary pull-right" type="button">批量导入</button>

        <button data-toggle="modal" data-target="#myModal" class="btn btn-sm btn-primary pull-right" type="button">订舱信息录入</button>
        <ol class="breadcrumb">
            <li><a href="#"><i class="fa fa-dashboard"></i>首页</a></li>
            <li><a href="#">接货理货</a></li>
            <li class="active">提货安排信息</li>
        </ol>
    </section>

    <!-- Main content -->
    <section class="content">

        <div class="row">
            <div class="col-md-12">

                <div class="box">
                    <div class="box-header with-border">
                        <h3 class="box-title">提货基本信息</h3>
                    </div>
                    <!-- /.box-header -->
                    <div class="box-body">
                        <table class="table table-bordered">
                            <tbody>
                            <tr>
                                <th>主单号</th>
                                <th>客人名称</th>
                                <th>头程航班号</th>
                                <th>航班日期</th>
                                <th>是否含危险品</th>
                                <th>货型</th>
                            </tr>
                            <tr>
                                <td>999-70123211</td>
                                <td>客人A</td>
                                <td>CA</td>
                                <td>2016-05-02</td>
                                <td>否</td>
                                <td>纸箱</td>
                            </tr>
                            <tr>
                                <th>中文品名</th>
                                <th>件数</th>
                                <th>重量</th>
                                <th>方数</th>
                                <th>卡板尺寸</th>
                                <th></th>
                            </tr>
                            <tr>
                                <td>电路板</td>
                                <td>1</td>
                                <td>640KG</td>
                                <td>1</td>
                                <td>SZX</td>
                                <td></td>
                            </tr>

                            </tbody>
                        </table>
                    </div>
                </div>

                <div class="box">
                    <div class="box-header with-border">
                        <h3 class="box-title">报价信息</h3>
                    </div>
                    <!-- /.box-header -->
                    <div class="box-body">
                        <table class="table table-bordered">
                            <tbody>
                            <tr>
                                <th>始发地</th>
                                <th>目的地</th>
                                <th>车辆类型</th>
                                <th>车型</th>
                                <th>是否带尾板</th>
                                <th>价格</th>
                            </tr>
                            <tr>
                                <td>999-70123211</td>
                                <td>客人A</td>
                                <td>CA</td>
                                <td>2016-05-02</td>
                                <td>否</td>
                                <td>246</td>
                            </tr>

                            </tbody>

                        </table>
                        <textarea class="form-control" rows="3" placeholder="提货备注"></textarea>
                    </div>

                </div>
                <div class="row">
                    <div class="col-md-6">

                        <div class="box">
                            <div class="box-header with-border">
                                <h3 class="box-title">提货信息</h3>
                            </div>
                            <form class="form-horizontal">
                                <div class="box-body">
                                    <div class="form-group">
                                        <label  class="col-sm-3 control-label">提货地址</label>

                                        <div class="col-sm-9">
                                            <input class="form-control"  placeholder="提货地址" type="text">
                                        </div>
                                    </div>

                                    <div class="form-group">
                                        <label  class="col-sm-3 control-label">提货时间</label>

                                        <div class="col-sm-9">
                                            <input class="form-control"  placeholder="提货地址" type="text">
                                        </div>
                                    </div>

                                    <div class="form-group">
                                        <label  class="col-sm-3 control-label">公司名称</label>

                                        <div class="col-sm-9">
                                            <input class="form-control"  placeholder="公司名称" type="text">
                                        </div>
                                    </div>

                                    <div class="form-group">
                                        <label  class="col-sm-3 control-label">联系人信息</label>

                                        <div class="col-sm-9">
                                            <input class="form-control"  placeholder="联系人信息" type="text">
                                        </div>
                                    </div>

                                </div>

                            </form>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="box">
                            <div class="box-header with-border">
                                <h3 class="box-title">提货信息</h3>
                            </div>
                            <form class="form-horizontal">
                                <div class="box-body">
                                    <div class="form-group">
                                        <label  class="col-sm-3 control-label">送货地址</label>

                                        <div class="col-sm-9">
                                            <input class="form-control"  placeholder="送货地址" type="text">
                                        </div>
                                    </div>

                                    <div class="form-group">
                                        <label  class="col-sm-3 control-label">最晚抵达时间</label>

                                        <div class="col-sm-9">
                                            <input class="form-control"  placeholder="最晚抵达时间" type="text">
                                        </div>
                                    </div>

                                    <div class="form-group">
                                        <label  class="col-sm-3 control-label">公司名称</label>

                                        <div class="col-sm-9">
                                            <input class="form-control"  placeholder="公司名称" type="text">
                                        </div>
                                    </div>

                                    <div class="form-group">
                                        <label  class="col-sm-3 control-label">联系人信息</label>

                                        <div class="col-sm-9">
                                            <input class="form-control"  placeholder="联系人信息" type="text">
                                        </div>
                                    </div>

                                </div>

                            </form>
                        </div>


                    </div>
                    <div class="col-md-12">
                        <div class="box">
                            <div class="box-header with-border">
                                <h3 class="box-title">车辆预定信息</h3>
                            </div>
                            <form class="form-horizontal">
                                <div class="box-body">
                                    <div class="form-group">
                                        <label class="col-sm-1 control-label">供应商</label>
                                        <div class="col-sm-2">
                                            <input class="form-control"  placeholder="供应商" type="text">
                                        </div>

                                        <label class="col-sm-1 control-label">应付价格</label>

                                        <div class="col-sm-2">
                                            <input class="form-control"  placeholder="应付价格" type="text">
                                        </div>

                                        <label class="col-sm-1 control-label">司机姓名</label>

                                        <div class="col-sm-2">
                                            <input class="form-control"  placeholder="司机姓名" type="text">
                                        </div>
                                        <label class="col-sm-1 control-label">司机姓名</label>

                                        <div class="col-sm-2">
                                            <input class="form-control"  placeholder="司机姓名" type="text">
                                        </div>

                                    </div>

                                    <div class="form-group">
                                        <label class="col-sm-1 control-label">供应商</label>
                                        <div class="col-sm-2">
                                            <input class="form-control"  placeholder="供应商" type="text">
                                        </div>

                                        <label class="col-sm-1 control-label">应付价格</label>

                                        <div class="col-sm-2">
                                            <input class="form-control"  placeholder="应付价格" type="text">
                                        </div>

                                        <label class="col-sm-1 control-label">司机姓名</label>

                                        <div class="col-sm-2">
                                            <input class="form-control"  placeholder="司机姓名" type="text">
                                        </div>
                                        <label class="col-sm-1 control-label">司机姓名</label>

                                        <div class="col-sm-2">
                                            <input class="form-control"  placeholder="司机姓名" type="text">
                                        </div>

                                    </div>




                                </div>

                            </form>
                        </div>


                    </div>

                    <div class="col-md-12">

                        <div class="box">
                            <div class="box-header with-border">
                                <h3 class="box-title">提货派送信息汇总</h3>
                            </div>

                            <form class="form-horizontal">
                                <div class="box-body">
                                    <textarea class="form-control" rows="5" placeholder="按固定格式把相关信息汇总生成"></textarea>
                                </div>
                                <div class="box-footer" style="text-align:center">
                                    <button type="submit" class="btn btn-info" style="margin-left: 15px;">导出Excell</button>
                                    <button type="submit" class="btn btn-info">保存修改</button>
                                </div>
                            </form>
                        </div>

                    </div>


                </div>




            </div>

        </div>


    </section>
    </div>

</template>

<script>

    export default {
        data:function(){
            return{

            }
        },

        methods: {

        },
        mounted:function(){

        }

    }



</script>