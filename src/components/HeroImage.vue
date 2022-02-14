<template>
  <three>
    <renderer :size="{ w: 600, h: 400 }">
      <scene>
        <camera :position="{ z: 15 }"></camera>
        <mesh :obj="mesh" :position="{ y: -200 }"></mesh>
        <animation :fn="animate" :speed="3"></animation>
      </scene>
    </renderer>
    <movement-system>
      <mass-object
        :rv0="{ x: 2, y: 2 }"
        :v0="{ x: 10 }"
        :f="{ x: -3, y: -2 }"
        :m="1"
      >
        <cube texture="cobblestone" :size="1"></cube>
      </mass-object>
      <mass-object
        :rv0="{ x: 2, z: 2 }"
        :v0="{ z: 20 }"
        :f="{ y: -1, z: -8 }"
        :m="1.2"
      >
        <cube texture="diamond" :size="1.2"></cube>
      </mass-object>
    </movement-system>
    <oimo-world :options="{ gravity: [0, -9.8, 0] }">
      <space-system :m-scale="10 ** 4">
        <space-object v-for="t in textures" :key="t">
          <oimo-body :options="{ move: true, density: 1 }">
            <cube :texture="t" :size="1"></cube>
          </oimo-body>
        </space-object>
      </space-system>
    </oimo-world>
  </three>
</template>
<script>
export default {};
</script>
<style scoped></style>
