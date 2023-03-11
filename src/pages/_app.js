import '@/styles/globals.css';
import 'public/fonts/Shabnam/css/shabnam.css';
import { ThemeProvider } from 'react-jss';

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />;
    </ThemeProvider>
  );
}
