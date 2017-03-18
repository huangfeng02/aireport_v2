<template>
    <div>
    <!-- Content Header (Page header) -->
    <section class="content-header">
        <button data-toggle="modal" data-target="#importModal" style="margin-left: 10px;display: none" class="btn btn-sm btn-primary pull-right" type="button">批量导入</button>

        <button data-toggle="modal" data-target="#myModal" class="btn btn-sm btn-primary pull-right" type="button">订舱信息录入</button>
        <ol class="breadcrumb">
            <li><a href="#"><i class="fa fa-dashboard"></i>首页</a></li>
            <li><a href="#">议价管理</a></li>
            <li class="active">议价和上板安排详情</li>
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


                <div class="row">

                    <div class="col-md-12">
                        <div class="box">
                            <div class="box-header with-border">
                                <h3 class="box-title">议价信息</h3>
                            </div>
                            <form class="form-horizontal">
                                <div class="box-body">
                                    <div class="form-group">

                                        <label class="col-sm-1 control-label" style="width: 110px;">航司议价人</label>

                                        <div class="col-sm-2">
                                            <input class="form-control"  placeholder="航司议价人" type="text">
                                        </div>

                                        <label class="col-sm-1 control-label" style="width: 110px;">议后净运价</label>

                                        <div class="col-sm-2">
                                            <input class="form-control"  placeholder="议后净运价" type="text">
                                        </div>

                                        <label class="col-sm-1 control-label" style="width: 110px;">议后成本价</label>

                                        <div class="col-sm-2">
                                            <input class="form-control"  placeholder="议后成本价" type="text">
                                        </div>



                                    </div>
                                    <div class="form-group">
                                        <label class="col-sm-1 control-label" style="width: 110px;">备注</label>

                                        <div class="col-sm-3">
                                            <input class="form-control"  placeholder="备注" type="text">
                                        </div>
                                    </div>

                                    <div class="form-group">
                                        <div class="col-sm-2">
                                            <div class="checkbox">
                                                <label>
                                                    <input type="checkbox">
                                                    可以计入EQ
                                                </label>
                                            </div>
                                        </div>

                                        <div class="col-sm-2">
                                            <div class="checkbox">
                                                <label>
                                                    <input type="checkbox">
                                                    可以计入货量考核
                                                </label>
                                            </div>
                                        </div>

                                    </div>

                                </div>
                                <div class="box-footer" style="text-align:center">
                                    <button type="submit" class="btn btn-info" style="margin-right: 15px;">不议价</button>
                                    <button type="submit" class="btn btn-info">打回</button>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div class="col-md-12">

                        <div class="box">
                            <div class="box-header with-border">
                                <h3 class="box-title">上板优先级</h3>
                            </div>

                            <form class="form-horizontal">
                                <div class="box-body">

                                        <label>
                                            默认5级为普通优先级，1级为最高优先级
                                        </label>
                                        <select class="form-control" style="width: 100px;">
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                        </select>

                                </div>

                            </form>
                        </div>

                    </div>

                </div>


                <div class="">
                    <button type="button" class="btn bg-olive margin" style="width: 100px">保存</button>
                    <button type="button" class="btn bg-olive margin" style="width: 100px">处理完毕</button>
                </div>

            </div>

        </div>

    </section>
    </div>
</template>

<script>
</script>