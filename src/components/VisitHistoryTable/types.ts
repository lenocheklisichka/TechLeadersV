export type VisitType = {
  id: number,
  dateAndTime?: string,
  clinic?: {
    id?: number
    name?: string,
  },
  doctor: {
    id?: number,
    firstName?: string,
    middleName?: string,
    lastName?: string,
  },
}

