import { StyleSheet, Dimensions, StatusBar } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: '#afb'
  },
  header: {
    marginTop: Dimensions.get('window').height/4,
  },
  imagesBackground: {
    top: 50,
    left: 0,
    flex: 1,
    position: 'absolute',
    overflow: 'hidden',
    
  },
  imageBackground: {
    width: Dimensions.get('window').width*2,
    height: Dimensions.get('window').height/2.5,
    overflow: 'hidden'
    
  },
  imagesRoad: {
    top: Dimensions.get('window').height/2,
    left: 0,
    flex: 1,
    position: 'absolute',
    overflow: 'hidden',
    
  },
  imageRoad: {
    left: -100,
    width: Dimensions.get('window').width*4,
    transform: [{rotateX: "60deg"}],
    overflow: 'hidden'
    
  },
  sky: {
    backgroundColor: 'lightblue',
    top: 0,
    height: Dimensions.get('window').height/2.5-50
  },
  griffin:{
    transform:[{
      scale: .75
    },{
      translateX: -275
    },{
      
      translateY: 175
    }]
  },
  grifVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  title: {
    fontSize: 45,
    fontWeight: 'bold',
    position: 'absolute',
    top: 20,
    color: 'red',
    width: '100%',
    textAlign: 'center',
  },
  school: {
    fontSize: 25,
    fontWeight: 'bold',
    position: 'absolute',
    color: 'red',
    width: '100%',
    textAlign: 'center',
  },
  countdown: {
    fontSize: 20,
    fontWeight: 'bold',
    position: 'absolute',
    bottom: 80,
    color: 'red',
    width: '100%',
    textAlign: 'center',
    fontStyle: 'italic',
  },
  bottomContainer: {
    width: '100%',
    height: 60,
    position: 'absolute',
    bottom: 30,
  },
  searchButton: {
    backgroundColor: 'white',
    margin: 2,
    height: 50,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    zIndex: 100,
    width: Dimensions.get('screen').width - 20,
    marginHorizontal: 10,
  },
  searchButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default styles;
