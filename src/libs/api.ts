import axios from 'axios'

export const api = axios.create({
  baseURL:
    'https://randomuser.me/api/?results=10&seed=alfred&nat=br&inc=picture,name,email,gender,dob,phone,nat,id,location&',
})
