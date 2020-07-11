import useSwr from 'swr'
import api from '../service/api'

export function useFetch<Data = any, Error = any>(url: string){
  const { data, error, mutate } = useSwr<Data, Error>(url, async url => {
    const response = await api.get(url)
    // console.log('useFetch ', response.data)
    return response.data
  })

  //console.log('useFetch', data)
  return { data, error, mutate }
}