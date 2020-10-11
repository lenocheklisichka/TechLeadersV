

type EducationItem = {  
    organizationName: string,
    programmName: string,         
    graduationDate: string,
    studyDuration: string,
}

type WorkExperienceItem = {
  organizationName: string,
  from: string,
  to: string,
  position: string,
}

type ScheduleItem = {
  organizationId: number,
  organizationName: string,
  workingTime: [
    {day: string, time: string},
    {day: string, time: string},
    {day: string, time: string,},
  ],   
}

type ReviewsItem = {
  id: number,
  name: string,
  avatar: string,
  raiting: number,
  countOfreviews: number,
  countOfLikes: number,
  textReview: string,
}


export type DoctorType = {
  
  id: number,
  firstName: string,
  middleName: string,
  lastName: string,
  age: number,
  photo: string,
  about: {
    specialization: string,
    category: string,
    degree?: string,
    education: EducationItem[],
    workExperience: WorkExperienceItem[],
    gallery: String[],
    schedule: ScheduleItem[],
  },

  contacts: {
    phone: string,
    skype: string,
    email: string,
  },

  reviews: ReviewsItem[]
}