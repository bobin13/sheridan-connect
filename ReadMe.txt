
Setup project commands with expo:
    npx create-expo-app expo-typescript-basics -t expo-template-blank-typescript        //setup new project with typescript.
    npx expo install expo-router react-native-safe-area-context react-native-screens expo-linking expo-constants expo-status-bar    //Installing Expo-Router for file based routing
    npx expo install -- --save-dev typescript @types/react
     "main": "expo-router/entry"        //change main in package.json to this.
      "scheme": "your-app-scheme"       //add this to app.json file
    npx expo install react-native-safe-area-context         //Adding safe area

Git Commands:
    git checkout -b branchname          //To create a new branch from main. ##DONT WORK ON MAIN BRANCH!!!
    git checkout main                   //If you want to go back to main branch to check something or after your branch is merged with main.
    git reset --hard origin/main        //Resetting your branch back to match main branch.

React-Native Notification and pop-ups library: https://github.com/seniv/react-native-notifier

Video Tutorial:
    https://www.youtube.com/watch?v=H7AZAfHSnkw         //Folder Structure and File
    https://www.youtube.com/watch?v=H8qOotIAaEA         //Intro to React Native with typescript
    https://www.youtube.com/watch?v=4-shpLyYBLc         //Tab Bar Routing
    https://www.youtube.com/watch?v=Z20nUdAUGmM         //Expo Router Complete Tutorial