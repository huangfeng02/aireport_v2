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
                                  <input class="form-control"  placeholder="业务类型" type="text">
                                </div>
                                <label class="col-sm-2 control-label">客人名称</label>
                                <div class="col-sm-4">
                                  <select class="form-control">
                                    <option>客人A</option>
                                    <option>客人B</option>
                                    <option>客人C</option>
                                  </select>
                                </div>
                              </div>

                              <div class="form-group">
                                <label class="col-sm-2 control-label">货物品名</label>
                                <div class="col-sm-4">
                                  <input class="form-control"  placeholder="货物品名" type="text">
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
                                  <input class="form-control"  placeholder="件数" type="text">
                                </div>
                                <label class="col-sm-2 control-label">重量(kg)</label>
                                <div class="col-sm-4">
                                  <input class="form-control"  placeholder="重量(kg)" type="text">
                                </div>
                              </div>

                              <div class="form-group">
                                <label class="col-sm-2 control-label">方数(cbm)</label>
                                <div class="col-sm-4">
                                  <input class="form-control"  placeholder="方数(cbm)" type="text">
                                </div>
                                <label class="col-sm-2 control-label">货物密度</label>
                                <div class="col-sm-4">
                                  <input class="form-control"  placeholder="货物密度" type="text">
                                </div>
                              </div>

                              <div class="form-group">
                                <label class="col-sm-2 control-label">尺寸(cm):</label>
                                <div class="col-sm-4">
                                  <input class="form-control"  placeholder="尺寸(cm)" type="text">
                                </div>
                                <label class="col-sm-2 control-label">始发地</label>
                                <div class="col-sm-4">
                                  <input class="form-control"  placeholder="始发地" type="text">
                                </div>
                              </div>

                              <div class="form-group">
                                <label class="col-sm-2 control-label">目的地</label>
                                <div class="col-sm-4">
                                  <input class="form-control"  placeholder="目的地" type="text">
                                </div>
                                <label class="col-sm-2 control-label">送货日期</label>
                                <div class="col-sm-4">
                                  <input class="form-control"  placeholder="送货日期" type="text">
                                </div>
                              </div>
                              <div class="form-group">
                                <label class="col-sm-2 control-label">交货日期</label>
                                <div class="col-sm-4">
                                  <input class="form-control"  placeholder="Due Date" type="text">
                                </div>
                              </div>
                            </div>
                            <div class="box-footer">
                              <button type="submit" class="btn btn-info">保存</button>
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
  import listModal from './listInquiryModal.vue'
    export default {
        data:function(){
            return{

            }
        },
        props:['supplierInfo'],
        methods:{
            update:function(){
                this.$emit('update', this.supplierInfo)

            },
            submit:function(){
                this.$emit('submit', this.supplierInfo)
            }
        },
        mounted:function(){
            console.log(this.supplierInfo)
            var _this=this;
            $('#myModal').on('hidden.bs.modal', function (e) {
                //重置属性值为空
                for (var sProp in _this.supplierInfo) {
                    _this.supplierInfo[sProp]='';
                }
                $("#btm-submit").show()
                $("#btm-update").hide()
            })

        }


    }
</script>
