import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Hero } from "~/components/hero/Hero";
import { ScheduleGroup } from "~/components/schedules/ScheduleGroup";
import { SectionWithTitle } from "~/components/sectionWithFixedTitle/SectionWithFixedTitle";

export default component$(() => {
  return (
    <>
      <div class="2xl:container 2xl: mx-auto px-6 pt-12">
        <Hero>
          <div class="relative" q:slot="title">
            <h1 class="mb-6 w-full text-center md:text-left">
              <span class="absolute -top-2 left-[45%] md:left-28 text-2xl">
                Festa Major
              </span>
              Puigmarti
            </h1>
          </div>
        </Hero>

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

        <SectionWithTitle
          notFixed
          titleLevel="h2"
          title="Festes de Grácia 2023"
        >
          <p class="text-xl">
            Consulta aquí totes les activitats que es faran al carrer Puigmartí
          </p>
        </SectionWithTitle>

        <SectionWithTitle titleLevel="h3" title="Dimarts 15 d'Agost">
          <ScheduleGroup
            schedule={[
              {
                title: "💥 Traca d'inici Festa Major amb coca i beguda",
                description: "Traca d'inici Festa Major amb coca i beguda",
                startDate: new Date("2023-08-15T08:00:00.020z"),
              },
              {
                title: "🎶 Vermut ambientat amb música.",
                startDate: new Date("2023-08-15T12:00:00.020z"),
              },
              {
                title: "🎤 Concert David González Capinàs.",
                startDate: new Date("2023-08-15T18:00:00.020z"),
              },
              {
                title: "🎸 Concert S'Temple Bar",
                startDate: new Date("2023-08-15T23:00:00.020z"),
              },
            ]}
          />
        </SectionWithTitle>

        <SectionWithTitle titleLevel="h3" title="Dimecres 16 d'Agost">
          <ScheduleGroup
            schedule={[
              {
                title: "🎲 Campionat dòmino i parxís",
                startDate: new Date("2023-08-16T11:00:00.020z"),
              },
              {
                title: "🎵 Havaneres Mar Brava",
                startDate: new Date("2023-08-16T18:00:00.020z"),
              },
              {
                title: "💃 Flamenco Queer",
                startDate: new Date("2023-08-16T23:00:00.020z"),
              },
            ]}
          />
        </SectionWithTitle>

        <SectionWithTitle titleLevel="h3" title="Dijous 17 d'Agost">
          <ScheduleGroup
            schedule={[
              {
                title: "🧒 Taller inifantil amb plastilina",
                startDate: new Date("2023-08-17T11:00:00.020z"),
              },
              {
                title:
                  "📖 Contacontes “Amunt i Avall” infantil amb La Cuentista",
                startDate: new Date("2023-08-17T18:00:00.020z"),
              },
              {
                title: "🎷 Malaca Blues Band",
                startDate: new Date("2023-08-17T23:00:00.020z"),
              },
            ]}
          />
        </SectionWithTitle>

        <SectionWithTitle titleLevel="h3" title="Divendres 18 d'Agost">
          <ScheduleGroup
            schedule={[
              {
                title: "🎹 Taller familiar musical amb Marcos",
                startDate: new Date("2023-08-18T18:00:00.020z"),
              },
              {
                title: "🪩 Disco amb DJ Marcos",
                startDate: new Date("2023-08-18T23:00:00.020z"),
              },
            ]}
          />
        </SectionWithTitle>

        <SectionWithTitle titleLevel="h3" title="Dissabte 19 d'Agost">
          <ScheduleGroup
            schedule={[
              {
                title: "🌆 Taller Casa Vicens",
                startDate: new Date("2023-08-19T10:30:00.020z"),
              },
              {
                title: "🥘 Dinar Paella Valenciana",
                startDate: new Date("2023-08-19T14:00:00.020z"),
              },
              {
                title: "📚 Contacontes infantil: El Sacaire del Llobregat",
                startDate: new Date("2023-08-19T18:00:00.020z"),
              },
              {
                title: "🍻 Concert S'Temple Bar",
                startDate: new Date("2023-08-19T23:00:00.020z"),
              },
            ]}
          />
        </SectionWithTitle>

        <SectionWithTitle titleLevel="h3" title="Diumenge 20 d'Agost">
          <ScheduleGroup
            schedule={[
              {
                title: "🍸 Vermut ambientat amb música",
                startDate: new Date("2023-08-20T12:00:00.020z"),
              },
              {
                title: "🔮 Bingo musical",
                startDate: new Date("2023-08-20T18:00:00.020z"),
              },
              {
                title: "🪕 Concert VHS (Vintage Hit Songs)",
                startDate: new Date("2023-08-20T23:00:00.020z"),
              },
            ]}
          />
        </SectionWithTitle>

        <SectionWithTitle titleLevel="h3" title="Dilluns 21 d'Agost">
          <ScheduleGroup
            schedule={[
              {
                title: "🔎 Gimcana",
                startDate: new Date("2023-08-21T16:00:00.020z"),
              },
              {
                title: "🥁 Concert Blues Wax & Boogie",
                startDate: new Date("2023-08-21T23:00:00.020z"),
              },
              {
                title: "💥 Traca fi de festa i desguarniment",
                startDate: new Date("2023-08-22T02:00:00.020z"),
              },
            ]}
          />
        </SectionWithTitle>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Carrer Puigmarti, festa major de Gràcia 2023",
  meta: [
    {
      name: "description",
      content:
        "Coneix les activitats del carrer Puigmarti. Festa major de Gràcia 2023. Fiestas de Gràcia, vive la fiesta en el barrio más original de Barcelona con nosotras.",
    },
  ],
};
