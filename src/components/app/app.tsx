import { ThemeProvider } from 'styled-components';
import {
  Switch,
  Route,
  BrowserRouter as Router,
} from '../common/common';
import DetailedQuest from '../detailed-quest/detailed-quest';
import Contacts from '../contacts/contacts';
import Home from '../home/home';
import { appTheme } from './common';
import * as S from './app.styled';
import { AppRoute } from '../../utils/const';
import { useEffect } from 'react';
import { fetchQuests } from '../../store/actions';
import { useAppDispatch } from '../../hooks';
import PageNotFound from '../not-found/not-found';

function App () {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchQuests());
  }, [dispatch]);

  return (
    <ThemeProvider theme={appTheme}>
      <S.GlobalStyle />
      <Router>
        <Switch>
          <Route exact path={`${AppRoute.Quest}/:id`}>
            <DetailedQuest />
          </Route>
          <Route exact path={AppRoute.Contacts}>
            <Contacts />
          </Route>
          <Route exact path={AppRoute.Root}>
            <Home />
          </Route>
          <Route path='*'>
            <PageNotFound/>
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  )
}

export default App;
