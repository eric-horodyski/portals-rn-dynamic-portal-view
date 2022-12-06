import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { Portal, PortalView } from '@ionic/portals-react-native';
import { Styles } from '../shared';

const generatePortalDefinition = (startingRoute: string): Portal => ({
  name: 'shopwebapp',
  initialContext: { startingRoute },
});

/**
 * This reusable component is a full-screen view that loads a
 * Portal dependent on parameters passed to it.
 */
export const DynamicPortalScreen: React.FC = () => {
  const { params } = useRoute<any>();
  const [portal, setPortal] = useState<Portal>();

  const renderLoadingView = () => (
    <View style={[Styles.center, Styles.flex]}>
      <Text style={Styles.headingFontSize}>Loading Portal</Text>
    </View>
  );

  useEffect(() => {
    if (params?.startingRoute) {
      const portal = generatePortalDefinition(params.startingRoute);
      setPortal(portal);
    }
  }, [params]);

  return portal ? (
    <PortalView portal={portal} style={[Styles.flex]} />
  ) : (
    renderLoadingView()
  );
};
