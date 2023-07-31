import { component$ } from "@builder.io/qwik";

export const TopBannerAlert = component$(() => {
  return (
    <div class="fixed text-center text-xl z-20 left-0 top-[74px] w-full bg-green-700 bg-opacity-80 backdrop-blur-lg text-white py-2 ">
      Ajudans a guarnir!
    </div>
  );
});
