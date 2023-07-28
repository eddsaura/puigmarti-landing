import { component$ } from "@builder.io/qwik";
import { getDatesAndTimesToAddToCalendar } from "~/lib/helpers";

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

        const {
          startDateToCalendar,
          endDateToCalendar,
          simpleHourEndDate,
          simpleHourStartDate,
        } = getDatesAndTimesToAddToCalendar(startDate);

        return (
          <div
            key="title"
            class="py-6 px-4 border border-black border-opacity-10 rounded-lg group hover:bg-puxi-primary-800 hover:bg-opacity-5 transition-all"
          >
            <div class="flex gap-x-4 mb-6 items-center min-h-[54px]">
              <p class="text-xl text-white bg-puxi-primary-800 py-4 px-4 rounded-2xl font-bold  ">
                {simpleHourStartDate}
              </p>
              <h3 class="text-2xl font-bold font-body">{title}</h3>
            </div>

            {item.description && <p class="text-xl mb-6">{item.description}</p>}

            <h4 class="font-body text-xl font-normal mb-4">
              Afegir al calendari
            </h4>

            <div class="h-[80px]">
              <add-to-calendar-button
                name={title}
                options="'Apple','Google'"
                location="Puigmarti 23, 08012 Barcelona, Spain"
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
