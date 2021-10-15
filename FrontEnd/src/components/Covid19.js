import React from "react";

import "../Css/Home.css";
import corona from "../img/corona.png";
import cough2 from "../img/cough2.png";
import fever from "../img/fever.png";
import spread from "../img/spread.png";
import sneeze from "../img/sneeze.png";
import sneeze2 from "../img/sneeze2.png";
import calendar from "../img/calendar.png";

function Covid19() {
  return (
    <div className="container mt-5 with-bg">
      <br />

      <h1>
        <span className="title-proteg">
          <strong>Qu’est ce que covid-19?</strong>
        </span>
      </h1>

      <br />
      <br />

      <ul className="list-covid">
        <span className="title-covid">Qu’est ce que covid-19?</span>
        <li className="list-covid-item">
          <span>
            <p>
              COVID-19 est la maladie infectieuse causée par le dernier
              coronavirus qui a été découvert.{" "}
            </p>
            <p>
              Ce nouveau virus et cette maladie étaient inconnus avant
              l’apparition de la flambée à Wuhan (Chine) en décembre 2019.
            </p>
          </span>
        </li>

        <span className="title-covid">Qu’est ce qu'un CoronaVirus</span>
        <li className="list-covid-item">
          <img className="covid" src={corona} alt="" />
          <span>
            <p>
              Les coronavirus forment une vaste famille de virus qui peuvent
              être pathogènes chez l’homme et chez l’animal.{" "}
            </p>
            <p>
              On sait que, chez l’être humain, plusieurs coronavirus peuvent
              entraîner des infections respiratoires dont les manifestations
              vont du simple rhume à des maladies plus graves comme le syndrome
              respiratoire du Moyen-Orient (MERS) et le syndrome respiratoire
              aigu sévère (SRAS).
            </p>
            <p>
              Le dernier coronavirus qui a été découvert est responsable de la
              maladie à coronavirus 2019 (COVID-19)
            </p>
          </span>
        </li>

        <span className="title-covid">
          Quels sont les symptômes de la COVID-19 ?
        </span>
        <li className="list-covid-item">
          <img className="covid" src={fever} alt="" />
          <span>
            <p>
              Les symptômes les plus courants de la COVID-19 sont la fièvre, la
              fatigue et une toux sèche.
            </p>
            <p>
              Certains patients présentent des douleurs, une congestion nasale,
              un écoulement nasal, des maux de gorge ou une diarrhée.
            </p>
            <p>
              Ces symptômes sont généralement bénins et apparaissent de manière
              progressive.
            </p>
          </span>
        </li>
        <li className="list-covid-item">
          <img className="covid" src={cough2} alt="" />
          <span>
            <p>
              Certaines personnes, bien qu’infectées, ne présentent aucun
              symptôme et se sentent bien.
            </p>

            <p>
              Environ une personne sur six contractant la maladie présente des
              symptômes plus graves, notamment une dyspnée.
            </p>
            <p>
              Les personnes âgées et celles qui ont d’autres problèmes de santé
              (hypertension artérielle, problèmes cardiaques ou diabète) ont
              plus de risques de présenter des symptômes graves.
            </p>
            <p>
              Toute personne qui a de la fièvre, qui tousse et qui a des
              difficultés à respirer doit consulter un médecin.
            </p>
          </span>
        </li>

        <span className="title-covid">
          Comment la COVID-19 se propage-t-elle ?
        </span>
        <li className="list-covid-item">
          <img className="covid" src={spread} alt="" />

          <span>
            <p>
              La COVID-19 est transmise par des personnes porteuses du virus.{" "}
            </p>
            <p>
              La maladie peut se transmettre d’une personne à l’autre par le
              biais de gouttelettes respiratoires expulsées par le nez ou par la
              bouche lorsqu’une personne tousse ou éternue.{" "}
            </p>
            <p>
              Ces gouttelettes peuvent se retrouver sur des objets ou des
              surfaces autour de la personne en question. On peut alors
              contracter la COVID-19 si on touche ces objets ou ces surfaces et
              si on se touche ensuite les yeux, le nez ou la bouche.{" "}
            </p>
            <p>
              Il est également possible de contracter la COVID-19 en inhalant
              des gouttelettes d’une personne malade qui vient de tousser ou
              d’éternuer. C’est pourquoi il est important de se tenir à plus
              d’un mètre d’une personne malade.
            </p>
            <p>
              L’OMS examine les travaux de recherche en cours sur la manière
              dont la COVID-19 se propage et elle continuera à communiquer les
              résultats actualisés.
            </p>
          </span>
        </li>

        <span className="title-covid">
          Le virus responsable de la COVID-19 est-il transmissible par voie
          aérienne ?
        </span>
        <li className="list-covid-item">
          <img className="covid" src={sneeze} alt="" />

          <span>
            <p>
              Les études menées à ce jour semblent indiquer que le virus
              responsable de la COVID-19 est principalement transmissible par
              contact avec des gouttelettes respiratoires, plutôt que par voie
              aérienne.
            </p>
            <p>
              Voir la réponse à la question précédente,{" "}
              <strong>« Comment le COVID-19 se propage-t-elle ? »</strong>
            </p>
          </span>
        </li>

        <span className="title-covid">
          Peut-on contracter la COVID-19 au contact d’une personne qui ne
          présente aucun symptôme ?
        </span>
        <li className="list-covid-item">
          <img className="covid" src={sneeze2} alt="" />

          <span>
            <p>
              {" "}
              La maladie se propage principalement par les gouttelettes
              respiratoires expulsées par les personnes qui toussent.
            </p>
            <p>
              Le risque de contracter la COVID-19 au contact d’une personne qui
              ne présente aucun symptôme est très faible.
            </p>
            <p>
              Cependant, beaucoup de personnes atteintes ne présentent que des
              symptômes discrets. C’est particulièrement vrai aux premiers
              stades de la maladie.
            </p>
            <p>
              Il est donc possible de contracter la COVID-19 au contact d’une
              personne qui n’a, par exemple, qu’une toux légère mais qui ne se
              sent pas malade.
            </p>
            <p>
              L’OMS examine les travaux de recherche en cours sur le délai de
              transmission de la COVID-19 et elle continuera à communiquer des
              résultats actualisés.
            </p>
          </span>
        </li>

        <span className="title-covid">
          Combien de temps dure la période d’incubation de la COVID-19 ?
        </span>
        <li className="list-covid-item">
          <img className="covid" src={calendar} alt="" />

          <span>
            <p>
              La période d’incubation est le temps qui s’écoule entre
              l’infection et l’apparition des symptômes de la maladie.
            </p>
            <p>
              On estime actuellement que la période d’incubation de la COIVD-19
              dure de 1 à 14 jours et le plus souvent autour de cinq jours.
            </p>
            <p>
              Ces estimations seront actualisées à mesure que de nouvelles
              données seront disponibles
            </p>
          </span>
        </li>
      </ul>

     
    </div>
  );
}
export default Covid19;
