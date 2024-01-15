import { AppRouter } from './router/AppRouter'
import './index.css'
import { AuthProvider } from './auth'
export const NetflixApp = () => {
  return (
    <AuthProvider>
    <AppRouter></AppRouter>
    </AuthProvider>
  )
}
