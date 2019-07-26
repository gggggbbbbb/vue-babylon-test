<template>
<div style="height: 500px">
    <Scene style="height: 500px">
            <Camera type="arcRotate" :radius="200" :target="[0,0,0]" :beta="Math.PI /2"></Camera>
            <HemisphericLight></HemisphericLight>
            <Asset src="/static/models/test.stl"  :position="[0, 0, 0]"></Asset>
        </Scene>
  </div>
</template> 

<script>
export default {
  name: 'Viewer',

}
</script>
