/**
 * @file FIX ME WHEN YOU SEE ME! 请对本文件的用途或内容进行说明...
 */

import * as Linking from 'expo-linking'

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          Albums: {
            screens: {
              Albums: 'albums',
            },
          },
          Explore: {
            screens: {
              Explore: 'explore',
            },
          },
        },
      },
      NotFound: '*',
    },
  },
}
