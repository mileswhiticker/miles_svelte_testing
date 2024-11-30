<script>
  import { T, useTask } from '@threlte/core'
  //import { interactivity } from '@threlte/extras'

  let rotation = 0

  // useTask is relying on a context provided
  // by <Canvas>. Because we are definitely *inside*
  // <Canvas>, we can safely use it.
  useTask((delta) => {
    rotation += delta
  })

  // This file is also typically the place to
  // inject plugins
  //interactivity()
</script>

<T.Mesh rotation.y={rotation}>
  <T.BoxGeometry />
  <T.MeshBasicMaterial color="red" />
</T.Mesh>
