import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';

import './index.css';
const items = [
  {
    src: 'https://www.mirf.ru/wp-content/uploads/2015/12/witcher3-2.jpg',
    altText: '',
    caption: '',
    header: '',
    key: '1'
  },
  {
    src: 'https://sm.ign.com/t/ign_ru/screenshot/default/injustice2-harley-quinn-wallpaper-1920x1080-30_7h2t.1024.jpg',
    altText: '',
    caption: '',
    header: '',
    key: '2'
  },
  {
    src: 'https://etalongame.com/wp-content/uploads/2015/10/fallout-4-main-750x429.jpg',
    altText: '',
    caption: '',
    header: '',
    key: '3'
  },
  {
    src: 'https://cdn02.nintendo-europe.com/media/images/10_share_images/games_15/wiiu_14/SI_WiiU_MassEffect3SpecialEdition_enGB_image1600w.jpg',
    altText: '',
    caption: '',
    header: '',
    key: '4'
  },
  {
    src: 'https://sneg.tv/wp-content/uploads/2020/02/maxresdefault.jpg',
    altText: '',
    caption: '',
    header: '',
    key: '5'
  }
];

const Slider = () => <UncontrolledCarousel className='slider' items={items} />;

export default Slider;
