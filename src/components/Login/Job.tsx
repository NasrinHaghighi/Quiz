
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import {  useAppDispatch, useAppSelector } from '../../app/hooks'
import {loginHandel} from '../../features/LoginSlice'



function Job() {
  const dispatch=useAppDispatch()
    const modeState=useAppSelector(state=>state.mode.mode)
    let mode=modeState? 'dark': 'light'

    const loginInfo=useAppSelector(state=>state.login)

    const loginFunc=(e:any)=>{
      let namefilde=e.target.name
      let value=e.target.value
  dispatch(loginHandel({namefilde, value}))
  }
  
    return (
      <div>
    <Typography variant="h4" sx={{m:2, p:3}}>Job</Typography>
  
    <Typography variant="h6" align='left'> Job</Typography>
  <TextField    required    id="outlined-required" fullWidth name='job' value={loginInfo.login.job} onChange={loginFunc}
          sx={{ border: '1px solid',
            bgcolor: '#fff',
            color: (mode === 'dark' ? '#fff' : '#000'),
          borderColor: (mode === 'dark' ? '#fff' : 'Gray'), borderRadius:'10px', marginBottom:'20px'}}/>
  
  </div>
    )  
}

export default Job
