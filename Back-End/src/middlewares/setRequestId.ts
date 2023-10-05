import { Request, Response, NextFunction } from 'express'
import { v4 } from 'uuid'

const setRequestId = (req: Request, res: Response, next: NextFunction) => {
    if (req.headers['x-request-id']) {
        res.setHeader("x-request-id", req.headers['x-request-id'])
        req.request_id = req.headers['x-request-id']
    } else {
        const uuid = v4()
        res.setHeader("x-request-id", uuid)
        req.request_id = uuid
    }
    next()
}

export default setRequestId;