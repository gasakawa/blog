import { generateMetadata } from '@/utils/generate-metadata';
import {
  FaAws,
  FaCss3Alt,
  FaDocker,
  FaHtml5,
  FaJava,
  FaLinux,
  FaNodeJs,
  FaPhp,
  FaReact,
  FaWindows,
  FaWordpress,
} from 'react-icons/fa';
import './about.css';
import { FiFigma } from 'react-icons/fi';
import { IoLogoJavascript } from 'react-icons/io';
import {
  SiKubernetes,
  SiMongodb,
  SiIbm,
  SiTypescript,
  SiPostgresql,
  SiMicrosoftsqlserver,
  SiMysql,
  SiRedis,
  SiMicrosoftazure,
  SiNestjs,
} from 'react-icons/si';
import { DiOpenshift } from 'react-icons/di';

export const metadata = generateMetadata({
  title: 'Sobre mim',
  description: 'Saiba um pouco mais sobre o ser humano por trás deste blog.',
});

export default function About() {
  return (
    <div className="flex flex-col py-5 pr-5 pl-[10px] md:py-5 md:pr-5 md:pl-5">
      <h1 className="text-[2rem] md:text-[3rem] font-bold mt-6 md:mt-0">Sobre mim</h1>
      <p className="text-base font-normal md:text-[1.2rem]">
        Meu nome é Gabriel Asakawa, sou formado em Engenharia de Computação pela Universidad del Valle (Cali -
        Colombia).
        <br />
        <br />
        Meu primeiro contato com computação foi ainda no Colégio (1999), na aula de informática aprendiamos linguagem C.
        Na época não me interessava tanto, porque na verdade eu queria ser Médico, computação era minha segunda opção.
        Mas o destino me levou a estudar computação e já se fazem mais de 16 anos brincando com máquinas.
        <br />
        <br />
        Hoje atuo como Senior Software Engineer na empresa&nbsp;
        <a href="https://trukt.com/" target="_blank" rel="noopener noreferer">
          TRUKT Inc
        </a>
        &nbsp;e já trabalhei em empresas como&nbsp;
        <a href="https://scalait.com/" target="_blank" rel="noopener noreferer">
          Stefanini Scala
        </a>
        , &nbsp;
        <a href="https://habber.com/" target="_blank" rel="noopener noreferer">
          HabberTec
        </a>
        ,&nbsp;
        <a href="https://gft.com/" target="_blank" rel="noopener noreferer">
          GFT
        </a>
        . Também sou co-fundador da
        <a href="https://ag7digital.com/" target="_blank" rel="noopener noreferer">
          &nbsp;AG7 Digital Business
        </a>
        .
      </p>
      <h2 className="text-[1.5rem] font-semibold mt-4">Tenho experiência</h2>
      <div className="about-icons">
        <span>
          <FaNodeJs size={36} />
          <p>Node.JS</p>
        </span>
        <span>
          <FaJava size={36} />
          <p>Java</p>
        </span>
        <span>
          <IoLogoJavascript size={36} />
          <p>Javascript</p>
        </span>
        <span>
          <FiFigma size={36} />
          <p>Figma</p>
        </span>
        <span>
          <SiKubernetes size={36} />
          <p>Kubernetes</p>
        </span>
        <span>
          <SiMongodb size={36} />
          <p>Mongodb</p>
        </span>
        <span>
          <FaDocker size={36} />
          <p>Docker</p>
        </span>
        <span>
          <FaReact size={36} />
          <p>React</p>
        </span>
        <span>
          <SiIbm size={36} />
          <p>IBM</p>
        </span>
        <span>
          <SiTypescript size={36} />
          <p>Typescript</p>
        </span>
        <span>
          <FaPhp size={36} />
          <p>PHP</p>
        </span>
        <span>
          <FaLinux size={36} />
          <p>Linux</p>
        </span>
        <span>
          <FaWindows size={36} />
          <p>Windows</p>
        </span>
        <span>
          <FaCss3Alt size={36} />
          <p>CSS</p>
        </span>
        <span>
          <FaHtml5 size={36} />
          <p>HTML</p>
        </span>
        <span>
          <FaWordpress size={36} />
          <p>Wordpress</p>
        </span>
        <span>
          <SiPostgresql size={36} />
          <p>PostgreSQL</p>
        </span>
        <span>
          <SiMicrosoftsqlserver size={36} />
          <p>SQL Server</p>
        </span>
        <span>
          <SiMysql size={36} />
          <p>MySQL</p>
        </span>
        <span>
          <FaAws size={36} />
          <p>AWS</p>
        </span>
        <span>
          <DiOpenshift size={36} />
          <p>Openshift</p>
        </span>
        <span>
          <SiRedis size={36} />
          <p>Redis</p>
        </span>
        <span>
          <SiMicrosoftazure size={36} />
          <p>Azure</p>
        </span>
        <span>
          <SiNestjs size={36} />
          <p>NestJS</p>
        </span>
      </div>
    </div>
  );
}
