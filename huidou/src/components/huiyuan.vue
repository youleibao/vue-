<template>
  <div class="huiyuan">
    
    <load v-if="$root.isLoginOrRegist"></load>
	<enroll v-else></enroll>
	<masking v-show='$root.maskingxian'></masking>
  </div>
</template>

<script>
	

import load from './load'
import enroll from './enroll'
import masking from './masking'
export default {
  name: 'huiyuan',
  data () {
    return {
      
    }
  },
  components:{
	     
//      leader2,
        load,
        enroll,
        masking,
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
