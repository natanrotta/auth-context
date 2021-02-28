import React, { useContext } from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';
import AuthContext from '../../contexts/auth';

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center'},
})

const DashBoard: React.FC = () => {
  const { user, signOut } = useContext(AuthContext);

  async function handleSignOut() {
    await signOut();
  }

  return (
    <View style={styles.container}>
      <Text>{user?.name}</Text>
      <Button title="Sign out" onPress={() => handleSignOut()}>Sign out</Button>
    </View>)
}

export default DashBoard;