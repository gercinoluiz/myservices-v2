import axios from 'axios'
import enviroment from './enviroment'



//'http://192.168.0.210:3333'
//'https://34.67.173.27/'
//'https://api.splazer.gercinoluiz.com.br/
//http://dappseme.prefeitura.sp.gov.br/

const api = axios.create({
     baseURL:enviroment.apiUrl ,
     // headers: {
     //      'Cache-Control': 'no-cache',
     //      Pragma: 'no-cache',
     //      Expires: '0',
     // },
     // params: {
     //      t: new Date().getTime(),
     // },  < == Deixo isso ?
})

export default api
