import logo from '../assets/images/logo.svg';
import ogon from '../assets/images/ogon.svg';

export function getImg(name) {
  const map = {
    logo,
    ogon,
  };
  return map[name] || '';
}
