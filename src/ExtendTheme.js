import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
    fonts: {
        body: 'Poppins',
        button: 'Poppins',
        a: 'Poppins'
    },
    colors: {
        brand: { normal: '#89D0CA' },
        button: { normal: '#292E33' }
    },

    layerStyles: {
        buttonBase: {
            bgColor: '#292E33',
            color: 'white',
            fontWeight: 'bold',
        },
        buttonHover: {
            bg: 'black',
        },
        buttonActive: {
            transform: 'scale(0.95)'
        }
    },

})

export default theme