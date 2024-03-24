import { AxiosResponse } from 'axios'

import axios from 'libs/utils/axios'

import { TCoursesGetResponse } from 'modules/course'

export async function getCourses() {
  try {
    const URL = `/courses.json`

    const { data }: AxiosResponse<TCoursesGetResponse> = await axios.get(URL)

    return data
  } catch (error) {
    console.error(error)
  }
}
