import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  completeContainer: {
    width: '100%',
    height: 36,
    backgroundColor: 'lightgrey',
    //justifyContent: 'center',
    paddingLeft: 10,
    flexDirection: 'row',
    zIndex: 100,
    flex: 1,
  },
  outer: {
    height: '100%',
  },
  button: {
    backgroundColor: 'red',
    position: 'absolute',
    width: 50,
    height: 50,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 20,
    left: 20,
  },
});

export default styles;
