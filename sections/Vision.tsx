import { FC } from "react";
import { useTranslation } from "../providers/i18n";

export const Vision: FC<{}> = () => {
  const translate = useTranslation();
  return (
    <div id="vision" className="bg-white flex flex-col items-center justify-center min-h-55vh relative" style={{ boxShadow: "inset 0 3px 7px rgba(0, 0, 0, 0.2), inset 0 -3px 7px rgba(0, 0, 0, 0.2)" }}>
      <div
        style={{ backgroundImage: 'url("/patterns.jpg")', opacity: '0.02', filter: "invert(1)" }}
        className="absolute left-0 right-0 top-0 bottom-0"
      />
      <div className="flex justify-center items-center gap-x-5">
        <div className="md:w-[700px] lg:w-[1000px]  3xl:w-[1400px] py-[40px] w-full px-4 md:px-0 text-gray-700 text-xl 3xl:text-4xl flex flex-col gap-y-2 3xl:gap-y-4">
          <p>{translate({ "en": "Welcome to Heritage.", "fr": "Bienvenue à Heritage." })}</p>
          <p>{translate({ "en": "The Heritage platform comes from the idea of a shared vision to rebuild a new Africa by Africans.", "fr": "La plateforme Heritage vient de l'idée d'une vision partagée de reconstruire une nouvelle Afrique par les africains." })}</p>
          <p>{translate({ "en": "We believe in an Africa capable of subsisting on its own by putting technology as a central vector of development that accelerates ideas into concrete actions on all fronts.", "fr": "Nous croyons en une Afrique capable de subsister par elle-même en mettant la technologie comme vecteur de développement central qui accélère les idées en actions concrètes sur tous les plans." })}</p>
          <p>{translate({ "en": "We also aim to make accessible the technologies of change that will support each other's initiatives with the objective of unlocking the strong potential that lies dormant within us.", "fr": "Nous visons aussi à rendre accessibles les technologies du changement qui supporteront les initiaves des uns et des autres avec comme objectif: dévérouiller le fort potentiel qui dort en nous." })}</p>
          <p>{translate({ "en": "All of this can only be possible by promoting an open culture without discrimination of age, nationality, gender, religion, political affiliation, or any other form of belief. An inclusive culture without borders across the continent.", "fr": "Tout cela ne peut être possible que par la promotion d'une culture ouverte sans discrimination d’âge, de nationalité, de sexe, de religion, d'appartenance politique, ou de toute autre forme de croyance. Une culture inclusive sans frontières sur tout le continent." })}</p>
          <p>{translate({ "en": "Express yourself with confidence. We demand neutrality and transparency which constitute the foundation of the critical infrastructures where your data rests in complete safety and on continental soil.", "fr": "Exprimez-vous en toute confiance. Nous nous exigeons une neutralité et une transparence qui constituent le socle des infrastructures critiques ou reposent vos données en toute sécurité et sur le sol continental." })}</p>
          <p>{translate({ "en": "Heritage is our contribution to a new united and committed Africa for future generations.", "fr": "Heritage, c’est notre contribution d’une nouvelle Afrique unie et engagée pour les  générations futures." })}</p>
          <p>{translate({ "en": "Visit the Cloud experience developed on our infrastructures by ACCEL Technologies.", "fr": "Visitez l’expérience Cloud développée sur nos infrastructures par ACCEL Technologies." })}</p>
        </div>
      </div>
    </div>
  );
};
