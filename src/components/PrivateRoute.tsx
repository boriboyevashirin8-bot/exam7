import { Navigate } from 'react-router-dom'

interface PrivateRouteProps {
  children: React.ReactNode
}

export default function PrivateRoute({ children }: PrivateRouteProps) {
  const token = localStorage.getItem('token')
  
  if (!token) {
    // Token yo'q bo'lsa login ga yo'naltirish
    return <Navigate to="/login" replace />
  }
  
  return <>{children}</>
}