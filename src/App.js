import Routes from './routes';
import GlobalStyle from './styles/global';
import { RepositoryProvider } from './context/Repository';

const App = () => {
  return (
    <>
      <RepositoryProvider>
        <Routes />
        <GlobalStyle />
      </RepositoryProvider>
    </>
  );
};

export default App;
