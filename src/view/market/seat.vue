<template>
    <div>
    <section class="content-header">
         <ol class="breadcrumb">
            <li><a href="#"><i class="fa fa-dashboard"></i>首页</a></li>
            <li><a href="#">市场管理</a></li>
            <li class="active">舱位预报和动态</li>
        </ol>
    </section>
    <div class="row" style="text-align: left;display: none">

        <div class="input-group input-group-sm"  style="width: 30%; margin-top: 15px;margin-left: 30px;">
            <input type="text" class="form-control">
                    <span class="input-group-btn">
                      <button class="btn btn-info btn-flat" type="button">搜索</button>
                    </span>
        </div>

    </div>

    <section class="content">

        <div class="row">
            <div class="col-md-12">
                <!-- Custom Tabs -->

                <div class="nav-tabs-custom">
                    <ul class="nav nav-tabs">
                        <li class="active"><a data-toggle="tab" href="#tab_1" aria-expanded="true">CA固定板信息</a></li>
                        <li class=""><a data-toggle="tab" href="#tab_2" aria-expanded="false">各航司舱位情况</a></li>
                        <li class=""><a data-toggle="tab" href="#tab_3" aria-expanded="false">各航司航班动态</a></li>
                    </ul>
                    <div class="tab-content">
                        <div id="tab_1" class="tab-pane active">
                             <seat1></seat1>
                        </div>
                        <!-- /.tab-pane -->
                        <div id="tab_2" class="tab-pane">
                            <seat2></seat2>
                        </div>
                        <!-- /.tab-pane -->
                        <div id="tab_3" class="tab-pane">
                            <seat3></seat3>
                        </div>
                        <!-- /.tab-pane -->
                    </div>
                    <!-- /.tab-content -->
                </div>

                <!-- nav-tabs-custom -->
            </div>
            <!-- /.col -->

        </div>


    </section>

    </div>

</template>

<script>

    import seat1 from './seat_1.vue';
    import seat2 from './seat_2.vue';
    import seat3 from './seat_3.vue';

    export default {
        data:function(){
            return{

            }
        },
        components:{seat1,seat2,seat3},
        methods:{

        },
        mounted: function(transition){

        }

    }

</script>