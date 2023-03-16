
import { onBeforeUnmount, onMounted, ref, shallowRef } from 'vue'

import type { EChartsType } from 'echarts'
import * as echarts from 'echarts'

function useEChart() {
  const chartObj = shallowRef<EChartsType>()
  const chartContainer = ref<HTMLElement>()

  const setChartOption = (chartOption: any) => {
    chartObj.value?.setOption(chartOption)
  }

  const resizeChart = () => {
    chartObj.value?.resize()
  }

  const clearChart = () => {
    chartObj.value?.clear()
  }

  const getChartRect = () => {
    return {
      width: chartObj.value?.getWidth(),
      height: chartObj.value?.getHeight(),
    }
  }

  const addChartEvent = (name: string, callback: any) => {
    chartObj.value?.on(name, callback)
    return () => {
      chartObj.value?.off(name, callback)
    }
  }

  const dispatchAction = (payload: echarts.Payload) => {
    chartObj.value?.dispatchAction(payload)
  }

  onMounted(() => {
    chartObj.value = echarts.init(chartContainer.value as HTMLElement)// 初始化一次
    window.addEventListener('resize', resizeChart)
  })
  onBeforeUnmount(() => {
    window.removeEventListener('resize', resizeChart)
  })

  return {
    setChartOption,
    resizeChart,
    clearChart,
    getChartRect,
    addChartEvent,
    chartContainer,
    dispatchAction,
  }
}

export { useEChart }
