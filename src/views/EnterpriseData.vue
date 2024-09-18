<script lang="ts" setup>
import { ref } from "vue";
const filterSelected = ref([]);

const filtersList = ref([
  {
    title: "行业",
    options: [],
    disabled: true,
    isExpand: false,
  },
  {
    title: "地区",
    options: [],
    disabled: true,
    isExpand: false,
  },
  {
    title: "成立时间",
    options: [
      {
        label: "2024年",
        value: "2024",
      },
      {
        label: "2023年",
        value: "2023",
      },
      {
        label: "2022年",
        value: "2022",
      },
      {
        label: "2021年",
        value: "2021",
      },
      {
        label: "2020年",
        value: "2020",
      },
    ],
    disabled: false,
    isExpand: false,
  },
  {
    title: "中标金额",
    options: [],
    disabled: true,
    isExpand: false,
  },
  {
    title: "投标单位",
    options: [],
    disabled: true,
    isExpand: false,
  },
  {
    title: "竞标公司",
    options: [],
    disabled: true,
    isExpand: false,
  },
  {
    title: "注册资本",
    options: [],
    disabled: true,
    isExpand: false,
  },
  {
    title: "注册地",
    options: [],
    disabled: true,
    isExpand: false,
  },
  {
    title: "企业称号",
    options: [],
    disabled: true,
    isExpand: false,
  },
  {
    title: "发明专利",
    options: [],
    disabled: true,
    isExpand: false,
  },
  {
    title: "融资轮次",
    options: [],
    disabled: true,
    isExpand: false,
  },
  {
    title: "最近融资时间",
    options: [],
    disabled: true,
    isExpand: false,
  },
]);
</script>

<template>
  <div class="enterprise-data">
    <Filters v-model="filterSelected" :filtersList="filtersList" />
  </div>
</template>

<style lang="scss" scoped>
.enterprise-data {
  width: 100%;
  height: 100%;
  background-color: #fff;
}
</style>
