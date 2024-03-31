import { IAttackModel } from '../3-models/attack-model';
import { ValidationError } from '../3-models/client-errors';

class AttackService {
  // Radar detected an attack:
  public async attackDetected(attack: IAttackModel): Promise<IAttackModel> {
    const errors = attack.validateSync();
    if (errors) {
      throw new ValidationError(errors.message);
    }
    return attack.save();
  }
}

export const attackService = new AttackService();
