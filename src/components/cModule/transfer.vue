<!--穿梭框-->
<template>
  <div class="transfer">
    <div class="leftBox el-transfer-panel">
      <div class="leftTop">
        <el-checkbox
          :indeterminate="isIndeterminate"
          v-model="checkAll"
          @change="handleCheckAllChange"
        >{{title[0]}}</el-checkbox>
      </div>
      <div class="leftBot">
        <div style="margin: 15px 0;"></div>
        <el-checkbox-group v-model="checkedMember" @change="handleCheckedChange">
          <el-checkbox v-for="(leftData,index) in memberDatas" :key="index" :label="leftData">
            <span v-show="leftData.face_img">
              <img  style="width:40px;height:40px;" :src="leftData.face_img | filterImg" alt />
            </span>
            <span>{{leftData.name}}</span>
          </el-checkbox>
        </el-checkbox-group>
      </div>
    </div>
    <div class="middle">
      <div class="el-transfer__buttons">
        <el-button
          type="primary"
          icon="el-icon-arrow-left"
          class="el-transfer__button"
          circle
          :disabled="isDisabledLeft"
          @click="pushLeftData"
        ></el-button>
        <el-button
          type="primary"
          icon="el-icon-arrow-right"
          class="el-transfer__button"
          circle
          :disabled="isDisabledRight"
          @click="pushRightData"
        ></el-button>
      </div>
    </div>
    <div class="rightBox el-transfer-panel">
      <div class="leftTop">
        <el-checkbox
          :indeterminate="isIndeterminateRight"
          v-model="checkAllRight"
          @change="handleCheckAllChangeRight"
        >{{title[1]}}</el-checkbox>
      </div>
      <div class="leftBot">
        <div style="margin: 15px 0;"></div>
        <el-checkbox-group v-model="checkedMemberRight" @change="handleCheckedChangeRight">
          <el-checkbox v-for="(rightData,index) in bindmemberDatas" :key="index" :label="rightData">
            <span v-show="rightData.face_img">
              <img style="width:40px;height:40px;" :src="rightData.face_img | filterImg" alt />
            </span>
            <span>{{rightData.name}}</span>
          </el-checkbox>
        </el-checkbox-group>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapState } from "vuex";
export default {
  props: {
    memberData: {
      type: Array,
      required: true
    },
    bindMemberData: {
      type: Array,
      required: true
    },
    title:{
      type:Array,
      required:true
    }
  },
  data() {
    return {
      memberDatas: this.memberData,
      bindmemberDatas: this.bindMemberData,
      isDisabledLeft: true,
      isDisabledRight: true,
      checkAll: false,
      checkedMember: [],
      checked: false,
      isIndeterminate: true,
      checkAllRight: false,
      checkedMemberRight: [],
      checkedRight: false,
      isIndeterminateRight: true
    };
  },
  // 过滤
  filters: {
    filterImg(val) {
       if(val !== '' && val !== null){
        return  val;
      }else{
        return ''
      }
    }
  },
  // 模块新建时
  created: function() {
   
  },
  // 计算属性
  mounted() {},
  // 事件处理
  methods: {
    //   左侧箭头点击事件
    pushLeftData() {
        let arr = [];
        
      let bindmember = this.bindmemberDatas;
      bindmember.forEach(v => {
        if (this.checkedMemberRight.indexOf(v) === -1) {
            arr.push(v);
        }else{
            this.memberDatas.push(v)
        }
      });
      this.checkAllRight = false
      this.checkedMemberRight = []
      this.bindmemberDatas = arr;
      this.$emit('func',this.memberDatas,this.bindmemberDatas)
    },
    // 右侧箭头点击事件
    pushRightData() {
      let arr = [];
      let member = this.memberDatas;
      member.forEach(v => {
        if (this.checkedMember.indexOf(v) === -1) {
            arr.push(v);
        }else{
            this.bindmemberDatas.push(v)
        }
      });
      this.checkAll = false
      this.checkedMember = []
      this.memberDatas = arr;
      this.$emit('memberFunc',this.memberDatas,this.bindmemberDatas)
    },
    //   左边选择框
    // 全选
    handleCheckAllChange(val) {
      this.isDisabledRight = !val;
      this.checkedMember = val ? this.memberDatas : [];
      this.isIndeterminate = false;
    },
    // 单选/多选
    handleCheckedChange(value) {
      let checkedCount = value.length;
      this.checkAll = checkedCount === this.memberDatas.length;
      this.isIndeterminate =
        checkedCount > 0 && checkedCount < this.memberDatas.length;
      this.isDisabledRight = false;
    },

    // 右边选择框
    // 全选
    handleCheckAllChangeRight(val) {
      this.isDisabledLeft = !val;
      this.checkedMemberRight = val ? this.bindmemberDatas : [];
      this.isIndeterminateRight = false;
    },
    // 单选/多选
    handleCheckedChangeRight(value) {
      let checkedCount = value.length;
      this.checkAllRight = checkedCount === this.bindmemberDatas.length;
      this.isIndeterminateRight =
        checkedCount > 0 && checkedCount < this.bindmemberDatas.length;
      this.isDisabledLeft = false;
    },
    ...mapActions([])
  },
  // 监视
  watch: {
    memberData(val) {
      this.memberDatas = val;
    },
    memberDatas(val) {
      this.$emit("on-member-change", val);
    },
    bindMemberData(val) {
      this.bindmemberDatas = val;
    },
    bindmemberDatas(val) {
      this.$emit("on-bindmember-change", val);
    }
  }
};
</script>
<style scoped>
.transfer {
  width: 100%;
  height: 100%;
  /* overflow: scroll; */
}
.leftBox,
.rightBox {
  width: 200px;
  height: auto;
  border: 1px solid #ccc;
  display: inline-block;
}

.leftTop {
  width: 100%;
  height: 40px;
  padding-left: 12px;
  line-height: 40px;
  background-color: #f5f7fa;
}
.leftBot {
  height: 246px;
  width: 100%;
  overflow-y: scroll;
  padding-left: 12px;
}
.middle {
  width: 100px;
  height: 100%;
  display: inline-block;
}
</style>