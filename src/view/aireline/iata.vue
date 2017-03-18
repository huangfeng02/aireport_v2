<template>
    <div>
    <section class="content-header">
         <ol class="breadcrumb">
            <li><a href="#"><i class="fa fa-dashboard"></i>首页</a></li>
            <li><a href="#">航线管理</a></li>
            <li class="active">IATA分区航线</li>
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
                        <li class="active"><a data-toggle="tab" href="#tab_1" aria-expanded="true">IATA分区设置航线</a></li>
                        <li class=""><a data-toggle="tab" href="#tab_2" aria-expanded="false">微调航线设置</a></li>
                        <li class=""><a data-toggle="tab" href="#tab_3" aria-expanded="false">航司板块划分设置</a></li>
                    </ul>
                    <div class="tab-content">
                        <div id="tab_1" class="tab-pane active">
                             <iata1></iata1>
                        </div>
                        <!-- /.tab-pane -->
                        <div id="tab_2" class="tab-pane">
                            <iata2></iata2>
                        </div>
                        <!-- /.tab-pane -->
                        <div id="tab_3" class="tab-pane">
                            <iata3></iata3>
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

    import iata1 from './iata_1.vue';
    import iata2 from './iata_2.vue';
    import iata3 from './iata_3.vue';

    export default {
        data:function(){
            return{

            }
        },
        components:{iata1,iata2,iata3},
        methods:{

        },
        created: function(transition){

        }

    }

</script>