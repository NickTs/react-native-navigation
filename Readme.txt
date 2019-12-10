Using react-native-vector-icons

This documentation shall describe how to use react-native-vector-icons for Android platform. This library is super awesome!
Installation:

npm install — save react-native-vector-icons

Edit android/app/build.gradle ( NOT android/build.gradle ) and add the following:

apply from: "../../node_modules/react-native-vector-icons/fonts.gradle"

Run the project to test the installation.

react-native run-android

Now, let’s try to use the icon. As an example I am going to use Font Awesome’s icons.
Import the library.

import Icon from ‘react-native-vector-icons/FontAwesome’

Use it inside JSX. Text styles are welcome to be applied. Below is an example using also separated grid.* styling file.

<View>
 <Icon name='area-chart' style={grid.icon_green} />
 <Text style={grid.text_green}>{label}</Text>
</View>
