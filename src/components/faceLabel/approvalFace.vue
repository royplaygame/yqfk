<!--审核人脸图像标注-->
<template>
  <div class="role">
    <div class="roleList">
      <div class="imgBox img" id="dv">
        <img :src="imgsrc" alt id="faceImg" />
        <div class="imgName">{{imgName}}</div>
      </div>
      <el-radio v-model="imgType" label="1">彩色图片</el-radio>
  <el-radio v-model="imgType" label="2">红外图片</el-radio>
      <ul class="showLabel">
        <li v-for="(item,index) in items" :key="index" class="x">
          x:{{item.x}}
          y:{{item.y}}
        </li>
      </ul>
      <el-radio v-model="radio" label="1">合格</el-radio>
      <el-radio v-model="radio" label="2">不合格</el-radio>
      <!-- <el-button @click="clearLabel" type="primary">清空标注</el-button> -->
      <el-button @click="approval" type="primary">下一张</el-button>
    </div>
  </div>
</template>
<script>
import { mapActions, mapState } from "vuex";
import SelectTree from "../cModule/select.vue";
import selectIcon from "../cModule/iconSelect.vue";
export default {
  components: {
    SelectTree,
    selectIcon
  },
  data() {
    return {
        imgType:'1',
      radio: "1",
      imgsrc: "",
      imgX: "",
      imgY: "",
      points: [],
      imgName: "",
      items: []
    };
  },
  // 过滤
  filters: {},
  // 模块新建时
  created: function() {
    this.getBaseImg();
  },
  // 计算属性
  mounted() {},
  // 事件处理
  methods: {
    // 清空标注
    clearLabel() {
      let dv = document.getElementById("dv");
      let marker = document.getElementsByClassName("marker");
      for (let i = 0; i < marker.length; i++) {
        dv.removeChild(marker[i]);
        i--;
      }
      this.points = [];
      this.items = [];
    },
    // 随机颜色
    rgb() {
      //rgb颜色随机
      var r = Math.floor(Math.random() * 256);
      var g = Math.floor(Math.random() * 256);
      var b = Math.floor(Math.random() * 256);
      var rgb = "(" + r + "," + g + "," + b + ")";
      return rgb;
    },
    // 渲染标注点
    createMarker(x, y, divName) {
      var ProportionHeightInImg; //鼠标所选位置相对于所选图片高度的比例
      var ProportionWidthInImg; //鼠标所选位置相对于所选图片宽度的比例
      var div = document.createElement("div");
      let rgb;
      div.className = "marker";
      let marker = document.getElementsByClassName("marker");
      document.getElementById(divName).appendChild(div);
      switch (marker.length) {
        case 1:
          rgb = "255,20,60";
          break;
        case 2:
          rgb = "255,192,203";
          break;
        case 3:
          rgb = "255,0,255";
          break;
        case 4:
          rgb = "0,255,255";
          break;
        case 5:
          rgb = "0,255,0";
      }
      div.style =
        "position: absolute;width: 5px;height: 5px;background: rgb(" +
        rgb +
        ");border-radius: 50%;";
      div.style.left = x + "px";
      div.style.top = y + "px";
    },
    //初始化获取图片信息
    getBaseImg(e) {
      let self = this;
      self.items = [];
      self
        .getLandMarkPre({
          type: 1,
          img_type: parseInt(self.imgType)
        })
        .then(data => {
          if (data.code == "0") {
            self.clearLabel();
            self.imgsrc =  data.result.img_url;
            self.imgName = data.result.img_name;
            self.items = data.result.points || [];
            for (let v of self.items) {
              self.createMarker(v.x, v.y, "dv");
            }
          } else {
            self.$message({
              type: "info",
              message: data.msg
            });
          }
        });
    },
    MarkSmallImg() {
      var ProportionHeightInImg; //鼠标所选位置相对于所选图片高度的比例
      var ProportionWidthInImg; //鼠标所选位置相对于所选图片宽度的比例
      var myImg = document.querySelector("#SmallLiuYiFeiImg");
      var currWidth = myImg.clientWidth;
      var currHeight = myImg.clientHeight;
      // alert("图片高度："+currHeight);
      // alert("图片宽度："+currWidth);

      var x = currWidth * ProportionWidthInImg;
      var y = currHeight * ProportionHeightInImg;
      createMarker(x, y, "dv2");
    },
    // 点击标注
    arrowClick(e) {
      var ProportionHeightInImg; //鼠标所选位置相对于所选图片高度的比例
      var ProportionWidthInImg; //鼠标所选位置相对于所选图片宽度的比例
      e = e || window.event;
      var x = e.offsetX || e.layerX,
        y = e.offsetY || e.layerY;
      if (this.items.length < 5) {
        this.imgX = x - 2;
        this.imgY = y - 2;
        this.items.push({ x: this.imgX, y: this.imgY });
        this.createMarker(x - 2, y - 2, "dv");
      }

      //获取图片的高度和宽度
      //   var myImg = document.querySelector("#faceImg");
      //   var currWidth = myImg.clientWidth;
      //   var currHeight = myImg.clientHeight;

      //   ProportionWidthInImg = x / currWidth;
      //   ProportionHeightInImg = y / currHeight;

      //   MarkSmallImg();
    },
    //发送图片审核信息
    approval() {
      let self = this;
      self
        .getLandMarkPreRes({
          type: parseInt(self.radio),
          img_name: self.imgName
        })
        .then(data => {
          if (data.code == "0") {
            self.imgName = "";
            self.getBaseImg();
          } else {
            self.$message({
              type: "info",
              message: data.msg
            });
          }
        });
    },

    ...mapActions(["getLandMarkPre", "getLandMarkPreRes"])
  },
  // 监视
  watch: {}
};
</script>
<style scoped>
.role {
  width: 100%;
  height: 100%;
  overflow: scroll;
}
.seek {
  width: 98%;
  height: auto;
  margin: 10px auto;
  border: 1px solid #e6e6e6;
  background-color: #fff;
}
.roleList {
  width: 98%;
  height: auto;
  border: 1px solid #e6e6e6;
  margin: 10px auto;
  background-color: #fff;
  padding-bottom: 100px;
}
.formContent {
  width: 100%;
  height: 100%;
  margin: 30px 32px;
}
.imgBox {
  width: 480px;
  height: 640px;
  border: 1px solid #ccc;
}
.roleTop {
  width: 100%;
  height: 59px;
  border-bottom: 1px solid #e6e6e6;
}
.addRole {
  padding-left: 30px;
  padding-top: 10px;
}
.tableForm {
  width: 100%;
  height: 100%;
}
.iconSize {
  font-size: 16px;
}
.paginationCon {
  float: right;
  margin-top: 12px;
  margin-right: 30px;
}
.img {
  position: relative;
  border: solid 1px #000;
  display: inline-block;
  margin: 100px 100px;
}
.img .marker {
  position: absolute;
  width: 5px;
  height: 5px;
  background: #f00;
  border-radius: 50%;
}
.showLabel {
  width: 200px;
  height: auto;
  display: block;
  position: absolute;
  top: 100px;
  left: 700px;
}
.imgName{
    font-size: 16px;
    color:#000;
    text-align: center;
    width: 480px;
    height: auto;
    margin-top: 10px;
}
</style>
