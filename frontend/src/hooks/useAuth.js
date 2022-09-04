import { useContext } from 'react';
//
import { AuthContext } from '../context/JWTContext';
// import { AuthContext } from '../context/Auth0Context';
// import { AuthContext } from '../context/FirebaseContext';
// import { AuthContext } from '../context/AwsCognitoContext';

// ----------------------------------------------------------------------

const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) throw new Error('Auth context must be use inside AuthProvider');

  return context;
};

export default useAuth;
