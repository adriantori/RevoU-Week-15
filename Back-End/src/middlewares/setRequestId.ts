import { Request, Response, NextFunction } from 'express';
import { v4 } from 'uuid';

const setRequestId = () => {
  return (req: Request, res: Response, next: NextFunction) => {
    console.log("inside setRequestId");
    if (req.headers['x-request-id']) {
      res.setHeader("x-request-id", req.headers['x-request-id']);
      req.request_id = req.headers['x-request-id'];
      console.log(req.request_id);
    } else {
      const uuid = v4();
      res.setHeader("x-request-id", uuid);
      req.request_id = uuid;
      console.log(req.request_id);
    }
    next();
  };
};

export default setRequestId;
