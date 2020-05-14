import ReactGA from 'react-ga';

export const searchClickTrack = () => {
  ReactGA.event({
    category: 'search',
    action: 'click',
    label: 'Search no Menu Bar',
  });
};

export const themeTrack = theme => {
  ReactGA.event({
    category: 'theme',
    action: 'view',
    label: `Usa ${theme} theme`,
    nonInteraction: true,
  });
};

export const topClickTrack = () => {
  ReactGA.event({
    category: 'top',
    action: 'click',
    label: 'Top na Menu Bar',
  });
};

export const displayTrack = display => {
  ReactGA.event({
    category: 'display',
    action: 'view',
    label: `Usa ${display} display`,
  });
};
