/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
module.exports = {
  theme: {
    extend: {
      colors: {
        'dark-tan': '#8D8744',
        'light-taube': '#AE8E61',
        blond: '#FBF0C2',
        tumbleweed: '#DAAF86',
        frost: '#659DBD'
      },
      backgroundColor: theme => theme('colors'),
      translate: (theme, { negative }) => ({
        ...theme('spacing'),
        ...negative(theme('spacing')),
        '-26': '-6.5rem',
        26: '6.5rem'
      })
    }

  },
  variants: {},
  plugins: []
}
