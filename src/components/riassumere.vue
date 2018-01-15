<template>
  <div v-if="metadata">
    <a :href="url">{{metadata.title}}</a>
  </div>
  <p v-else>wait...</p>
</template>

<script>
import riassumere from 'riassumere'

export default {
  props: {
    url: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      metadata: null
    }
  },
  async mounted () {
    this.metadata = await riassumere(this.url)
  }
}
</script>
