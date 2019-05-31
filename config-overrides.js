const { override, addBabelPlugins, addLessLoader  } = require('customize-cra');

module.exports = override(
    addLessLoader({
        strictMath: true,
        noIeCompat: true//,
        //localIdentName: '[local]--[hash:base64:5]'
      }),
    ...addBabelPlugins(
        [
            'babel-plugin-root-import',
            {
                'rootPathPrefix': '~',
                'rootPathSuffix': 'src'
            }
        ]
    )
)