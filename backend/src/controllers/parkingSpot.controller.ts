import { NextFunction, Request, Response } from 'express';
import ParkingSpotService from '@services/parkingSpot.service';
import { ParkingSpotReserveDto } from '@dtos/parkingSpotReserve.dto';
import { ParkingSpotCreateDto } from '@dtos/parkingSpotCreate.dto';
import AuthService from '@services/auth.service';

class ParkingSpotController {
  public parkingSpotService = new ParkingSpotService();
  public authService = new AuthService();

  public getParkingSpots = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const data = await this.parkingSpotService.getParkingSpots();
      if (!data) {
        res.status(500).json({ message: 'Internal server error' });
        return;
      }
      res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  };

  public deleteParkingSpot = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const id = req.params.id;
      const data = await this.parkingSpotService.deleteParkingSpot(id);
      if (!data) {
        res.status(500).json({ message: 'Internal server error' });
        return;
      }
      res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  };

  public reserveParkingSpot = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const token = req.headers.authorization?.split(' ')[1];
      const user = await this.authService.whoAmI(token);

      const dto = req.body as ParkingSpotReserveDto;
      const data = await this.parkingSpotService.reserveParkingSpot(dto, user);
      if (!data) {
        res.status(500).json({ message: 'Internal server error' });
        return;
      }
      res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  };

  public createParkingSpot = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const dto = req.body as ParkingSpotCreateDto;
      const data = await this.parkingSpotService.createParkingSpot(dto);
      if (!data) {
        res.status(500).json({ message: 'Internal server error' });
        return;
      }
      res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  };
}

export default ParkingSpotController;
