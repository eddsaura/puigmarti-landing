import { Slot, component$ } from "@builder.io/qwik";

interface ContainerProps {
  as?: "div" | "main" | "section";
}

export const Container = component$(({ as = "div" }: ContainerProps) => {
  const Component = as;

  return (
    <Component class="2xl:container 2xl: mx-auto px-6 pt-12">
      <Slot />
    </Component>
  );
});
