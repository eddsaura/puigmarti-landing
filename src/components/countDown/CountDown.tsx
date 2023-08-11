import { component$ } from "@builder.io/qwik";

export const CountDown = component$(() => {
  const fiestasDate = new Date("2023-08-15T08:00:00.020z");
  const timeToDate = fiestasDate.getTime() - Date.now();
  const daysToDate = Math.floor(timeToDate / (1000 * 60 * 60 * 24));
  const hoursToDate = Math.floor(((timeToDate / (1000 * 60 * 60)) % 24) - 1);

  return (
    <div
      class="absolute bg-white rounded-lg pt-8 pb-4 z-10 px-4 w-40 overflow-hidden 
              right-0 xl:right-[20%]
              top-[-60px] xl:top-[65px]
              transform rotate-[-1deg]
              shadow-lg
              hover:shadow-xl hover:rotate-[-4deg]
              transition-all"
    >
      <div class="bg-red-700 w-full absolute top-0 left-0 h-4"></div>
      <p class="font-bold text-2xl">{daysToDate} dies</p>
      <p class="font-bold text-lg mb-2">i {hoursToDate} hores</p>
      <p>per a festes de Gràcia 2023 🎉</p>
    </div>
  );
});
