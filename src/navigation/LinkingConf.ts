import * as Linking from 'expo-linking';

export default {
    prefixes: [Linking.makeUrl('/')],
    config: {
        screens: {
            Root: {
                screens: {
                    Home: {
                        screens: {
                            HomeScreen: 'one'
                        }
                    },
                    Forward: {
                        screens: {
                            ForwardScreen: 'two'
                        }
                    },
                    Order: {
                        screens: {
                            OrderScreen: 'two'
                        }
                    },
                    User: {
                        screens: {
                            UserScreen: 'two'
                        }
                    }
                }
            },
            NotFound: '*'
        }
    }
}