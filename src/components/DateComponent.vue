<template>
  <div id="app">
  <v-date-picker
     mode='range'
    color="purple"
    v-model='selectedDate'
    locale="he" 
    is-double-paned
    :min-date='new Date()'
    is-inline>
  </v-date-picker>
   {{selectedDate}}:התחלה <br>
   {{selectedDate}}:סיום  <br>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      selectedDate: null,
      themeStyles: {
        wrapper: {
          border: '1',
        },
        header: {
          color: '#fafafa',
          backgroundColor: '#f142f4',
          borderColor: '#404c59',
          borderWidth: '1px 1px 0 1px',
        },
        headerVerticalDivider: {
          borderLeft: '1px solid #404c59',
        },
        weekdays: {
          color: '#f142f4',
          backgroundColor: '#f142f4',
          borderColor: '#ff0098',
          borderWidth: '0 1px',
          padding: '5px 0 10px 0',
        },
        weekdaysVerticalDivider: {
          borderLeft: '1px solid #404c59',
        },
        weeks: {
          border: '1px solid #dadada',
        },
      },
    };
  }
}
</script>