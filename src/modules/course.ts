export interface ICourse {
  name: string
  id: string
  image: string
  bgColor: string
  tags: string[]
}

export type TCoursesGetResponse = ICourse[]
export type TCourses = TCoursesGetResponse