
const whitelist =  {
    clientOptionsLimited : {
        origin: 'http://localhost:5173',
        methods:['GET','POST']
    },
    clientOptionsGlobal : {
        origin: 'http://localhost:600',
    }
}

export default whitelist