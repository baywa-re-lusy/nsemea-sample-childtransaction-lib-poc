import {SampleParentTransactionService} from "@nsemea_lib/Services/SampleParentTransactionService";
import * as log from 'N/log';

export class SampleChildTransactionService extends SampleParentTransactionService {
  override (message: string) {
    super.log(message);
    log.debug('SampleChildTransactionService', message);
  }
}