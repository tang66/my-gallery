import {shallowReactive} from 'vue';
import { MouseWheelZoom, EchartsFirst, MirrorButton,EchartsSecond,EchartsThird,
  EchartsFourth,EchartsFifth,EchartsSixth } from '../../public/source-components'



function useSetDom () {
  const dom = shallowReactive({
    MouseWheelZoom,
    EchartsFirst,
    MirrorButton,
    EchartsSecond,
    EchartsThird,
    EchartsFourth,
    EchartsFifth,
    EchartsSixth
  })
  
  return {
    dom
  }
}

export { useSetDom }