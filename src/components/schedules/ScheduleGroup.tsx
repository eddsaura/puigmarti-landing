import { component$ } from "@builder.io/qwik";

type Schedule = {
  title: string;
  description?: string;
  startDate: Date;
};

interface Props {
  schedule: Schedule[];
}

export const ScheduleGroup = component$(({ schedule }: Props) => {
  return (
    <div class="grid lg:grid-cols-2 gap-8 ">
      {schedule.map((item) => {
        const { title, startDate } = item;

        const startDateToCalendar = startDate.toISOString();

        const plusOneHour = new Date(startDate);
        plusOneHour.setHours(plusOneHour.getHours() + 1);
        const endDateToCalendar = plusOneHour.toISOString();

        const simpleHourStartDate = startDate.getUTCHours() + ":00";
        const simpleHourEndDate = plusOneHour.getUTCHours() + ":00";

        return (
          <div
            key="title"
            class="py-6 px-4 border border-black border-opacity-10 rounded-lg group hover:bg-puxi-primary-800 hover:bg-opacity-5 transition-all"
          >
            <div class="flex gap-x-4 mb-6 items-center h-[54px]">
              <p class="text-xl text-white bg-puxi-primary-800 py-4 px-4 rounded-2xl font-bold  ">
                {simpleHourStartDate}
              </p>
              <p class="text-2xl font-bold">{title}</p>
            </div>

            <h4 class="font-body text-xl font-normal mb-4">Add to calendar</h4>

            <div class="h-[80px]">
              <add-to-calendar-button
                name={title}
                options="'Apple','Google'"
                location="Puigmarti, 08012 Barcelona, Spain"
                startDate={startDateToCalendar}
                endDate={endDateToCalendar}
                startTime={simpleHourStartDate}
                endTime={simpleHourEndDate}
                timeZone="Europe/Madrid"
                buttonStyle="flat"
                hideIconList
                buttonsList
                hideIconModal
                hideBackground
                hideTextLabelButton
                hideCheckmark
              ></add-to-calendar-button>
            </div>
          </div>
        );
      })}
    </div>
  );
});
