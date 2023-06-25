<template>
	<div class="interface">
    <button class="button" :class="{ playing : paused }" @click="togglePlayback">
      <svg aria-hidden="true" class="button__svg" fill="#fff" xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24">
        <g class="pause">
          <path d="M10,17a1,1,0,0,1-1-1V8a1,1,0,0,1,2,0v8A1,1,0,0,1,10,17Z" />
          <path d="M14,17a1,1,0,0,1-1-1V8a1,1,0,0,1,2,0v8A1,1,0,0,1,14,17Z" />
        </g>
        <path class="play" d="M16.57,11.32,10.31,7.15a.8.8,0,0,0-1.25.68v8.34a.81.81,0,0,0,1.25.68l6.26-4.17A.81.81,0,0,0,16.57,11.32Z" />
      </svg>
      <span class="button__text">pause</span>
    </button>
    <div class="timeline" ref="timeline">
      <div class="times">
        <div v-for="(ms, index) in labelItems" :key="index">
          <span>{{ index }}</span>
        </div>
      </div>
      <div class="scrubber" ref="scrubber"></div>
    </div>
  </div>
</template>


<script>
import { gsap } from "gsap";
import Draggable from "vuedraggable";

gsap.registerPlugin(Draggable);

export default {
  name: 'Timeline',
  data () {
    return {
      paused: false,
      labelItems: 0,
      endX: 500,
    }
  },
  components: {
  },
  mounted () {
    this.setScrubber = gsap.quickSetter(this.$refs.scrubber, 'x', 'px')

    this.timeline = gsap.timeline()

    this.createScrubber()
    this.renderTimeline()

    this.$nextTick(() => {
      this.onResize()
      this.timeline.eventCallback('onUpdate', this.updateScrubber)
    })
  },
  methods: {
    renderTimeline () {
      this.endX = this.scrubber.maxX - 56

      const tl = this.timeline

      tl.progress(0)
        .clear(true)
        .to('.not-existed-dom', {
          ease: 'none',
          duration: 20, // 20s动画时间
          x: this.endX,
        }, 0)

      const time = tl.duration()
      this.labelItems = Math.floor((2 * 60 * 60) / (15 * 60)) + 1 // tick label个数，2小时，每隔15一个label
    },
    createScrubber () {
      this.scrubber = new Draggable(this.$refs.scrubber, {
        type: 'x',
        cursor: 'pointer',
        bounds: this.$refs.timeline,
        zIndexBoost: false,
        onPress: () => {
          this.timeline.pause()
          this.paused = true
        },
        onDrag: () => {
          const progress = this.normalize(this.scrubber.x)
          this.timeline.progress(progress)
        }
      })
    },
    togglePlayback () {
      if (this.timeline.progress() > 0.98) {
        this.paused = false
        return this.timeline.restart()
      }
      this.paused = !this.paused
      this.timeline.paused(this.paused)
    },
    onResize () {
      this.scrubber.update(true)
      this.normalize = gsap.utils.normalize(this.scrubber.minX, this.scrubber.maxX)
      this.interpolate = gsap.utils.interpolate(this.scrubber.minX, this.scrubber.maxX)
      this.updateScrubber()
      this.renderTimeline()
    },
    updateScrubber () {
      const x = this.interpolate(this.timeline.progress())
      this.setScrubber(x)
    }
  }
}
</script>

<style scoped>
.interface {
  /* // opacity:0; */
	position: relative;
	padding: 3rem 2rem 3rem;
	background-color: #262626;
	border-radius: 10px;
	width: clamp(300px, 80vw, 900px);
	box-shadow: 0 19px 28px rgba(0, 0, 0, 0.05), 0 15px 8px rgba(0, 0, 0, 0.04);
}
.timeline {
  position: relative;
}
.timeline > * + * {
	margin-top: 0.5rem;
}

.timeline__item {
	width: 2px;
	margin: 0.75rem;
	border-radius: 999px;
	box-sizing: border-box;
  text-align: center;
  height: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.timeline__item.purple span {
  display: none;
  font-size: 0.85rem
}

.scrubber {
	position: absolute;
	bottom: 0rem;
	left: 0;
  width: 20px;
	height: 20px;
	border-radius: 99px;
	background-color:#e55555;
  z-index: 1;
}

.button__svg {
	width: 2.5rem;
	height: 2.5rem;
	margin-top: 2px;
  pointer-events: none;
}

.button {
  position: absolute;
	font-size: 0;
	border: none;
	outline: none;
	background-color: transparent;
  top: 10px;
  left: 1rem;
  cursor: pointer;
}

.button.playing .pause {
	opacity: 1;
}
.button.playing .play {
	opacity: 0;
}


.button:not(.playing) .pause {
	opacity: 0;
}
.button:not(.playing) .play {
	opacity: 1;
}


.times {
	width: calc(100% - 20px);
	display: flex;
	flex-direction: row;
	justify-content: space-between;
  z-index: 999;
  margin-left: 10px;
}

.times > * {
	position: relative;
}

.times div {
	margin-top: 1rem;
	width: 0.5px;
	height: 5px;
	background-color: #fff;
  opacity: 0.7;
	position: relative;
}

.times span {
  display: none;
  font-size: var(--number-size);
}

.times div:nth-child(5n + 1) {
	height: 10px;
	background-color: #fff;
  opacity: 1;
}

.times div:nth-child(5n + 1) span {
  display: block;
	font-family: "nunito", sans-serif, Arial;
	color: #fff;
	text-align: center;
	position: absolute;
	width: auto;
	height: 1rem;
	top: 1rem;
	left: 50%;
  transform: translateX(-50%);
  z-index:2;
}

.times .label {
  height: 10px;
	background-color: #00000090;
}

.times .label span {
  position: absolute;
	width: 1rem;
	height: 1rem;
	top: 1rem;
	left: 0%;
	transform: translateX(-0.5rem);
  z-index:2;
}
</style>