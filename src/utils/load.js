import api from '../service/api'



export async function loadProfiles(){
 
  const {data} = await api.get('profiles')
  localStorage.setItem('profiles', JSON.stringify(data))
  
}

export async function loadCourses(){
  const {data} = await api.get('courses')
  localStorage.setItem('courses', JSON.stringify(data))
}

