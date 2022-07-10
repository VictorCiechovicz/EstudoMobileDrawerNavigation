import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'

import PaginaInicial from './Componentes/PaginaInicial'
import Triologia1 from './Componentes/Triologia1'
import Triologia2 from './Componentes/Triologia2'
import Triologia3 from './Componentes/Triologia3'

const Drawer = createDrawerNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Inicio" component={PaginaInicial} />
        <Drawer.Screen name="Triologia 1" component={Triologia1} />
        <Drawer.Screen name="Triologia 2" component={Triologia2} />
        <Drawer.Screen name="Triologia 3" component={Triologia3} />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}
