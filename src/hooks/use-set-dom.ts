import {shallowReactive} from 'vue';
import { MouseWheelZoom, EchartsFirst, MirrorButton,EchartsSecond,EchartsThird,
  EchartsFourth,EchartsFifth,EchartsSixth,TimeLineFirst,BackgroundFirst,BackgroundSecond,ButtonFirst,ImageFirst} from '../../public/source-components'



function useSetDom () {
  const dom = shallowReactive({
    MouseWheelZoom,
    EchartsFirst,
    MirrorButton,
    EchartsSecond,
    EchartsThird,
    EchartsFourth,
    EchartsFifth,
    EchartsSixth,
    TimeLineFirst,
    BackgroundFirst,
    BackgroundSecond,
    ButtonFirst,
    ImageFirst
  })
  
  return {
    dom
  }
}

export { useSetDom }