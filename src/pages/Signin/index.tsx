import React, { useContext } from 'react';
import { View, Button, StyleSheet } from 'react-native';

import AuthContext from '../../contexts/auth';

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
})

const SignIn: React.FC = () => {
  const { signIn } = useContext(AuthContext);

  async function handleSignIn() {
    await signIn();
  }

  return (
    <View style={styles.container}>
      <Button title="Sign in" onPress={() => handleSignIn()}>Sign in</Button>
    </View>)
}

export default SignIn;