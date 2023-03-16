import { onBeforeUnmount } from 'vue'

export interface ScrollChartDataOptions {
  showCount: number
  scrollCount: number
  interval?: number
  seamless?: boolean
  chartData: unknown[]
}

function useScrollEChartData(options: ScrollChartDataOptions, cb: (chartData: unknown[]) => void) {
  let timer: number | null = null
  let lastIdx = 0
  let curChartData: unknown[] = []

  const startScroll = () => {
    if (options.showCount >= options.chartData.length) {
      curChartData = options.chartData
      cb(curChartData)
    } else {
      if (!curChartData?.length) {
        for (let i = 0; i < options.showCount; i++) {
          curChartData.push(options.chartData[i])
        }
        lastIdx = options.showCount
        cb(curChartData)
      }
      options.scrollCount > 0 && startTimer()
    }
  }

  const startTimer = () => {
    timer = window.setInterval(() => {
      if (!timer) return

      curChartData.splice(0, options.scrollCount)
      for (let i = lastIdx;
        i < lastIdx + options.scrollCount && i < options.chartData.length && curChartData.length < options.showCount;
        i++
      ) {
        curChartData.push(options.chartData[i])
      }
      lastIdx = lastIdx + Math.min(options.scrollCount, options.showCount)

      if (curChartData.length < options.showCount) {
        if (options.seamless === false) {
          lastIdx = 0
        } else {
          lastIdx = options.showCount - curChartData.length
          for (let i = 0; i < lastIdx; i++) {
            curChartData.push(options.chartData[i])
          }
        }
      }
      cb(curChartData)
    }, options.interval ?? 10000)
  }

  const stopScroll = () => {
    timer && window.clearInterval(timer)
    timer = null
  }

  onBeforeUnmount(() => {
    stopScroll()
    lastIdx = 0
    curChartData = []
  })

  return {
    startScroll,
    stopScroll,
  }
}

export { useScrollEChartData }
