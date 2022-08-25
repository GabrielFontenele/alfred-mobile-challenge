import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import Content from './src/Content'
import { PatientsContextProvider } from './src/contexts/PatientsContext'

import useCachedResources from './src/hooks/useCachedResources'

export default function App() {
  const isLoadingComplete = useCachedResources()

  if (!isLoadingComplete) {
    return null
  } else {
    return (
      <GestureHandlerRootView style={{ flex: 1 }}>
        <SafeAreaProvider>
          <PatientsContextProvider>
            <Content />
          </PatientsContextProvider>
        </SafeAreaProvider>
      </GestureHandlerRootView>
    )
  }
}
