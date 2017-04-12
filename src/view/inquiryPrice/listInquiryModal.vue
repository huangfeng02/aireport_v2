<template>

    <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div class="modal-dialog modal-in" role="document">
            <div class="modal-content" id="addForm">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title" id="myModalLabel">新增询价</h4>
                </div>

                <div class="modal-body">
                    <!-- Main content -->
                    <section class="content">
                      <div class="row">
                        <div class="col-md-12">
                          <form class="form-horizontal" style="width: 98%">
                            <div class="box-body">
                              <div class="form-group">
                                <label class="col-sm-2 control-label">业务类型</label>
                                <div class="col-sm-4">
                                  <input class="form-control" v-model="inquiryInfo.typeName"  placeholder="业务类型" type="text">
                                </div>
                                <label class="col-sm-2 control-label">客人名称</label>
                                <div class="col-sm-4">
                                  <input class="form-control"  v-model="inquiryInfo.customerName" placeholder="客人名称" type="text">
                                </div>
                              </div>

                              <div class="form-group">
                                <label class="col-sm-2 control-label">货物品名</label>
                                <div class="col-sm-4">
                                  <input class="form-control"  v-model="inquiryInfo.goodsName" placeholder="货物品名" type="text">
                                </div>
                                <div class="col-sm-6">
                                  <div class="checkbox pull-left">
                                    <label>
                                      <input type="checkbox">
                                      含磁性
                                    </label>
                                  </div>

                                  <div class="checkbox pull-left" style="margin: 0 10px;">
                                    <label>
                                      <input type="checkbox">
                                      含粉末
                                    </label>
                                  </div>
                                  <div class="checkbox pull-left">
                                    <label>
                                      <input type="checkbox">
                                      含电池
                                    </label>
                                  </div>
                                  <div class="checkbox pull-left" style="margin: 0 10px;">
                                    <label>
                                      <input type="checkbox">
                                      含危险品
                                    </label>
                                  </div>
                                </div>
                              </div>

                              <div class="form-group">
                                <label class="col-sm-2 control-label">件数</label>
                                <div class="col-sm-4">
                                  <input class="form-control"  v-model="inquiryInfo.jianShu" placeholder="件数" type="text">
                                </div>
                                <label class="col-sm-2 control-label">重量(kg)</label>
                                <div class="col-sm-4">
                                  <input class="form-control"  v-model="inquiryInfo.weight" placeholder="重量(kg)" type="text">
                                </div>
                              </div>

                              <div class="form-group">
                                <label class="col-sm-2 control-label">方数(cbm)</label>
                                <div class="col-sm-4">
                                  <input class="form-control"  v-model="inquiryInfo.cbm" placeholder="方数(cbm)" type="text">
                                </div>
                                <label class="col-sm-2 control-label">货物密度</label>
                                <div class="col-sm-4">
                                  <input class="form-control"  v-model="inquiryInfo.miDu" placeholder="货物密度" type="text">
                                </div>
                              </div>

                              <div class="form-group">
                                <label class="col-sm-2 control-label">尺寸(cm):</label>
                                <div class="col-sm-4">
                                  <input class="form-control"  v-model="inquiryInfo.chiCun" placeholder="尺寸(cm)" type="text">
                                </div>
                                <label class="col-sm-2 control-label">始发地</label>
                                <div class="col-sm-4">
                                  <input class="form-control"  v-model="inquiryInfo.from" placeholder="始发地" type="text">
                                </div>
                              </div>

                              <div class="form-group">
                                <label class="col-sm-2 control-label">目的地</label>
                                <div class="col-sm-4">
                                  <input class="form-control"  v-model="inquiryInfo.dest" placeholder="目的地" type="text">
                                </div>
                                <label class="col-sm-2 control-label">送货日期</label>
                                <div class="col-sm-4 input-group date" style="padding:0 15px">
                                  <input type="text" class="form-control time"  v-model="inquiryInfo.songHuoRiQi" placeholder="送货日期">
                                  <div class="input-group-addon">
                                    <span class="glyphicon glyphicon-th"></span>
                                  </div>
                                </div>
                              </div>
                              <div class="form-group">
                                <label class="col-sm-2 control-label">交货日期</label>
                                <div class="col-sm-4 input-group date" style="padding:0 15px">
                                  <input type="text" class="form-control time"  v-model="inquiryInfo.jiaohuoRiQi" placeholder="交货日期">
                                  <div class="input-group-addon">
                                    <span class="glyphicon glyphicon-th"></span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="box-footer">
                              <button type="submit" class="btn btn-info"  @click="submit" >保存</button>
                              <button type="submit" class="btn btn-default"  data-dismiss="modal">关闭</button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </section>
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
        props:['inquiryInfo'],
        methods:{
            submit:function(){
                this.$emit('submit', this.inquiryInfo)
            }
        },
        mounted:function(){
            $('.date').datetimepicker({
               language: "zh-CN",
               minView: "month",
               autoclose: true,
               format: "yyyy-mm-dd",
               pickerPosition: "bottom-left"
            });

            var _this=this;
            $('#myModal').on('hidden.bs.modal', function (e) {
                //重置属性值为空
                for (var sProp in _this.inquiryInfo) {
                    _this.inquiryInfo[sProp]='';
                }
            })

        }


    }
</script>
