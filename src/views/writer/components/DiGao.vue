<template>
  <div class="digao-container">
    <label for="digaoInput">
      <div
        style="
          position: fixed;
          bottom: 50px;
          left: 220px;
          height: 75px;
          width: 75px;
          border-radius: 10px;
          background-color: #fff;
          box-shadow: -3px 3px 10px #acece8, 3px -3px 10px #5c66b2;
          display: flex;
          cursor: pointer;
        "
      >
        <img style="transform: scale(0.7)" :src="IconAdd" />
      </div>
    </label>

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
    <el-card
      :class="{ active: selectArticle === 1 }"
      @click="handle1"
      style="border-radius: 10px; margin: 20px 10px"
    >
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
    <el-card
      :class="{ active: selectArticle === 2 }"
      @click="handle2"
      style="border-radius: 10px; margin: 20px 10px"
    >
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
    <input name="digaoInput" id="digaoInput" hidden type="file" />
  </div>
</template>

<script setup lang="ts">
import IconAdd from "@/assets/add.svg";
import { useKimi } from "@/hooks/kimi";
const { filesAnsly, selectArticle } = useKimi();

const handle1 = () => {
  selectArticle.value = 1;
  filesAnsly.value = `# 无人机行业前景分析报告

## 行业现状

无人机行业在中国经历了快速的发展阶段，市场规模显著增长。根据《中国上市及新三板挂牌公司低空经济发展报告（2024）》显示，无人机相关公司的营业收入从2019年的21,076.03万元增长至2023年的30,176.34万元，反映出市场规模的快速扩大。无人机的主要应用领域包括农业植保、物流配送、空中摄影、环境监测等，其中无人机系统收入占比最高，达到62.80%。关键参与者包括无人机研发制造和飞行服务公司，他们坚持“技术创新、航空品质、服务至上”的经营理念，不断推进工业无人机的发展。

## 市场趋势

市场趋势方面，无人机行业正朝着“智能化、平台化、工具化”的2.0时代发展。技术创新不断推动行业进步，市场需求的变化也促使无人机应用向更多领域拓展，如智慧城市管理、消费者娱乐等新兴应用场景。这些趋势不仅为无人机行业带来新的增长点，也对企业的产品和服务提出了更高要求。

## 技术发展

技术发展方面，无人机行业正积极推进垂直起降固定翼无人机、大载重无人机、无人值守系统、多旋翼无人机等产品的研发。这些新技术和研发方向将进一步提升无人机的性能和应用范围，同时也为行业带来新的挑战和机遇。

## 政策法规

政策法规对无人机行业的发展具有重要影响。随着低空经济的发展，相关的政策、法规和标准也在不断完善。这些政策不仅规范了无人机的生产和使用，也为行业的健康发展提供了指导和支持。

## 竞争格局

竞争格局方面，无人机行业的竞争日益激烈。主要企业通过技术创新、市场拓展和优化业务模式来实现业务规模的持续增长。企业之间的竞争策略和市场份额分析表明，技术创新和服务质量是企业获得竞争优势的关键。

## 机会与挑战

无人机行业面临的机会包括技术创新带来的新应用领域和市场需求的增长。同时，行业也面临挑战，如技术安全性、法规合规性以及市场竞争的加剧。企业需要在把握机遇的同时，积极应对这些挑战。

## 未来展望

未来，无人机行业预计将继续保持增长势头。随着技术的不断进步和市场需求的扩大，无人机将在更多领域得到应用。建议企业加大研发投入，优化产品和服务，同时关注政策变化，以适应市场和法规的要求。

### 参考文献

-   《中国上市及新三板挂牌公司低空经济发展报告（2024）》.pdf, 更新日期: 2024-11-17 05:32

本报告基于所提供的文献，对无人机行业的前景进行了全面的分析，旨在为行业参与者提供有价值的参考和建议。`;
};

const handle2 = () => {
  selectArticle.value = 2;
  filesAnsly.value = `# 当前无人机领域各行各业的应用情况与市场数据报告

## 无人机应用概览

无人机技术的发展和应用正在多个行业中迅速扩展，其多功能性和灵活性使其成为各行各业的重要工具。根据《中国上市及新三板挂牌公司低空经济发展报告（2024）》的数据，无人机产业的年复合增长率约达13.8%，全国无人机企业已超过1.5万家，UAV注册数也已超过100万架。这表明无人机在中国的应用正日益广泛，市场规模不断扩大。

## 农业应用

在农业领域，无人机主要用于植保、监测作物生长和土地测绘。它们能够高效地进行农药喷洒和作物健康监测，减少人力成本并提高作业效率。据报告，无人机在农业植保方面的应用尤为突出，无人机系统收入占比达到62.80%，显示出农业领域对无人机技术的高需求。

## 物流配送

物流行业是无人机应用的另一个重要领域。无人机能够提供快速、灵活的配送服务，尤其是在偏远地区和紧急情况下。随着电子商务的迅猛发展，无人机在快递和物流领域的应用前景广阔。报告中提到的无人机企业数量和注册数的增长，反映了物流行业对无人机技术的高度关注和应用潜力。

## 空中摄影与监测

无人机在空中摄影和监测方面的应用也非常广泛，包括地理信息系统（GIS）数据收集、环境监测和建筑检查等。这些应用利用无人机的高分辨率相机和传感器，提供精确的数据和图像，为城市规划和环境保护等领域提供支持。

## 应急救援

在应急救援领域，无人机因其快速响应和高机动性而受到重视。它们可以在灾害发生时迅速评估受灾情况，为救援行动提供关键信息。此外，无人机还可以用于搜索和救援任务，特别是在难以到达的地区。

## 市场数据

根据《中国上市及新三板挂牌公司低空经济发展报告（2024）》的数据，无人机产业的年复合增长率约达13.8%，显示出市场的快速增长。全国无人机企业已超过1.5万家，UAV注册数也已超过100万架，这些数据进一步证实了无人机在中国的广泛应用和市场潜力。

## 参考文献

-   《中国上市及新三板挂牌公司低空经济发展报告（2024）》.pdf, 更新日期: 2024-11-17 05:32

本报告基于所提供的文献，对无人机在各行各业的应用情况和市场数据进行了详细的分析，旨在为行业参与者和决策者提供有价值的参考和洞见。`;
};
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
.active {
  box-shadow: 3px -3px 5px #5c66b2, -3px 3px 5px #acece8, -1px -3px 5px #5c66b2,
    3px 3px 5px #acece8;
}
</style>
