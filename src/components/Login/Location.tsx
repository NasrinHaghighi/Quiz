import React,{useState, useEffect} from 'react'
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import {  useAppDispatch, useAppSelector } from '../../app/hooks'
import {loginHandel} from '../../features/LoginSlice'
import { Country, State, City }  from 'country-state-city';

// Import Interfaces`
import { ICountry, IState, ICity } from 'country-state-city'

interface Country{
  iso2:string,
  iso3:string,
  country:string,
  cities:string[]
}
interface Citeis{
 city:string[]
}


function Location() {
  const dispatch=useAppDispatch()
    const modeState=useAppSelector(state=>state.mode.mode)
  let mode=modeState? 'dark': 'light'

  const loginInfo=useAppSelector(state=>state.login)

  const loginFunc=(e:any)=>{
    let namefilde=e.target.name
    let value=e.target.value
dispatch(loginHandel({namefilde, value}))
}
//COUNTRY LIST****
const [countries, setCountries] = useState<any>([])
const [selectedCountry, setSelectedCountry]=useState<string>('')
const [country, setCountry]=useState<Country>()
//list of country
useEffect(() => {
  const url = 'https://countriesnow.space/api/v0.1/countries';

  const fetchData = async () => {
    try {
      const response = await fetch(url);
      const json = await response.json();
      setCountries(json.data);
    } catch (error) {
      console.log("error", error);
    }
  };

  fetchData();
}, []);


//set selected country depend of user
const handelCountry=(e:any)=>{
  setSelectedCountry(e.target.value)
}

useEffect(()=>{
const t=countries.find((c:Country)=>{
  return c.country ===selectedCountry
})
    
setCountry(t)
 
},[selectedCountry])

console.log(country&& country.cities)

//fetch all state of counter when user select a country

  return (
    <div>
  <Typography variant="h4" sx={{m:2, p:3}}>Location</Typography>


<Typography variant="h6" align='left'> Country</Typography>
<select name="country"  value={loginInfo.login.country}
style={{width:'100%', height:'50px', marginBottom:'50px'}} onChange={(e)=>{handelCountry(e); loginFunc(e)}}>
  {countries.map((c:any, i:number)=>{
    return <option style={{width:'80%'}} key={i}>{c.country}</option>
  })}
</select>



<Typography variant="h6" align='left'> city</Typography>
<select name="city"  value={loginInfo.login.city}
 style={{width:'100%', height:'50px', marginBottom:'50px'}} onChange={loginFunc}>
{country?.cities.map((c:any, i:number)=>{
    return <option style={{width:'80%'}} key={i}>{c}</option>
  })}
</select>

   </div>

  )
}

export default Location



{/* <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={selectedCountry}
    name="country"
    onChange={handelCountry}
    label='Country'
  fullWidth
  >
        <MenuItem disabled value="">  <em>Placeholder</em>    </MenuItem>
        {countries.map((c:any) => (
            <MenuItem
              key={c}
              value={c}
              //style={getStyles(name, personName, theme)}
            >
              {c.name}
            </MenuItem>
              ))}
  </Select> */}