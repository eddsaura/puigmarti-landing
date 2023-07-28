import { component$ } from "@builder.io/qwik";

export const Decoration = component$(() => {
  return (
    <div class="w-full flex justify-center mb-12 items-center gap-x-10">
      <div class="border-b border-puxi-primary-800 w-full opacity-50"></div>
      <image
        width="200"
        height="50"
        src="/images/adorno.png"
        alt=""
        class="w-[200px] md:w-[250px]"
      />
      <div class="border-b border-puxi-primary-800 w-full opacity-50"></div>
    </div>
  );
});
