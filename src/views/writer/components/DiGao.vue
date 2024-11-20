<template>
  <div class="digao-container">
    <div
      style="
        position: fixed;
        bottom: 40px;
        left: 200px;
        height: 80px;
        width: 80px;
        border-radius: 10px;
        background-color: #fff;
        box-shadow: 0 0 10px black;
        display: flex;
        cursor: pointer;
      "
    >
      <img style="transform: scale(0.7)" :src="IconAdd" />
    </div>
    <div
      style="
        color: #aaa;
        font-size: large;
        margin: 10px 0px 20px 20px;
        letter-spacing: 2px;
      "
    >
      引用素材
    </div>
    <el-card style="border-radius: 10px; margin: 20px 0">
      <div class="one">
        <span class="start">1.[报告生成] </span
        >请帮我写一篇无人机行业前景分析报告
      </div>
      <div class="item">
        <div class="pdf">PDF</div>
        <div class="right">
          <div class="title">
            《2024年中国无人机行业市场前景预测研究报告(简版)》
          </div>
          <div class="content">
            无人机行业近年来发展迅速，市场规模持续扩大，应用领域包括农业植保、物流配送、空中摄影等，行业朝智能化、平台化方向迈进。技术创新推动垂直起降固定翼、大载重无人机等研发，但也.....
          </div>
        </div>
      </div>
      <div class="item">
        <div class="pdf word">WORD</div>
        <div class="right">
          <div class="title">《2023年中国无人机产业链上中下游市场分析》</div>
          <div class="content">
            该分析报告详细探讨了中国无人机产业链的上游、中游和下游市场。报告指出，无人机产业链上游主要包括原材料供应，中游涉及无人机系统及整机制造，下游则是无人机的应用领域。报告还提供了关于金属材料、复合材料等无人机制造材料的市场分析......
          </div>
        </div>
      </div>
      <div class="item">
        <div class="pdf ppt">PPT</div>
        <div class="right">
          <div class="title">
            《预见2024:《2024年中国工业无人机行业全景图谱》》
          </div>
          <div class="content">
            本文提供了中国工业无人机行业的全面分析，包括市场规模、竞争格局和发展前景等。文中提到，工业无人机在多个领域有着广泛的应用，如林植保、巡、测绘与地理信息、安防监控物流运输..
          </div>
        </div>
      </div>
      <div class="item">
        <div class="pdf txt">TXT</div>
        <div class="right">
          <div class="title">《基于SCI论文的无人机领域技术发展态势分析》</div>
          <div class="content">
            本文基于SCI数据库中的科技论文，分析了全球无人机技术发展的现状和趋势，研究结果显示，人工智能在无人机领域的应用、无人机系统的关键技术，以及提升无人机载荷和续航能力是技术发展的重点方向。文章为中国无人机技术的研究和发展提供了参考
          </div>
        </div>
      </div>
    </el-card>
    <el-card style="border-radius: 10px; margin: 20px 0">
      <div class="one">
        <span class="start">1.[报告生成] </span
        >请帮我写一篇有关当前无人机领域各行各业的应用情况与市场数据的报告
      </div>
      <div class="item">
        <div class="pdf">PDF</div>
        <div class="right">
          <div class="title">《2023年中国无人机产业链上中下游市场分析》</div>
          <div class="content">
            本文提供了中国工业无人机行业的全面分析，包括市场规模、竞争格局和发展前景等。文中提到，工业无人机在多个领域有着广泛的应用，如林植保、巡、测绘与地理信息、安防监控物流运输
          </div>
        </div>
      </div>
      <div class="item">
        <div class="pdf word">WORD</div>
        <div class="right">
          <div class="title">《2024年中国无人机行业市场前景预测研究报告》</div>
          <div class="content">
            无人机行业近年来发展迅速，市场规模持续扩大，应用领域包括农业植保、物流配送、空中摄影等，行业朝智能化、平台化方向迈进。技术创新推动垂直起降固定翼、大载重无人机等研发，但也
          </div>
        </div>
      </div>
      <div class="item">
        <div class="pdf ppt">PPT</div>
        <div class="right">
          <div class="title">《基于SCI论文的无人机领域技术发展态势分析》</div>
          <div class="content">
            本文基于SCI数据库中的科技论文，分析了全球无人机技术发展的现状和趋势，研究结果显示，人工智能在无人机领域的应用、无人机系统的关键技术，以及提升无人机载荷和续航能力是技术发展的重点方向。文章为中国无人机技术的研究和发展提供了参考
          </div>
        </div>
      </div>
      <div class="item">
        <div class="pdf txt">TXT</div>
        <div class="right">
          <div class="title">《2023年中国无人机产业市场分析》</div>
          <div class="content">
            无人机行业快速发展，市场规模显著扩大，主要应用于农业、物流、摄影等领域，呈现智能化、平台化趋势。技术进步推动多种无人机研发，但安全性和法规合规仍是挑战。政策完善为行业发...
          </div>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import IconAdd from "@/assets/add.svg";
</script>

<style lang="scss" scoped>
.digao-container {
  height: 100%;
  width: 100%;
  position: relative;
  .one {
    font-weight: 500;
    font-size: large;
    margin-bottom: 20px;
  }
  .start {
    color: blue;
  }
  .item {
    display: flex;
    align-items: center;
    height: 100px;
    width: 100%;
    background-color: #eee;
    padding: 0 10px;
    border-radius: 10px;
    margin: 10px 0;
    .pdf {
      height: 90%;
      background-color: #eb4e4e;
      writing-mode: vertical-rl;
      text-orientation: upright;
      text-align: center;
      letter-spacing: 3px;
      color: white;
      border-radius: 5px;
    }
    .word {
      background: #273075;
    }
    .ppt {
      background: #e46129;
    }
    .txt {
      background: #2995b8;
    }
    .right {
      margin-left: 10px;
      .title {
        font-weight: bolder;
        letter-spacing: 3px;
      }
      .content {
        margin-left: 5px;
        font-size: 15px;
        letter-spacing: 1px;
        color: #aaa;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
      }
    }
  }
}
</style>
