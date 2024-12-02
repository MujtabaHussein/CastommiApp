import Navigation from './navigation/navigation'
import '../global.css'
import { PaperProvider } from 'react-native-paper'
export default function Index() {
  return (
    <PaperProvider>
      <Navigation />
    </PaperProvider>
  )
}
