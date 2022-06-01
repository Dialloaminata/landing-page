import { FC, FormEvent, Fragment, useState } from "react";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { useTranslation } from "../providers/i18n";

export const Footer: FC<{}> = () => {
  const translate = useTranslation();
  return (
    <div className="relative">
      <div className="bg-black/90 absolute left-0 right-0 top-0 bottom-0 -z-10"></div>
      <div className="flex flex-col items-center gap-y-4 md:flex-row md:items-start md:justify-between md:max-w-[800px] md:mx-auto md:gap-x-2 p-3 py-6 text-center md:text-left">
        <div className="max-w-[300px] flex flex-col gap-x-1">
          <p className="text-xl text-white font-semibold mb-2">{translate({ "en": "Subscribe", "fr": "S'abonner" })}</p>
          <Subscribe />
        </div>
        <div className="max-w-[210px] flex flex-col gap-x-1">
          <p className="text-xl text-white font-semibold mb-2">{translate({ "en": "Company", "fr": "Companie" })}</p>
          <FooterLink href="https://www.accel-tech.net" title={translate({ "en": "About", "fr": "A-propos" })} />
          <FooterLink href="https://www.accel-tech.net" title={translate({ "en": "Services", "fr": "Services" })} />
          <FooterLink href="https://www.accel-tech.net" title={translate({ "en": "News", "fr": "Nouvelles" })} />
          <FooterLink href="https://www.accel-tech.net" title={translate({ "en": "Contact", "fr": "Contact" })} />
        </div>
        <div className="max-w-[210px] flex flex-col gap-x-1">
          <p className="text-xl text-white font-semibold mb-2">Info</p>
          <p className="text-white">
            <span className="font-semibold">{translate({ "en": "Address ", fr: "Adresse " })} </span>165 virage, Rte de l'Aeroport, Dakar, Senegal
          </p>
          <p className="text-white">
            <span className="font-semibold">{translate({ "en": "Phone ", fr: "Telephone " })} </span>+221 33 820 83 83
          </p>
          <p className="text-white">
            <span className="font-semibold">{translate({ "en": "Website ", fr: "Siteweb " })} </span>
            <a
              className="underline text-gray-100 hover:text-gray-200 cursor-pointer"
              href="https://www.accel-tech.net"
              target="_blank" rel="noopener noreferrer"
            >
              www.accel-tech.net
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};


const Subscribe: FC<{}> = () => {
  const [isLoading, setLoading] = useState(false);
  const [subscribed, setSubscribed] = useState(false);

  const translate = useTranslation();

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (isLoading) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubscribed(true);
    }, 2000);
  }

  return (
    <div className="flex flex-col justify-center gap-y-2 relative">
      {!subscribed ? (
        <Fragment>
          <p className="text-gray-100">{translate({ "en": "Stay up to date on the Heritage Project.", "fr": "Restez à jour sur le Projet Héritage." })}</p>
          <form className="flex gap-x-1 w-full" onSubmit={handleSubmit}>
            <Input variant="dark" placeholder="example@email.com" required />
            <Button label={translate({ "en": "Subscribe", "fr": "S'abonner" })} isLoading={isLoading} />
          </form>
        </Fragment>
      ) : (
        <p className="text-gray-100">{translate({ "en": "Thanks for subcribing to the Heritage Project.", "fr": "Merci de vous être abonné au Projet Héritage." })}</p>
      )}
    </div>
  );
};

function FooterLink(props: { title: string; href?: string }) {
  return (
    <a href={props.href} target="_blank" rel="noopener noreferrer" className="text-lg text-gray-100 hover:text-white cursor-pointer">
      {props.title}
    </a>
  );
}
