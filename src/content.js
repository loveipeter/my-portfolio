import portrait from './img/pl.jpg';
import closeToHeartBanner from './img/close-to-heart-zorgpad.jpg';

// All copy and links live here so text edits never require touching JSX.
// Paragraphs are JSX because most of them carry inline links.

const PHILIPS_DESIGN =
  'https://www.philips.com/a-w/about/innovation/experience-design.html';
const CLOSE_TO_HEART =
  'https://www.philips.nl/a-w/about/news/archive/standard/about/news/articles/2023/20230928-dutch-design-week-een-nieuw-zorgtraject-ontwerpen-vanuit-de-wensen-van-de-doelgroep.html#english';

export const profile = {
  name: 'Peter Lovei',
  credential: 'PhD',
  role: 'Data experience designer',
  tagline: 'Data · Design · Software',
  location: 'Veszprém, Hungary',
  availability: 'Open to work',
  portrait,
  portraitAlt: 'Portrait of Peter Lovei',
};

export const links = {
  linkedin: 'https://www.linkedin.com/in/peterlovei/',
  scholar: 'https://scholar.google.com/citations?user=EBixArMAAAAJ&hl=en',
};

export const about = [
  <>
    I am an experienced data / design / software professional with a technical
    background and 10 years of industry experience from{' '}
    <a href={PHILIPS_DESIGN} target="_blank" rel="noreferrer">
      Philips Experience Design
    </a>
    .
  </>,
  <>
    I relocated to Veszprem, Hungary in September, 2026 and am actively looking
    for a job!
  </>,
  <>
    As part of my application process I am using this channel to introduce my
    previous works in Eindhoven, The Netherlands. Please look around, and if you
    are interested in considering me for a position let's get in touch! 👋🏻
  </>,
  <>
    I consider this website a work in progress, and am happy to further
    elaborate on its content.
  </>,
];

export const project = {
  title: 'Close to Heart',
  url: CLOSE_TO_HEART,
  award: {
    label: 'iF Design Award winner',
    url: 'https://ifdesign.com/en/winner-ranking/project/close-to-heart/542752',
  },
  banner: closeToHeartBanner,
  bannerAlt:
    'Close to Heart care pathway project banner, Philips Experience Design',
  collaborators: [
    { name: 'Philips Experience Design', url: PHILIPS_DESIGN },
    {
      name: 'Eindhoven University of Technology',
      url: 'https://www.tue.nl/en/our-university/departments/industrial-design/research',
    },
    {
      name: 'Catharina Hospital',
      url: 'https://www.catharinaziekenhuis.nl/catharina-hart-en-vaatcentrum/',
    },
  ],
  description: (
    <>
      The{' '}
      <a href={CLOSE_TO_HEART} target="_blank" rel="noreferrer">
        Close to Heart
      </a>{' '}
      project is an{' '}
      <a
        href="https://ifdesign.com/en/winner-ranking/project/close-to-heart/542752"
        target="_blank"
        rel="noreferrer"
      >
        award winning
      </a>{' '}
      collaboration between{' '}
      <a href={PHILIPS_DESIGN} target="_blank" rel="noreferrer">
        Philips Experience Design
      </a>
      ,{' '}
      <a
        href="https://www.tue.nl/en/our-university/departments/industrial-design/research"
        target="_blank"
        rel="noreferrer"
      >
        Eindhoven University of Technology
      </a>{' '}
      and the{' '}
      <a
        href="https://www.catharinaziekenhuis.nl/catharina-hart-en-vaatcentrum/"
        target="_blank"
        rel="noreferrer"
      >
        Catharina Hospital
      </a>
      . As a data experience designer I was responsible for redesigning the
      atrial fibrillation care pathway from a technical perspective. The most
      important perspective of this was the fact that I worked together with
      technical consultants to configure, and deploy a CE-marked patient
      engagement platform.
    </>
  ),
};

export const approach = [
  <>
    Mapping out the activities of the atrial fibrillation care pathway with a
    strong focus on the current data flow between the patients, healthcare
    professionals, and the hospital systems
  </>,
  <>
    Configuring the patient engagement platform to include educational content
    related to risk factors (e.g. smoking, alcohol, healthy nutrition)
  </>,
  <>
    Development of a data pipeline for being able to conduct Data-enabled Design
    research
  </>,
  <>Daily evaluation of patient and staff experience based on the collected data</>,
  <>
    <a
      href="https://www.ijdesign.org/index.php/IJDesign/article/view/4805/1045"
      target="_blank"
      rel="noreferrer"
    >
      Writing research publications about our project
    </a>
  </>,
  <>
    <a
      href="https://youtu.be/V-aeBIRej7M?si=sXF5HOQbi3O8VNZJ&t=2321"
      target="_blank"
      rel="noreferrer"
    >
      Public speaking engagements
    </a>
  </>,
];

export const presentation = {
  heading: 'A summary of my process, and project highlights',
  note: 'aka. my PhD presentation',
  src: 'https://1drv.ms/p/s!AsHe59hm9rxGgaxnKag9Or6Qza5Kvg?embed=1&em=2&wdAr=1.7777777777777777',
};
