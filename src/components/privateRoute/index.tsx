import { useNavigate } from "react-router-dom";
import { decodeToken } from 'react-jwt';

interface PrivateRouteProps {
  children: React.ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
//   const navigate = useNavigate();

//   const isAuthenticated = () => {
//     const token = localStorage.getItem("jwtToken");

//     // Check for missing token
//     if (!token) {
//       return false;
//     }

//     try {
//       // Decode the token using react-jwt
//       const decoded = decodeToken(token) as any; // Replace with your secret

//       // Check expiration
//       const currentTime = Math.floor(Date.now() / 1000); // Current time in seconds
//       if (decoded.istokenExp < currentTime) {
//         console.warn("JWT token is expired");
//         localStorage.removeItem("jwtToken");
//         return false;
//       }

//       // Valid token
//       return true;
//     } catch (error) {
//       console.error("Error validating JWT token:", error);
//       localStorage.removeItem("jwtToken");
//       return false;
//     }
//   };

//   if (!isAuthenticated()) {
//     navigate("/login");
//     return null;
//   }

  return children;
}

export default PrivateRoute;
