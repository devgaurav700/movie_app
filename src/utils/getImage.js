export function getImage(name) {
  switch (name) {
    case 'avengers':
      return require('../assets/images/avengers.png');
    case 'spidy':
      return require('../assets/images/spider.png');
    case 'spidy2':
      return require('../assets/images/spider2.png');

    default:
      return;
  }
}
