import { Ionicons } from '@expo/vector-icons'
import { View, Animated, I18nManager } from 'react-native'
import {
  GestureHandlerRootView,
  RectButton,
  Swipeable,
} from 'react-native-gesture-handler'
import { Patient } from '../../reducers/patients/reducer'
import CardPatient from '../CardPatient'
import { styles } from './styles'

type Props = {
  patient: Patient
}

export default function Deletable({ patient }: Props) {
  const renderRightActions = (
    progress: Animated.AnimatedInterpolation,
    _dragAnimatedValue: Animated.AnimatedInterpolation,
  ) => {
    const trans = progress.interpolate({
      inputRange: [0, 1],
      outputRange: [90, 0],
    })
    return (
      <View
        style={{
          width: 90,
          flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row',
        }}
      >
        <Animated.View style={{ flex: 1, transform: [{ translateX: trans }] }}>
          <RectButton style={styles.delete}>
            <Ionicons name="trash-sharp" size={30} color="#fff" />
          </RectButton>
        </Animated.View>
      </View>
    )
  }

  return (
    <GestureHandlerRootView>
      <Swipeable renderRightActions={renderRightActions}>
        <CardPatient patient={patient} />
      </Swipeable>
    </GestureHandlerRootView>
  )
}
