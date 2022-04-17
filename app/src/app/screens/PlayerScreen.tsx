import { useNavigation } from '@react-navigation/native'
import React, { FC, useLayoutEffect, useRef, useState } from 'react'
import { ActivityIndicator, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Video from 'react-native-video'
import styled from 'styled-components/native'

import { getMinutesAndSeconds } from '../utils/getMinutesAndSeconds'

export const PlayerScreen: FC = () => {
  const [isShow, setIsShow] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const [durationTime, setDurationTime] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)

  const navigation = useNavigation()
  const isShowTimeoutId = useRef<NodeJS.Timeout>()

  useLayoutEffect(() => {
    if (isLoading) {
      showOrHide(true)
    }
  }, [isLoading, isPaused])

  const showOrHide = (showOrHide?: boolean) => {
    if (isShowTimeoutId.current) {
      clearTimeout(isShowTimeoutId.current)
    }

    setIsShow(prevState => showOrHide ?? !prevState)

    isShowTimeoutId.current = setTimeout(() => {
      setIsShow(prevState => {
        if (showOrHide) {
          return false
        }

        if (prevState) {
          return false
        }

        return prevState
      })
    }, 2000)
  }

  const onPressBack = () => {
    navigation.goBack()
  }

  return (
    <Container>
      <Video
        source={{
          uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4'
        }} // Can be a URL or a local file.
        onBuffer={data => setIsLoading(data.isBuffering)} // Callback when remote video is buffering
        onError={e => console.log('on Error', { e })} // Callback when video cannot be loaded
        onProgress={data => setCurrentTime(data.currentTime)}
        onLoad={data => setDurationTime(data.duration)}
        style={styles.backgroundVideo}
        paused={isPaused}
      />

      <AreaTouchable onPress={() => showOrHide()}>
        {isShow && (
          <Overflow>
            <Icon
              name='arrow-back-ios'
              size={20}
              color={'white'}
              onPress={onPressBack}
            />

            <AreaMid>
              {isLoading && <ActivityIndicator size={50} color={'white'} />}

              {!isLoading && (
                <Icon
                  name={isPaused ? 'play-arrow' : 'pause'}
                  size={50}
                  color={'white'}
                  onPress={() => setIsPaused(prevPaused => !prevPaused)}
                />
              )}
            </AreaMid>

            <AreaBottom>
              <Time>
                {getMinutesAndSeconds(currentTime)} /{' '}
                {getMinutesAndSeconds(durationTime)}
              </Time>
            </AreaBottom>
          </Overflow>
        )}
      </AreaTouchable>
    </Container>
  )
}

const Container = styled.View`
  flex: 1;
  background-color: black;
`

const Overflow = styled.View`
width: 100%;
height: 100%;
position: absolute;
top: 0px;
left: 0px
justify-content: space-between;
padding: 24px;
background: #00000099
`

const AreaTouchable = styled.TouchableOpacity`
  flex: 1;
`

const AreaBottom = styled.View``

const Time = styled.Text`
  font-size: 16px;
  color: white;
`

const AreaMid = styled.View`
  align-items: center;
`

const styles = StyleSheet.create({
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
  }
})
