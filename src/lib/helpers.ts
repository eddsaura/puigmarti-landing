

export const getDatesAndTimesToAddToCalendar = (date: Date) => {
  const startDate = new Date(date);
  const plusOneHour = new Date(date);
  plusOneHour.setHours(plusOneHour.getHours() + 1);

  return {
    startDateToCalendar: date.toISOString().split("T")[0],
    endDateToCalendar: plusOneHour.toISOString().split("T")[0],
    simpleHourStartDate: startDate.getUTCHours().toString().padStart(2, "0") + ":00",
    simpleHourEndDate: plusOneHour.getUTCHours().toString().padStart(2, "0") + ":00",
    }
}