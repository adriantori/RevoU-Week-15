import { Request, Response } from 'express';

function simpleGet(req: Request, res: Response){
    try {
        res.status(200).json({
            message: 'GET success'
        })
    } catch (error) {
        res.status(500).json({
            message: 'GET ERROR'
        })
    }
}

function simplePost(req: Request, res: Response){
    try {
        res.status(200).json({
            message: 'POST success'
        })
    } catch (error) {
        res.status(500).json({
            message: 'POST ERROR'
        })
    }
}

function simplePut(req: Request, res: Response){
    try {
        res.status(200).json({
            message: 'PUT success'
        })
    } catch (error) {
        res.status(500).json({
            message: 'PUT ERROR'
        })
    }
}

function simpleDelete(req: Request, res: Response){
    try {
        res.status(200).json({
            message: 'DELETE success'
        })
    } catch (error) {
        res.status(500).json({
            message: 'DELETE ERROR'
        })
    }
}

export { simpleGet, simplePost, simplePut, simpleDelete }