import React, { useContext } from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';

import AuthContext from '../contexts/auth';

import AppRoutes from './app.routes'
import AuthRoutes from './auth.routes'

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
})

const Routes: React.FC = () => {
  const { signed, loading } = useContext(AuthContext);

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator color='#999' size='large'/>
      </View>
    )
  }

  return signed ? <AppRoutes /> : <AuthRoutes />
}

export default Routes;