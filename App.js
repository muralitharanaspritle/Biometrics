import {AppState, StyleSheet, Text, View} from 'react-native';
import React, {
  createContext,
  useEffect,
  useMemo,
  useReducer,
  useRef,
  useState,
} from 'react';
import {CENTER} from './App/Config/Alignment';
import {NavigationContainer} from '@react-navigation/native';
import AuthStack from './App/Navigation/AuthStack';
import AppStack from './App/Navigation/AppStack';

const initialState = {
  isLoggedIn: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'IS_LOGGED_IN':
      return {
        ...state,
        isLoggedIn: action.payload,
      };
    default:
      return state;
  }
};

export const AuthContext = createContext(initialState);

const App = () => {
  const [authState, dispatchAuthState] = useReducer(reducer, initialState);
  const appState = useRef(AppState.currentState);
  const [appStateVisible, setAppStateVisible] = useState(appState.current);

  useEffect(() => {
    const subscription = AppState.addEventListener('change', nextAppState => {
      if (
        appState.current.match(/inactive|background/) &&
        nextAppState === 'active'
      ) {
        console.log('App has come to the foreground!');
      }

      appState.current = nextAppState;
      setAppStateVisible(appState.current);
      console.log('AppState', appState.current);
    });

    return () => {
      subscription.remove();
    };
  }, []);

  const loggedIn = () => {
    dispatchAuthState({
      type: 'IS_LOGGED_IN',
      payload: true,
    });
  };

  const loggedOut = () => {
    dispatchAuthState({
      type: 'IS_LOGGED_IN',
      payload: false,
    });
  };

  const value = useMemo(() => [{authState, loggedIn, loggedOut}], [authState]);

  return (
    <AuthContext.Provider value={value}>
      <NavigationContainer>
        {authState.isLoggedIn ? <AppStack /> : <AuthStack />}
      </NavigationContainer>
    </AuthContext.Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
