import React, { PureComponent } from 'react'
import { View, Image } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { createStructuredSelector } from 'reselect'
import Camera from 'react-native-camera';
import { ifElse, isNil, prop, pipe, not, always } from 'ramda'

import { selectPath } from '../Selectors/CameraSelectors'
import RoundedButton from '../Components/RoundedButton'
import CameraActions from '../Redux/CameraRedux'

import styles from './Styles/Camera'

const CAPTURE_OPTIONS = {
  target: Camera.constants.CaptureTarget.temp,
  orientation: Camera.constants.Orientation.auto
}

const isImagePathNotDefined = pipe(prop('imagePath'), isNil)

class Map extends PureComponent {
  capture = () => this.camera.capture(CAPTURE_OPTIONS)
    .then(({ path }) => this.props.changePath(path))
    .catch(err => console.error(err));


  get mainButton () {
    return ifElse(
      isImagePathNotDefined,
      () => <RoundedButton styles={styles.trigger} icon='camera' size={50} iconSize={25} onPress={this.capture} />,
      () => <RoundedButton styles={styles.trigger} icon='clear' size={50} iconSize={25} onPress={this.props.clear} />
    )(this.props)
  }

  get image () {
    return ifElse(
      isImagePathNotDefined,
      always(null),
      () => <Image resizeMode='cover' style={styles.image} source={{ uri: this.props.imagePath }} />
    )(this.props)
  }

  render () {
    return (
      <View style={styles.container}>
        <Camera
          ref={(ref) => { this.camera = ref }}
          style={styles.camera}
          aspect={Camera.constants.Aspect.fill}
        />

        {this.image}

        <View style={styles.content}>
          <RoundedButton icon='chevron-left' onPress={() => this.props.navigation.goBack()} />

          {this.mainButton}

          <RoundedButton icon='search' />
        </View>
      </View>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  imagePath: selectPath
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
  changePath: CameraActions.changePath,
  clear: CameraActions.clear
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Map)
