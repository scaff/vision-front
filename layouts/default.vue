<template>
  <div>
    <Splitpanes>
      <Pane size="10" min-size="10"> Left pane </Pane>
      <Pane>
        <slot />
      </Pane>
      <Pane size="10" min-size="10"> Right pane </Pane>
    </Splitpanes>
  </div>
</template>

<script lang="ts" setup>
import { Splitpanes, Pane } from 'splitpanes'
import 'splitpanes/dist/splitpanes.css'
</script>

<style lang="scss">
.splitpanes__pane {
  padding: 20px;
  height: 100vh;
}
.splitpanes--vertical > .splitpanes__splitter {
  min-width: 1px;
  background: black;
}

.splitpanes--horizontal > .splitpanes__splitter {
  min-height: 1px;
  background: black;
}
</style>
