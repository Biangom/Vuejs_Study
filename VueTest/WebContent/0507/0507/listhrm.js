//index04.html과 연결

var listhrm = Vue.component('listhrm',{
    template: '#listhrmtemplate',	//listhrmtemplate를 찾아서  listhrm인 태그 애 안에 넣어라
    data(){
        return {
          info: [],
          loading: true,
          errored: false 
        }
      },
      filters: {
    	   salarydecimal (value) {
          return value.toFixed(2)
        }
      }, 
      mounted () {
        axios
//           .get('http://localhost:8197/ssafyvue/api/findAllEmployees')
          .get('./emp.json')
          .then(response => (this.info = response.data))
          .catch(error => {
            console.log(error)
            this.errored = true
          })
          .finally(() => this.loading = false)
      }
});

new Vue({
  el: '#app'
})