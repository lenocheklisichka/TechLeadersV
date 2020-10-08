export type VisitType = {
  id: {
    number: string,
    url: string
  },
  dateAndTime: {
    formatedDate: string,
    formatedTime: string,
    originalDate: Date,
  },
  clinic: {
    name: string,
    url: string,
  },
  doctor: string,
}

