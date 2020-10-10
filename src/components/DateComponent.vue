<template>
<div id="all" class="w-full max-w-sm">
  <form align="right" id="form"
    class="bg-white shadow-md rounded px-8 pt-6 pb-8"
    @submit.prevent>
    <label
      class="block text-gray-700 text-sm font-bold mb-2"
      for="date">
         :עליך לבחור תאריכים להשכרה
    </label>
    <div id="content" class="flex w-full">
            <button align="center" id="but"
        type="button"
        class="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-r"
        @click="date = null" >
        נקה
        </button>

      <v-date-picker
        mode="range"
        v-model="date"
        color="purple"
        locale="he"
        :min-date='new Date()'
        class="flex-grow">
        <!--Custom Input Slot-->
        <input

          id="date"
          slot-scope="{ inputProps, inputEvents, isDragging }"
          :class="[`shadow appearance-none border rounded-l w-full py-2 px-3 ${ isDragging ? 'text-gray-400' : 'text-gray-700' }`, { 'border-red-600': errorMessage }]"
          v-bind="inputProps"
          v-on="inputEvents">
      </v-date-picker>
      <!--Clear Button-->


    </div>
    <p id="err" class="text-red-600 text-xs italic mt-1" v-if="errorMessage">
      {{ errorMessage }}
    </p>
    <p id="err" class="text-blue-500 text-xs font-bold mt-1" v-else>
     הפריטים המוצגים הם אלו שזמינים בתאריכים שבחרת
    </p>
  </form>
</div>
</template>

<script>
export default {
  data() {
    return {
      date: null,
    };
  },
  computed: {
    errorMessage() {
      if (!this.date) return 'עליך להכניס תאריך על מנת לראות אילו פריטים זמינים';
      return '';
    },
  },
};
</script>

<style scoped>
  #date{
     font-size: 20px;
   
    width: 370px;
    margin-left: 100px;
    margin-right: 100px;
    margin-top: 10px;
    margin-bottom: 10px;
  
  }
  #but{
    font-size: 15px;
    background-color: #571845;
    
  }
  #err{
    font-size: 15px;
     padding-left: 10px;
    padding-right: 10px;
    padding-top: 10px;
    padding-bottom: 10px;
  }
  #content{
    width: 700px;
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 10px;
    padding-bottom: 10px;
    
    align-items: center;
  }
  #all{
    width: 700px;
    background-color: chocolate;
  }
</style>