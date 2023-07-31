import { Slot, component$ } from "@builder.io/qwik";

export const Hero = component$(() => {
  return (
    <section class="mb-8  m-auto relative">
      <Slot name="title" />
      <Slot name="subtitle" />
      <Slot name="countdown" />
    </section>
  );
});
