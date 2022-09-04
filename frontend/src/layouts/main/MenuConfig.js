// routes
import { PATH_AUTH, PATH_DOCS, PATH_PAGE } from '../../routes/paths';
// components
import { PATH_AFTER_LOGIN } from '../../config';
// components
import Iconify from '../../components/Iconify';

// ----------------------------------------------------------------------

const ICON_SIZE = {
  width: 26,
  height: 22,
};

const menuConfig = [
  { title: 'Home',icon: <Iconify icon={'eva:home-fill'} {...ICON_SIZE} />,path: '/',},
  { title: 'About', icon: <Iconify icon={'eva:home-fill'} {...ICON_SIZE} />, path: PATH_PAGE.about ,},
  { title: 'Contact', path: PATH_PAGE.contact },
  { title: 'Book an Call', path: PATH_AFTER_LOGIN },
  { title: 'Quote', path: PATH_AFTER_LOGIN },
  { title: 'FAQs', path: PATH_PAGE.faqs },
];

export default menuConfig;
