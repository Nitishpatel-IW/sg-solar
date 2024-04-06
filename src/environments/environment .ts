// environment.ts
declare global {
    interface Window {
      env: {
        API_URL: string;
        DEBUG: boolean;
      };
    }
  }
  
  export const environment = {
    production: false,
    API_URL: 'https://fakestoreapi.com/products',
    DEBUG: true,
  };
  