import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

import { CountDown } from "~/components/countDown/CountDown";
import { Decoration } from "~/components/decoration/Decoration";
import { Hero } from "~/components/hero/Hero";
import { ScheduleGroup } from "~/components/schedules/ScheduleGroup";
import { SectionWithTitle } from "~/components/sectionWithFixedTitle/SectionWithFixedTitle";
import { Location } from "~/components/svg/Location";
import { events } from "~/data/events";
import { Container } from "~/layout/Container";

export default component$(() => {
  return (
    <Container>
      <Hero>
        <div class="relative" q:slot="title">
          <h1 class="mb-6 w-full text-center">
            <span class="absolute -top-2 left-[47%] break-keep text-2xl">
              Festa Major
            </span>
            Puigmartí
          </h1>
        </div>
      </Hero>

      <Decoration />

      <SectionWithTitle notFixed titleLevel="h2" title="Festes de Gràcia 2023">
        <CountDown q:slot="decoration" />
        <div>
          <p class="text-xl mb-6">
            Consulta aquí totes les activitats que es faran al carrer Puigmartí
            durant les festes de Gràcia 2023
          </p>
          <a
            href="https://goo.gl/maps/EfzwSbjdJq4qzkco6"
            target="_blank"
            referrerPolicy="no-referrer"
            class="flex w-fit gap-x-2 items-center transition-colors hover:text-puxi-primary-500"
          >
            <Location />
            <h3 class="inline">Troba'ns al maps!</h3>
          </a>
        </div>
      </SectionWithTitle>

      <SectionWithTitle titleLevel="h3" title="Dimarts 15 d'Agost">
        <ScheduleGroup schedule={events.dimarts} />
      </SectionWithTitle>

      <SectionWithTitle titleLevel="h3" title="Dimecres 16 d'Agost">
        <ScheduleGroup schedule={events.dimecres} />
      </SectionWithTitle>

      <SectionWithTitle titleLevel="h3" title="Dijous 17 d'Agost">
        <ScheduleGroup schedule={events.dijous} />
      </SectionWithTitle>

      <SectionWithTitle titleLevel="h3" title="Divendres 18 d'Agost">
        <ScheduleGroup schedule={events.divendres} />
      </SectionWithTitle>

      <SectionWithTitle titleLevel="h3" title="Dissabte 19 d'Agost">
        <ScheduleGroup schedule={events.dissabte} />
      </SectionWithTitle>

      <SectionWithTitle titleLevel="h3" title="Diumenge 20 d'Agost">
        <ScheduleGroup schedule={events.diumenge} />
      </SectionWithTitle>

      <SectionWithTitle titleLevel="h3" title="Dilluns 21 d'Agost">
        <ScheduleGroup schedule={events.dilluns} />
      </SectionWithTitle>
    </Container>
  );
});

const pageTitle =
  "Carrer Puigmarti, festa major de Gràcia 2023. Assocació de veïns";
const pageDescription =
  "Coneix les activitats del carrer Puigmarti. Festa major de Gràcia 2023. Fiestas de Gràcia, vive la fiesta en el barrio más original de Barcelona con nosotras. ¿Qué hacer en barcelona? Ven a la calle Puiigmartí";

export const head: DocumentHead = {
  title: pageTitle,
  meta: [
    {
      name: "description",
      content: pageDescription,
    },
    {
      name: "og:title",
      content: pageTitle,
    },
    {
      name: "og:description",
      content: pageDescription,
    },
    {
      name: "og:url",
      content: "https://www.puigmarti.cat",
    },
    {
      name: "og:site_name",
      content: pageTitle,
    },

    {
      name: "og:image",
      content: "https://www.puigmarti.cat/images/og-image.jpg",
    },
  ],
  links: [
    {
      rel: "canonical",
      href: "https://www.puigmarti.cat",
    },
  ],
};
