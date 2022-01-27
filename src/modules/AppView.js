import React from 'react';
import Navigator from './navigation/Navigation';

export default function AppView() {
    return <Navigator onNavigationStateChange={() => { }} uriPrefix="/app" />;
}
