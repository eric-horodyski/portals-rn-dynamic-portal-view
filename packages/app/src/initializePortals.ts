import { addPortals, Portal, register } from '@ionic/portals-react-native';
import { PORTALS_API_KEY } from '@env';

const mainPortal: Portal = {
  name: 'shopwebapp',
  startDir: 'portals/shopwebapp',
  initialContext: { startingRoute: '/shop' },
  androidPlugins: ['com.capacitorjs.plugins.camera.CameraPlugin'],
};

const initializePortals = async () => {
  const key = PORTALS_API_KEY;
  await register(key);
  await addPortals([mainPortal]);
};
export default initializePortals;
