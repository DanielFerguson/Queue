<template>
  <div class="antialiased w-screen min-h-screen bg-gray-900 font-bold">
    <div class="max-w-sm mx-auto flex flex-col justify-center items-center">
      <h1 class="text-gray-100 text-5xl mt-16">Queue</h1>
      
      <!-- Input -->
      <form class="bg-gray-700 rounded shadow flex text-white my-8 w-full" @submit.prevent="addItem()">
        <input v-model="input" type="text" placeholder="Add an item" class="flex-grow px-4 py-2 bg-transparent focus:outline-none appearance-none">
      </form>
      
      <!-- List -->
      <div class="text-gray-100 w-full">
        <div v-if="items.length > 0" class="flex flex-col gap-2">
          <div v-for="(item, index) in items" :key="item" class="flex items-center justify-between border rounded px-4 py-2 w-full">
            <div>{{ item }}</div>
            <font-awesome-icon @click="removeItem(index)" icon="times" class="cursor-pointer"/>
          </div>        
        </div>
        <div v-else class="text-center">
          Add some items to kickstart the day!
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  asyncData ({ req }) {
    return {
      name: process.static ? 'static' : (process.server ? 'server' : 'client'),
    }
  },
  
  data() {
    return {
      input: '',
      items: [
        'one',
        'two'
      ]
    }
  },
  
  methods: {
    addItem() {
      this.items.push(this.input);
      this.input = '';
    },
    
    removeItem(index) {
      this.items.splice(index, 1);
    }
  }
}
</script>

<style scoped>
.container {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: white;
  color: black;
  font-family: "Lucida Console", Monaco, monospace;
  padding-top: 100px;
  text-align: center;
}
a {
  color: black;
}
</style>
